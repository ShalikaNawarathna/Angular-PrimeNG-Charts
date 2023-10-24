import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartViewComponent } from './chart-view/chart-view.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch:'full' },
  { path : 'dashboard', component: ChartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
