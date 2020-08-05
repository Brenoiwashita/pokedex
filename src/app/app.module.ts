import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './service/pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PokemonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      PokemonService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
