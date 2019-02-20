import { Injectable } from '@angular/core';
//importar el archivo ts de modelo para retornar datos
import { Api } from 'src/app/model/api';
//importar el servicio http
import { HttpClient } from '@angular/common/http';
//importar observable
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KttyApiService {

  //crear la variable que permitira a travez del url traer datos de cat-facts
  private linkUrl = "https://cat-fact.herokuapp.com";
  //variable que indica cantidad que voy a traer *-amount - lot - quantity
  
  //aqui debe interactuar la variable add
  private lot = 2;


  //creando constructor para enlazar datos
  constructor(private http:HttpClient) {}

  //crear funcion para traer un observable para comunicar los servicios
  //recordar que una funcion que se declara de algun tipo de valor ninguno debe retornar un valor
  dataInfo(): Observable<Api[]>{
    //this.linkUrl+"/facts/random?animal=cat&amount=2" [Este link permite conocer los end points, osea el punto al que quiero llegar a obrtener los datos]
    return this.http.get<Api[]>(this.linkUrl+"/facts/random?animal=cat&amount="+this.lot);
  }
}
