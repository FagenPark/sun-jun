import {animate, style, transition, trigger, query, group, animateChild, keyframes} from '@angular/animations';
const optional = {optional: true};
function translateTo({x = 100, y = 0, rotate = 0}) {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
        left: 0
      })
    ], optional),
    query(':enter', [
      style({
        transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
      })
    ], optional),
    group([
      query(':leave', [
        animate('600ms ease-out',  style({
          transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
        }))
      ], optional),
      query(':enter', [
        animate('600ms ease-out',  style({
          transform: `translate(0, 0) rotate(0)`
        }))
      ], optional)
    ])
  ];
}

export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate('0.7s ease-out', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('0.7s ease-in', style({opacity: 0}))
  ])
]);

export const upDownAnimation = trigger('upDownAnimation', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('0.5s ease-out', style({transform: 'translateY(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('0.5s ease-in', style({transform: 'translateY(-100%)'}))
  ])
]);
export const expandCollapseAnimation = trigger('expandCollapse', [
  transition(':enter', [
    style({height: '0'}),
    animate('1s ease-out', style({height: '*'}))
  ]),
  transition(':leave', [
    style({height: '*'}),
    animate('1s ease-in', style({height: '0'}))
  ])
]);
export const zoomInOutAnimation = trigger('zoomInOutAnimation', [
  transition(':enter', [
    style({transform: 'scale(0)'}),
    animate('0.5s ease-out', style({transform: 'scale(1)'}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)'}),
    animate('0.5s ease-in', style({transform: 'scale(0)'}))
  ])
]);
export const zoomFadeInOutAnimation = trigger('zoomFadeInOutAnimation', [
  transition(':enter', [
    style({transform: 'scale(0)', opacity: 0}),
    animate('0.3s ease-out', style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate('0.3s ease-in', style({transform: 'scale(0)', opacity: 0}))
  ])
]);

// route animations: basic
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], optional),
    query(':enter', [
      animate('300ms ease', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
      }))
    ], optional),
    query(':leave', [
      animate('300ms ease', style({
        opacity: 1,
        transform: 'scale(0) translateY(100%)'
      }))
    ], optional)
  ])
]);

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
        left: 0
      })
    ], optional),
    query(':enter', [
      style({
        left: '-100%'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500' +
          'ms ease', style({
          left: '100%'
        }))
      ], optional),
      query(':enter', [
        animate('500' +
          'ms ease', style({
          left: '0'
        }))
      ], optional)
    ])
  ]),
  transition('* => isRight', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
        right: 0
      })
    ], optional),
    query(':enter', [
      style({
        right: '-100%'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500' +
          'ms ease', style({
          right: '100%'
        }))
      ], optional),
      query(':enter', [
        animate('500' +
          'ms ease', style({
          right: '0'
        }))
      ], optional)
    ])
  ]),
  transition('isRight => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
        right: 0
      })
    ], optional),
    query(':enter', [
      style({
        right: '-100%'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500' +
          'ms ease', style({
          right: '100%'
        }))
      ], optional),
      query(':enter', [
        animate('500' +
          'ms ease', style({
          right: '0'
        }))
      ], optional)
    ])
  ]),
  transition('isLeft => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
        left: 0
      })
    ], optional),
    query(':enter', [
      style({
        left: '-100%'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500' +
          'ms ease', style({
          left: '100%'
        }))
      ], optional),
      query(':enter', [
        animate('500' +
          'ms ease', style({
          left: '0'
        }))
      ], optional)
    ])
  ])
]);

export const transformer = trigger('routeAnimations', [
  transition('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
  transition('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 })),
  transition('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
  transition('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }))
]);

export const stepper = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%'
      })
    ], optional),
    group([
      query(':enter', [
        animate('1200ms ease',  keyframes([
          style({ offset: 0, transform: 'scale(0) translateX(100%) rotate(-180deg)' }),
          style({ offset: 0.35, transform: 'scale(0.5) translateX(25%) rotate(-120deg)' }),
          style({ offset: 1, transform: 'scale(1) translateX(0%) rotate(0)' }),
        ]))
      ], optional),
      query(':leave', [
        animate('1200ms ease',  keyframes([
          style({ offset: 0, transform: 'scale(1)' }),
          style({ offset: 0.35, transform: 'scale(0.5) translateX(-25%) rotate(-60deg)' }),
          style({ offset: 1, transform: 'scale(0) translateX(-100%) rotate(-180deg)' }),
        ]))
      ], optional)
    ])
  ])
]);
