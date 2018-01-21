export class Comuna {

	public id: string;
	public codigo: string;
	public nombre: string;
	public descripcion: string;
	public codTabGeneral: string;
	public codTabPartPadre: string;
	public estado: number;


	set Id(id: string) { this.id = id; }
	get Id(): string { return this.id }

	set Codigo(id: string) { this.id = id; }
	get Codigo(): string { return this.codigo }

	set Descripcion(descripcion: string) { this.descripcion = descripcion; }
	get Descripcion(): string { return this.descripcion }

	set CodTabGeneral(codTabGeneral: string) { this.codTabGeneral = codTabGeneral; }
	get CodTabGeneral(): string { return this.codTabGeneral }

	set CodTabPartPadre(codTabPartPadre: string) { this.codTabPartPadre = codTabPartPadre; }
	get CodTabPartPadre(): string { return this.codTabPartPadre }

	set Estado(estado: number) { this.estado = estado; }
	get Estado(): number { return this.estado }
}
