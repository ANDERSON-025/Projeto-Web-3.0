import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent {
  @Input('icone') icone = '';
  @Input('titulo') titulo = '';
  @Output() click = new EventEmitter<any>();

  onClick(){
    this.click.emit(null);
  }
}
