import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EventosServices } from '../services/eventos.services';
import { TgeServices } from '../services/tge.service';
import { RecintoServices } from '../services/recintos.service';
import { Evento } from '../models/Evento';
import { Recinto } from '../models/Recinto';
import { TipoCancha } from '../models/TipoCancha';
import { Deporte } from '../models/Deporte';
import { Constants } from '../services/global';
import { Enum } from '../services/enum.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FechaComponent } from '../components/shared/fecha/fecha.component';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {
	MatInput,
	MatAutocompleteModule,
	MatSelectTrigger,
	MatSelect
} from '@angular/material';

@NgModule({
	imports:
	[
		MatInput,
		MatAutocompleteModule,
		MatSelect,
		MatSelectTrigger
	],
	declarations: [FechaComponent],
})
@Component({
	selector: 'evento-add',
	templateUrl: '../views/addevento.html',
	providers: [
		EventosServices,
		TgeServices,
		Enum.EnumNivel,
		Enum.EnumTge,
		RecintoServices
	]
})
export class AgregarEventoComponent {
	private codigoTge: Enum.EnumTge = new Enum.EnumTge();
	private nivel: Enum.EnumNivel = new Enum.EnumNivel();

	public titulo: string;
	public evento: Evento = new Evento();
	public tgeServices: TgeServices;
	public lstDeporte: Deporte[] = [];
	public lstTipoCancha: TipoCancha[] = [];
	public lstNiveles;
	public lstRecintos: Recinto[] = [];
	public filterRecintos: Observable<Recinto[]>;
	public formularioEvento: FormGroup;

	constructor(
		private _eventoService: EventosServices,
		private _tgeServices: TgeServices,
		private _tgeRecintos: RecintoServices,
		private _route: ActivatedRoute,
		private _router: Router,
		private _codigoTge: Enum.EnumTge,
		private fb: FormBuilder
	) {
		this.titulo = 'Crear nuevo Evento';
	}

	ngOnInit() {
		this.LoadDeportes();
		this.InitFormEvento();
		this.LoadTipoCancha();
		this.LoadNiveles();
		this.LoadRecintos();

		this.filterRecintos = this.formularioEvento.get('recintos').valueChanges
			.startWith(null)
			.map(recinto => recinto && typeof recinto === 'object' ? recinto.nombre : recinto)
			.map(nombre => nombre ? this.filter(nombre) : this.lstRecintos.slice());
	}

	InitFormEvento() {
		this.formularioEvento = this.fb.group({
			deporte: ['', Validators.required],
			fecha: ['', [Validators.required, Validators.required]],
			tipoCancha: ['', [Validators.required, Validators.required]],
			colorCamiseta: ['', [Validators.required, Validators.minLength(15)]],
			niveles: ['', Validators.required],
			recintos: ['', Validators.required],
			cuotaArriendo: ['', Validators.required]
		})
	}

	LoadTipoCancha() {
		this.lstTipoCancha = this._tgeServices.getTipoCancha(this.codigoTge.TipoCancha);
	}

	LoadDeportes() {
		this.lstDeporte = this._tgeServices.getDeporte(this.codigoTge.Deporte);
	}

	LoadNiveles() {
		this.lstNiveles = this.nivel.GetNiveles();
	}

	LoadRecintos() {
		this._tgeRecintos.getAllRecintos().subscribe(
			data => {
				data.forEach(element => {
					this.lstRecintos.push(element);
				});
			},
			error => {

				console.log(error)
			}
		);
	}

	filter(recintoParams: string): Recinto[] {
		console.log(recintoParams);
		console.log(this.lstRecintos);
		return this.lstRecintos.filter(recinto =>
			recinto.Nombre.toLowerCase().indexOf(recintoParams.toLowerCase()) === 0);
	}

	displayFn(recinto: Recinto) {
		return recinto ? recinto.Nombre : recinto.Nombre;
	}

	onSubmit() {

		var deporte = this.lstDeporte.filter(deporte => deporte.id == this.formularioEvento.get('deporte').value);
		var fecha = this.formularioEvento.get('fecha').value;
		var tipoCancha = this.lstTipoCancha.filter(cancha => cancha.Id == this.formularioEvento.get('tipoCancha').value);
		var colorCamiseta = this.formularioEvento.get('colorCamiseta').value;
		var nivel = this.formularioEvento.get('niveles').value;
		var recinto = this.formularioEvento.get('recintos').value;
		var cuota = this.formularioEvento.get('cuotaArriendo').value;

		let newEvento: Evento = new Evento();
		newEvento.Deporte = deporte[0];
		newEvento.Desde = fecha;
		newEvento.Recinto = recinto;
		newEvento.cuotaArriendo = cuota;

		let jsonEvento = JSON.stringify(newEvento);
		console.log(jsonEvento);
		// this._eventoService.saveEvento(newEvento).subscribe(
		// 	data => {
		// 		console.log("Evento Registrado exitosamente");
		// 	},
		// 	error => {
		// 		console.log(error)
		// 	}
		// );
	}
}