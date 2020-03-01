import React, { Component } from "react";
import { ReserveButton } from "./reserve-button";

type ItemProps = {
    label: string;
    onReserve: () => void;
}

export class Item extends Component<ItemProps> {
    render() {
        return (
            <div className="listr-item">
                <span className="listr-item-name">{this.props.label}</span>
                <ReserveButton
                    onClick={this.props.onReserve} />
            </div>
        );
    }
}