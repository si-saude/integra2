export class DateFilter {
    private inico: number;
    private fim: number;
    private typeFilter: string;

	public get $inico(): number {
		return this.inico;
	}

	public get $fim(): number {
		return this.fim;
	}

	public get $typeFilter(): string {
		return this.typeFilter;
	}

	public set $inico(value: number) {
		this.inico = value;
	}

	public set $fim(value: number) {
		this.fim = value;
	}

	public set $typeFilter(value: string) {
		this.typeFilter = value;
	}

}