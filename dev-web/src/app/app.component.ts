import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projetoUninter';
  data: Array<any>;constructor(){
    this.data = [
      {Name: '1', RU: ' 1556354', CURSOS: ' Data Science', DNS: '99/99/9999'},
      {Name: '2', RU: ' 2234567', CURSOS: ' Artificial Intelligence', DNS: '98/98/9998'},
      {Name: '3', RU: ' 3654321', CURSOS: ' Machine Learning', DNS: '97/99/9997'},
      {Name: '4', RU: ' 4576178', CURSOS: ' Deep Learning', DNS: '96/99/9996'},
      {Name: '5', RU: ' 5576155', CURSOS: ' Internet of Things (IoT)', DNS: '95/99/9995'}
    ];

  }
}
