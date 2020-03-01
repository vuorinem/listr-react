type ItemData = {
    label: string;
    link?: string;
    count: number;
    reservedCount: number;
    myReservedCount: number;
}

type ListData = {
    name: string;
    items: ItemData[];
}

export function getList(name: string): Promise<ListData> {
    // TODO
    return Promise.resolve({
        name: name,
        items: [],
    });
}