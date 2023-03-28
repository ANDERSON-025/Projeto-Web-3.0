import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  techs = [
    "JavaScript",
    "React",
    "Vue Js",
    "Tailwind CSS",
    "Styled Components",
    "Sass",
    "Node",
    "Typescript",
    "Angular",
    "Java",
  ];

  lang = 'português'

  changeLang(value: string){
    this.lang = value;
  }
}
