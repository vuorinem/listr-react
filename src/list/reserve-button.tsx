import React, { FunctionComponent } from "react";

type ReserveButtonProps = {
    onClick: () => void;
}

export const ReserveButton: FunctionComponent<ReserveButtonProps> = (props) => (
    <button
        onClick={props.onClick}
    >Reserve</button>
)