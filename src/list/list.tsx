import React, { Component } from "react";
import { Item } from "./item";

type ListProps = {
    name: string;
}
const TestItems = [
    'First item',
    'Second item',
    'Third item',
];

export class List extends Component<ListProps> {
    handleReserve(itemIndex: number) {
        alert(`Reserved '${TestItems[itemIndex]}'`);
    }

    render() {
        const items = TestItems.map((item, index) => (
            <Item
                label={item}
                onReserve={() => this.handleReserve(index)}
            />
        ));

        return (
            <div className="listr-list">
                <h1>{this.props.name}</h1>
                {items}
            </div>
        );
    }
}