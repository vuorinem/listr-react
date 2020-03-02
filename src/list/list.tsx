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
    const handleReserve = (itemIndex: number) => {
        alert(`Reserved '${TestItems[itemIndex]}'`);
    }

    return (
        <div className="listr-list">
            <h1>{props.name}</h1>
            {TestItems.map((item, index) => (
                <Item
                    label={item}
                    onReserve={() => handleReserve(index)}
                />
            ))}
        </div>
    );
}