import { Component, OnInit , Input} from '@angular/core';
import { Api } from 'src/app/model/api';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  @Input() infoApi : Api;

  constructor() { }

  ngOnInit() {
  }



}
