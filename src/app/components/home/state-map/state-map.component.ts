import { Component } from '@angular/core';

@Component({
  selector: 'app-state-map',
  standalone: true,
  imports: [],
  templateUrl: './state-map.component.html',
  styleUrl: './state-map.component.scss'
})
export class StateMapComponent {

  highlightedStates = ['CA', 'NY', 'GA', 'CO', 'NM', 'MT']; // example states

  isHighlighted(stateCode: string): boolean {
    return this.highlightedStates.includes(stateCode);
  }
}
