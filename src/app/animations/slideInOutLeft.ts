import { trigger, style, animate, transition, keyframes, AnimationTriggerMetadata } from '@angular/animations'

export const slideInOutLeft: AnimationTriggerMetadata =
    trigger('slideInOutLeft', [

        transition(':enter',

            animate('600ms ease-in-out',

                keyframes([
                    style({ opacity: 0, transform: 'translateX(-50%)', offset: 0 }),
                    style({ opacity: .8, transform: 'translateX(10%)', offset: 0.8 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
                ]))
        ),

        transition(':leave',

            animate('600ms ease-in-out',

                keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: .8, transform: 'translateX(10%)', offset: 0.5 }),
                    style({ opacity: 0, transform: 'translateX(-50%)', offset: 1 })
                ])))
    ])