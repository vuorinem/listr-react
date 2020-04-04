import React, { FunctionComponent } from "react";

type CancelButtonProps = {
    onClick: () => void;
}

export const CancelButton: FunctionComponent<CancelButtonProps> = (props) => (
    <button
        onClick={props.onClick}
    >Cancel</button>
)