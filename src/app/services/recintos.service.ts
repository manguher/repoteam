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
                    recinto.Id = element.id;
                    recinto.Nombre = element.nombre;
                    recinto.MailContacto = element.mailContacto;
                    recinto.WebPage = element.webpage
                    recinto.Telefono1 = element.telefono1;
                    recinto.Telefono2 = element.telefono2;
                    recinto.Telefono3 = element.telefono3;
                    recinto.Latitud = element.latitud;
                    recinto.Longitud = element.longitud;
                    recinto.Direccion = element.direccion;
                    recinto.Comuna = element.comuna;
                    recinto.Observacion = element.observacion;
                    recinto.Estado = element.estado;
                    lstRecintos.push(recinto);

                });
            });
        return lstRecintos;
    }
}