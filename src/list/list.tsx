import React, { FunctionComponent } from "react";
import { Item } from "./item";

type ListProps = {
    name: string;
}
const TestItems = [
    'First item',
    'Second item',
    'Third item',
];

export const List: FunctionComponent<ListProps> = (props) => {
    const handleReserve = (item: string) => {
        alert(`Reserved '${item}'`);
    }

    return (
        <div className="listr-list">
            <h1>{props.name}</h1>
            {TestItems.map((item, index) => (
                <Item
                    key={index}
                    label={item}
                    onReserve={(item) => handleReserve(item)}
                />
            ))}
        </div>
    );
}