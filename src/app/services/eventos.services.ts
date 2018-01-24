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

	constructor(private _http: Http) {
		this._url = Constants.urlTpart;
		this._urlSaveEvento = Constants.urlSaveEvento;
	}

	getEventoById(idEventos: number) {
		return this._http.get(this._url + 'evento').map(res => res.json());
	}

	saveEvento(evento: Evento) {

		let eventoJson = JSON.stringify(evento)
		const headers = new Headers({ 'Content-Type': 'application/json' });

		return this._http.post("/evento/registrar", eventoJson, { headers: headers })
			.subscribe(
			() => { },
			err => console.log(err))
		/*
		// 		let headers = new Headers();
		// 		headers.append('Content-Type', 'application/json; charset=utf-8');
		let headers = new Headers({ 'Content-Type': 'application/json' })

		return this._http.post(this._urlSaveEvento, JSON.stringify(evento), { headers: headers }).subscribe(
			() => { },
			err => console.log(err)
		);
		*/

		// let jsonEvento = JSON.stringify(evento);
		// let params = jsonEvento;
		// let headers = new Headers({ 'Content-Type': 'application/json' })
		// return this._http.post(this._urlSaveEvento, params, { headers: headers }).map(res => res.json());
	}
}