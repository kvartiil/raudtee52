import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.ts',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupAlignExample {}
