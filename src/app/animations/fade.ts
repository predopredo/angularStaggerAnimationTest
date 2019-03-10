import { trigger, style, animate, transition, state, AnimationTriggerMetadata } from '@angular/animations'

export const fade: AnimationTriggerMetadata =
  trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate('100ms')
    ])
  ]);