import React, { FunctionComponent, useEffect, useState } from "react";
import { Item } from "./item";
import { ListData, getList } from "./list-api";

type ListProps = {
    name: string;
}

export const List: FunctionComponent<ListProps> = (props) => {
    const handleReserve = (item: string) => {
        alert(`Reserved '${item}'`);
    }

    const [list, setList] = useState<ListData | null>(null);

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
                    label={item.label}
                    onReserve={(item) => handleReserve(item)}
                />
            ))}
        </div>
    );
}