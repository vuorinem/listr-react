import { connect } from 'socket.io-client';

const currentHost = window.location.hostname;
const socketClient = connect(`http://${currentHost}:3004`);

export type ItemData = {
    label: string;
    link?: string;
    count: number;
    reservedCount: number;
    myReservedCount: number;
}

export type ListData = {
    name: string;
    items: ItemData[];
}

export type Unsubscribe = () => void;

export async function getList(name: string): Promise<ListData | null> {
    const response = await fetch(`http://${currentHost}:3003/list?name=${name}`);

    if (!response.ok) {
        return null;
    }

    return response.json();
}

export async function reserve(listName: string, itemLabel: string): Promise<boolean> {
    const response = await fetch(`http://${currentHost}:3003/list/reserve?name=${listName}&item=${itemLabel}`, {
        method: 'post',
    });

    return response.ok;
}

export async function cancel(listName: string, itemLabel: string): Promise<boolean> {
    const response = await fetch(`http://${currentHost}:3003/list/cancel?name=${listName}&item=${itemLabel}`, {
        method: 'post',
    });

    return response.ok;
}

export function subscribe(listName: string, onChange: () => void): Unsubscribe {
    const subscription = socketClient.on(listName, () => {
        onChange();
    });

    return () => {
        subscription.off(listName);
    };
}
