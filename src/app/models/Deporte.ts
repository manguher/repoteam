export class Deporte {

	public id: string;
	public nombre: string;
	public codigo: string;
	public descripcion: string;
	public codTabGeneral: string;
	public codTabPartPadre: string;
	public estado: number;


	public set Id(id: string) { this.id = id; }
	public get Id(): string { return this.id }

	public set Nombre(nombre: string) { this.nombre = nombre; }
	public get Nombre(): string { return this.nombre }

	public set Codigo(codigo: string) { this.codigo = codigo; }
	public get Codigo(): string { return this.codigo }

	public set Descripcion(descripcion: string) { this.descripcion = descripcion; }
	public get Descripcion(): string { return this.descripcion }

	public set CodTabGeneral(codTabGeneral: string) { this.codTabGeneral = codTabGeneral; }
	public get CodTabGeneral(): string { return this.codTabGeneral }

	public set CodTabPartPadre(codTabPartPadre: string) { this.codTabPartPadre = codTabPartPadre; }
	public get CodTabPartPadre(): string { return this.codTabPartPadre }

	public set Estado(estado: number) { this.estado = estado; }
	public get Estado(): number { return this.estado }
}

