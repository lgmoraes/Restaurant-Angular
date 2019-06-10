import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 2, rows: 1 },
          { title: 'Les burgers', cols: 2, rows: 1 },
          { title: 'Les Crêpes', cols: 2, rows: 1 },
          { title: 'Les pizzas', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Les burgers', cols: 1, rows: 1 },
        { title: 'Les Crêpes', cols: 1, rows: 2 },
        { title: 'Les pizzas', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
