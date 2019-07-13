import { Component, Input } from '@angular/core';
import { DeckInterface } from '../../app.component';

@Component({
  selector: 'app-card-suite-and-face',
  templateUrl: './card-suite-and-face.component.html',
  styleUrls: ['./card-suite-and-face.component.scss']
})
export class CardSuiteAndFaceComponent {

  constructor() { }

  @Input() suiteAndFace: DeckInterface;
}
