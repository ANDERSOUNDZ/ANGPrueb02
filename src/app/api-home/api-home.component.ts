import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/model/api';
import { KttyApiService } from '../services/ktty-api.service';

@Component({
  selector: 'app-api-home',
  templateUrl: './api-home.component.html',
  styleUrls: ['./api-home.component.scss']
})
export class ApiHomeComponent implements OnInit {

  //Este verifica que si esta heredando y lo trae desde el hijo
  //infoCats = [''];
  
  infoCats : Api[] = [];

  //crear variable para ngModel
  add: string;

  //empezar a utilizar el servicio
  constructor(private serv: KttyApiService) {}

  //
  ngOnInit() {
    
    //aqui se comunica a la variable para traer la funcion de el servicio
    this.serv.dataInfo().subscribe(
      //creamos variable para mostrar info del modulo api
      (extDatos: Api[]) =>{
        this.infoCats = extDatos;
      }
    )
  }

  darValor(){

    this.infoCats.push(this.ngOnInit());

  }


}
