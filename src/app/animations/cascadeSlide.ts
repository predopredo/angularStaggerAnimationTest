import { trigger, keyframes, style, animate, transition, query, stagger, AnimationTriggerMetadata } from '@angular/animations'
export const cascadeSlide: AnimationTriggerMetadata =
    trigger('slideInOutLeft', [
        transition('* <=> *', [
            query( //enter query
                ':enter',
                [
                    style({ opacity: 0, transform: 'translateX(-50%)' }),//starts invisible and -50% X
                    stagger(
                        '200ms',
                        animate(
                            '600ms ease-in-out',
                            keyframes([
                                style({ opacity: .8, transform: 'translateX(10%)', offset: 0.5 }),
                                style({ opacity: 1, transform: 'translateX(0)', offset: 1 })//moves to position and gets fully visible
                            ])//end of keyframes
                        )//end of animate
                    )//end of stagger
                ],
                { optional: true }
            ),//enter query ends
            query( //leave query
              ':leave', 
              animate('300ms',
                keyframes([
                    style({ opacity: .8, transform: 'translateX(-10%)', offset: 0.5 }),
                    style({ opacity: 0, transform: 'translateX(50%)', offset: 1 })
                ])//end of keyframes
            ),//end of animate
                { optional: true }
            )//leave query ends
        ])//transition ends
    ]);