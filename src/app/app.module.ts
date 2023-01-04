import {CUSTOM_ELEMENTS_SCHEMA, forwardRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { TaskListComponent } from './components/task-list/task-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { SingletonComponent } from './components/singleton/singleton.component';
import { FabrykamdComponent } from './components/fabrykamd/fabrykamd.component';
import { FabrykaabComponent } from './components/fabrykaab/fabrykaab.component';
import { FasadaComponent } from './components/fasada/fasada.component';
import { KompozytComponent } from './components/kompozyt/kompozyt.component';
import { StrategiaComponent } from './components/strategia/strategia.component';
import { IteratorComponent } from './components/iterator/iterator.component';
import { ObserwatorComponent } from './components/obserwator/obserwator.component';
import { DekoratorComponent } from './components/dekorator/dekorator.component';
import { AdapterComponent } from './components/adapter/adapter.component';
import {DownloadFileService} from "./services/download-file.service";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TestwiedzyComponent } from './components/testwiedzy/testwiedzy.component';
import {MatRadioModule} from '@angular/material/radio';
import { WynikComponent } from './components/wynik/wynik.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ToolbarComponent,
    SingletonComponent,
    FabrykamdComponent,
    FabrykaabComponent,
    FasadaComponent,
    KompozytComponent,
    StrategiaComponent,
    IteratorComponent,
    ObserwatorComponent,
    DekoratorComponent,
    AdapterComponent,
    TestwiedzyComponent,
    WynikComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatListModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatRadioModule
  ],
  // providers:[DownloadFileService],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TestwiedzyComponent),
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

