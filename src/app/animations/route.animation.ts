import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const RouterAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: 1,
      }),
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
    ], { optional: true }),
    group([
      animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1 })),
      query(':leave', [
        animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 0 })),
      ], { optional: true }),
    ]),
  ]),
]);