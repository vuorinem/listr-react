import React, { FunctionComponent } from "react";
import { ReserveButton } from "./reserve-button";
import { ItemData } from "./list-api";

type ItemProps = {
    item: ItemData;
    onReserve: (item: ItemData) => void;
}

export const Item: FunctionComponent<ItemProps> = (props) => (
    <div className="listr-item">
        <span className="listr-item-name">{props.item.label}</span>
        <ReserveButton
            onClick={() => props.onReserve(props.item)} />
    </div>
)