import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import TwitterComponent from './TwitterComponent/twitter.component';


const routes: Routes = [{path: '', component: TwitterComponent}];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
