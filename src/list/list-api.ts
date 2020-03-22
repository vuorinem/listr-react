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

export function getList(name: string): Promise<ListData> {
    // TODO: Make the API call
    return Promise.resolve({
        name: name,
        items: [
            {
                label: 'First item',
                count: 1,
                link: 'https://www.google.com',
                reservedCount: 0,
                myReservedCount: 0,
            },
            {
                label: 'Second item',
                count: 1,
                link: 'https://www.google.com',
                reservedCount: 1,
                myReservedCount: 0,
            },
            {
                label: 'Third item',
                count: 1,
                link: 'https://www.google.com',
                reservedCount: 1,
                myReservedCount: 1,
            },
        ],
    } as ListData);
}