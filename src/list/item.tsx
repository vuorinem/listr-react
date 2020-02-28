import React from "react";

type ItemProps = {
    label: string;
}

export class Item extends React.Component<ItemProps> {
    render() {
        return (
            <div className="listr-item">
                <span className="listr-item-name">{this.props.label}</span>
            </div>
        );
    }
}