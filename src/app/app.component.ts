import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';//a ver si cambia algo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclodevida';
  name:string;


} 