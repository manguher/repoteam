import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { AgregarEventoComponent } from './components/addevento.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';

const appRoutes: Routes = [
	//Site routes goes here 
	{
		path: '',
		component: SiteLayoutComponent,
		children: [
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: 'agregar-evento', component: AgregarEventoComponent },
			{ path: '**', component: ErrorComponent }
		]
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);