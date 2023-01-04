import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./components/task-list/task-list.component";
import {SingletonComponent} from "./components/singleton/singleton.component";
import {FabrykamdComponent} from "./components/fabrykamd/fabrykamd.component";
import {FabrykaabComponent} from "./components/fabrykaab/fabrykaab.component";
import {FasadaComponent} from "./components/fasada/fasada.component";
import {KompozytComponent} from "./components/kompozyt/kompozyt.component";
import {StrategiaComponent} from "./components/strategia/strategia.component";
import {IteratorComponent} from "./components/iterator/iterator.component";
import {ObserwatorComponent} from "./components/obserwator/obserwator.component";
import {DekoratorComponent} from "./components/dekorator/dekorator.component";
import {AdapterComponent} from "./components/adapter/adapter.component";
import {TestwiedzyComponent} from "./components/testwiedzy/testwiedzy.component";
import {WynikComponent} from "./components/wynik/wynik.component";

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent},
  { path: 'singleton', component: SingletonComponent},
  { path: 'fabrykamd', component: FabrykamdComponent},
  { path: 'fabrykaab', component: FabrykaabComponent},
  { path: 'fasada', component: FasadaComponent},
  { path: 'kompozyt', component: KompozytComponent},
  { path: 'strategia', component: StrategiaComponent},
  { path: 'iterator', component: IteratorComponent},
  { path: 'obserwator', component: ObserwatorComponent},
  { path: 'dekorator', component: DekoratorComponent},
  { path: 'adapter', component: AdapterComponent},
  { path: 'testwiedzy', component: TestwiedzyComponent},
  { path: 'wynik', component: WynikComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
