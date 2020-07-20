export class DnDItem {
    id: string;
    children: DnDItem[];

    constructor(id: string) {
        this.id = id;
        this.children = [];
    }
}
