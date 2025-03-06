
export interface Room {
    name: string;
    value: string;
    price: number;
}
export const rooms: Room[] = [
    {
        name: "Single Room (40$/day)",
        value: "SINGLE_ROOM",
        price: 40
    },
    {
        name: "Double Room (80$/day)",
        value: "DOUBLE_ROOM",
        price: 80
    },
    {
        name: "Single Room With Terrace (120$/day)",
        value: "TERRACE_ROOM",
        price: 120
    }
]