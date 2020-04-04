import React, { FunctionComponent } from "react";
import { ReserveButton } from "./reserve-button";
import { ItemData } from "./list-api";
import { CancelButton } from "./cancel-button";

type ItemProps = {
    item: ItemData;
    onReserve: (item: ItemData) => void
    onCancel: (item: ItemData) => void;
}

export const Item: FunctionComponent<ItemProps> = (props) => (
    <div className="listr-item">
        <span className="listr-item-name">{props.item.label}</span>
        <span className="listr-item-count">({props.item.reservedCount}/{props.item.count})</span>
        <ReserveButton
            onClick={() => props.onReserve(props.item)} />
        <CancelButton
            onClick={() => props.onCancel(props.item)} />
    </div>
)