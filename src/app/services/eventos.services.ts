import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Evento } from '../models/Evento';
import { Constants } from './global';

@Injectable()
export class EventosServices {

	private _url: string;
	private _urlSaveEvento: string;

	constructor(public _http: Http) {
		this._url = Constants.urlTpart;
		this._url = Constants.urlSaveEvento;
	}

	getEventoById(idEventos: number) {
		return this._http.get(this._url + 'evento').map(res => res.json());
	}

	saveEvento(evento: Evento) {
		let jsonEvento = JSON.stringify(evento);
		let params = jsonEvento;
		console.log(params);
		let headers = new Headers({ 'Content-Type': 'application/json' })
		return this._http.post(this._urlSaveEvento, params, { headers: headers }).map(res => res.json());
	}
}