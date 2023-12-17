import { trigger,transition,style,query,group,animate,animateChild,keyframes } from "@angular/animations";

export const slider =
trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') ),
]);

function slideTo(direction:string){
    const optional = { optional: true };
    const translateX = direction == 'right' ? '10%' : '-10%';
    return [
       query(':enter, :leave', [
              style({
                position: 'absolute',
                top: "50%",
                transform: `translateY(-50%) translateX(${translateX})`,
                margin: '0 20vh',
                [direction]: 0,
                width: '100%'
              })
         ], optional),
            query(':enter', [
                style({ [direction]: '-100%'})
            ]),
            group([
                query(':leave', [
                    animate('600ms ease-out', style({ [direction]: '100%'}))
                ], optional),
                query(':enter', [
                    animate('600ms ease-in-out', style({ [direction]: '0%'}))
                ])
            ]),
    ];
}