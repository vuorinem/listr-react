import React, { FunctionComponent } from "react";
import { ReserveButton } from "./reserve-button";

type ItemProps = {
    label: string;
    onReserve: (item: string) => void;
}

export const Item: FunctionComponent<ItemProps> = (props) => (
    <div className="listr-item">
        <span className="listr-item-name">{props.label}</span>
        <ReserveButton
            onClick={() => props.onReserve(props.label)} />
    </div>
)