import React, { Component } from "react";

type ReserveButtonProps = {
    onClick: () => void;
}

export class ReserveButton extends Component<ReserveButtonProps> {
    render() {
        return (
            <button
                onClick={this.props.onClick}
            >Reserve</button>
        );
    }
}