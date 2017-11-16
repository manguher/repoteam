import { Deporte } from '../models/Deporte'
import { TipoCancha } from '../models/TipoCancha'
import { Recinto } from '../models/Recinto'

export class Evento {

	private id: string;
	private deporte: Deporte;
	private tipoCancha: TipoCancha;
	private dateDesde: Date;
	private dateHasta: Date;
	private recinto: Recinto;
	private cuotaArriend: number;
	private estado: number;

	public set Id(id: string) { this.id = id; }
	public get Id(): string { return this.id }

	public set Deporte(deporte: Deporte) { this.deporte = deporte; }
	public get Deporte(): Deporte { return this.deporte }

	public set TipoCancha(tipoCancha: TipoCancha) { this.tipoCancha = tipoCancha; }
	public get TipoCancha(): TipoCancha { return this.tipoCancha }

	public set Desde(desde: Date) { this.dateDesde = desde; }
	public get Desde(): Date { return this.dateDesde }

	public set hasta(hasta: Date) { this.dateHasta = hasta; }
	public get hasta(): Date { return this.dateHasta }

	public set Recinto(recinto: Recinto) { this.recinto = recinto; }
	public get Recinto(): Recinto { return this.recinto }

	public set cuotaArriendo(cuota: number) { this.cuotaArriend = cuota }
	public get cuotaArriendo(): number { return this.cuotaArriend }

	public set Estado(estado: number) { this.estado = estado; }
	public get Estado(): number { return this.estado }
}

