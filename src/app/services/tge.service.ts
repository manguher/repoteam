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
		let deportes = this._http.get(this._url + codDeporte).map(res => res.json())
			.subscribe(data => {

				data.forEach(item => {
					let deporte: Deporte = new Deporte();
					deporte.Id = item.id;
					deporte.Codigo = item.codigo;
					deporte.CodTabGeneral = item.CodTabGeneral;
					deporte.CodTabPartPadre = item.codTabPartPadre;
					deporte.Nombre = item.nombre;
					deporte.Descripcion = item.descripcion;
					deporte.Estado = item.estado;
					lstDeporte.push(deporte);
				});
			});

		return lstDeporte;
	}

	getTipoCancha(codTipoCancha: string): TipoCancha[] {
		let lstTipoCanchas: TipoCancha[] = [];
		let tipoCanchas = this._http.get(this._url + codTipoCancha).map(res => res.json())
			.subscribe(data => {
				data.forEach(element => {

					let tipoCancha: TipoCancha = new TipoCancha();

					tipoCancha.Id = element.id;
					tipoCancha.Codigo = element.codigo;
					tipoCancha.Nombre = element.nombre;
					tipoCancha.Descripcion = element.descripcion;
					tipoCancha.CodTabGeneral = element.codTabGeneral;
					tipoCancha.CodTabPartPadre = element.codTabPartPadre;

					lstTipoCanchas.push(tipoCancha);
				});
			},
			error => {
				console.log(error)
			});

		return lstTipoCanchas;
	}
}

