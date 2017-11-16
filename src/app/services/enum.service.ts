export module Enum {

	export class EnumTge {

		private static ID_TIPO_DEPORTE = "000001";
		private static ID_TIPO_CANCHA = "000002";

		private _deportes: string;
		private _tipoCancha: string;
		private _nivelJugador: string;
		private _dias: string;
		private _pais: string;
		private _region: string;
		private _ciudad: string;

		constructor() {

			this._deportes = EnumTge.ID_TIPO_DEPORTE;
			this._tipoCancha = EnumTge.ID_TIPO_CANCHA;
			/*this._tipoCancha = "000002"; 	
			this._nivelJugador = "000003"; 	
			this._dias = "000004"; 	
			this._pais = "000005"; 	
			this._region = "000006"; 	
			this._ciudad = "000007"; 	*/
		}

		public get Deporte(): string { return this._deportes }
		public get TipoCancha(): string { return this._tipoCancha }

		/*	get TipoCancha():string{return this._tipoCancha}
			get NivelJuego():string{return this._nivelJugador}
			get Dias():string{return this._dias}
			get Pais():string{return this._pais}
			get Region():string{return this._region}
			get Ciudad():string{return this._ciudad}
			*/
	};

	export class EnumNivel {

		private _collection: ICollection

		public GetNiveles() {
			return this._collection =
				[
					{ id: 1, label: 'Igual Juego' },
					{ id: 2, label: 'Con todo' },
					{ id: 3, label: 'Pro' },
				];
		}
	}

	interface ICollection {
		[index: number]: { id: number; label: string; };
	}

	export class Constantes {

		private static URL_TPART = "http://localhost:8082/tpart/listarportge/";
		private static URL_RECINTOS = "http://localhost:8081/recinto/listar";
		private static DATE_FMT = 'dd/MMM/yyyy';
		private static DATE_TIME_FMT = '${Constants.DATE_FMT} hh:mm:ss';

		private _urlTpart;
		private _urlRecinto;
		private _dateFmt;
		private _dateTimeFmt;

		constructor() {
			this._urlTpart = Constantes.URL_TPART;
			this._urlRecinto = Constantes.URL_RECINTOS;
		}

		public get UrlTPart(): string { return this._urlTpart }
		public get UrlRecintos(): string { return this._urlRecinto }
	};
};

