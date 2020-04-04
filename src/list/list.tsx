import React, { FunctionComponent, useEffect, useState } from "react";
import { Item } from "./item";
import { ListData, getList, ItemData } from "./list-api";

type ListProps = {
    name: string;
}

export const List: FunctionComponent<ListProps> = (props) => {
    const [list, setList] = useState<ListData | null>(null);
    let unsubscribe: Unsubscribe | null = null;

    const handleReserve = async (item: ItemData) => {
        if (!list) {
            return;
        }

        await reserve(list.name, item.label);
    }

    const handleCancel = async (item: ItemData) => {
        if (!list) {
            return;
        }

        await cancel(list.name, item.label);
    }

    useEffect(() => {
        const loadList = async () => {
            setList(await getList(props.name));
        };

        loadList();
    }, [props.name]);

    return (
        <div className="listr-list">
            <h1>{props.name}</h1>
            {list?.items.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    onReserve={(item) => handleReserve(item)}
                    onCancel={(item) => handleCancel(item)}
                />
            ))}
        </div>
    );
}