export class GenericFilter {
    private id: number;
    private pageSize = 10;
    private pageNumber = 1;

    public get $id(): number {
        return this.id;
    }

    public get $pageSize(): number {
        return this.pageSize;
    }

    public get $pageNumber(): number {
        return this.pageNumber;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public set $pageSize(value: number) {
        this.pageSize = value;
    }

    public set $pageNumber(value: number) {
        this.pageNumber = value;
    }
}
