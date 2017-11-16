import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from './global';
import { Evento } from '../models/Evento';
import { Recinto } from '../models/Recinto';
import { TipoCancha } from '../models/TipoCancha';
import { Deporte } from '../models/Deporte';

@Injectable()
export class TgeServices {
	private _url: string;

	constructor(public _http: Http) {
		this._url = Constants.urlTpart;
	}

	getAllRecintos() {
		return this._http.get(this._url + 'evento').map(res => res.json());
	}

	getComunas() {
		return this._http.get(this._url + 'evento').map(res => res.json());
	}

	getDeporte(codDeporte: string): Deporte[] {

		let lstDeporte: Deporte[] = [];
		let deportes = this._http.get(this._url + codDeporte).map(res => res.json());
		deportes.forEach(element => {
			let deporte: Deporte = new Deporte();
			deporte.Id = element.id;
			deporte.Codigo = element.codigo;
			deporte.CodTabGeneral = element.CodTabGeneral;
			deporte.CodTabPartPadre = element.codTabPartPadre;
			deporte.Nombre = element.nombre;
			deporte.Descripcion = element.descripcion;
			deporte.Estado = element.estado;
			lstDeporte.push(deporte);
		});

		return lstDeporte;
	}

	getTipoCancha(codTipoCancha: string): TipoCancha[] {
		let lstTipoCanchas: TipoCancha[] = [];
		let tipoCanchas = this._http.get(this._url + codTipoCancha).map(res => res.json());

		tipoCanchas.forEach(element => {
			let tipoCancha: TipoCancha = new TipoCancha();
			tipoCancha.Id = element.id;
			tipoCancha.Codigo = element.codigo;
			tipoCancha.Nombre = element.nombre;
			tipoCancha.Descripcion = element.descripcion;
			tipoCancha.CodTabGeneral = element.codTabGeneral;
			tipoCancha.CodTabPartPadre = element.codTabPartPadre;
			lstTipoCanchas.push(tipoCancha);
		});

		return lstTipoCanchas;
	}
}

