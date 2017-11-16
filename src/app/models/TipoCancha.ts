export class TipoCancha {

	private id: string;
	private codigo: string;
	private nombre: string;
	private descripcion: string;
	private codTabGeneral: string;
	private codTabPartPadre: string;
	private estado: number;

	set Id(id: string) { this.id = id; }
	get Id(): string { return this.id }

	set Nombre(nombre: string) { this.nombre = nombre; }
	get Nombre(): string { return this.nombre }

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

