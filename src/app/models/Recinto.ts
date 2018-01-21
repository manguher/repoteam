import { Comuna } from '../models/Comuna'

export class Recinto {

	private id: string;
	private nombre: string;
	private mailContacto: string;
	private webpage: string;
	private telefono1: number;
	private telefono2: number;
	private telefono3: number;
	private latitud: number;
	private longitud: number;
	private direccion: string;
	private comuna: Comuna;
	private observacion: string;
	private interseccion: string;
	public estado: number;


	set Id(id: string) { this.id = id; }
	get Id(): string { return this.id }

	set Nombre(nombre: string) { this.nombre = nombre; }
	get Nombre(): string { return this.nombre }

	set MailContacto(mailContacto: string) { this.mailContacto = mailContacto; }
	get MailContacto(): string { return this.mailContacto }

	set WebPage(webPage: string) { this.webpage = webPage; }
	get WebPage(): string { return this.webpage }


	set Telefono1(telefono1: number) { this.telefono1 = telefono1; }
	get Telefono1(): number { return this.telefono1 }

	set Telefono2(telefono2: number) { this.telefono2 = telefono2; }
	get Telefono2(): number { return this.telefono2 }

	set Telefono3(telefono3: number) { this.telefono3 = telefono3; }
	get Telefono3(): number { return this.telefono3 }

	set Latitud(latitud: number) { this.latitud = latitud; }
	get Latitud(): number { return this.latitud }

	set Longitud(longitud: number) { this.longitud = longitud; }
	get Longitud(): number { return this.longitud }

	set Direccion(direccion: string) { this.direccion = direccion; }
	get Direccion(): string { return this.direccion }

	set Comuna(comuna: Comuna) { this.comuna = comuna; }
	get Comuna(): Comuna { return this.comuna }

	set Observacion(obs: string) { this.observacion = obs; }
	get Observacion(): string { return this.observacion }

	set Interseccion(interSeccion: string) { this.interseccion = interSeccion }
	get Interseccion(): string { return this.interseccion; }

	set Estado(estado: number) { this.estado = estado; }
	get Estado(): number { return this.estado }
}

