import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from './global';
import { Recinto } from '../models/Recinto';

@Injectable()
export class RecintoServices {
    private url: string;

    constructor(public _http: Http) {
        this.url = Constants.urlRecintos;
    }

    getAllRecintos(): Recinto[] {
        let lstRecintos: Recinto[] = [];
        let recintosJson = this._http.get(this.url).map(res => res.json())
            .subscribe(data => {
                data.forEach(element => {

                    let recinto: Recinto = new Recinto();
                    recinto.Comuna = element.comuna;
                    recinto.Direccion = element.direccion;
                    recinto.Estado = element.estado;
                    recinto.Id = element.id;
                    recinto.Interseccion = element.interseccion;
                    recinto.Latitud = element.latitud;
                    recinto.Longitud = element.longitud;
                    recinto.MailContacto = element.MailContacto;
                    recinto.Nombre = element.nombre;
                    recinto.Observacion = element.observacion;
                    recinto.Observacion = element.observacion;
                    lstRecintos.push(recinto);

                });
            });
        return lstRecintos;
    }
}