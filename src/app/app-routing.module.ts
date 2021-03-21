import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: "store",
    component: StoreComponent,
    pathMatch:"full"
  },
  {
    path: "admin",
    component: AdminComponent,
    pathMatch:"full"
  },
  {
    path: "cart",
    component: CartComponent,
    pathMatch:"full"
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
