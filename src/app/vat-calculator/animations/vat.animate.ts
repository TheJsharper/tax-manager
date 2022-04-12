import { animate, AnimationTriggerMetadata, group, style, transition, trigger } from "@angular/animations";
export class VatAnimation {
    static errorAnimation(): AnimationTriggerMetadata {
        return trigger('flyInOut', [
            transition(':enter', [
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translateX(-50px)',
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition(':leave', [
                group([
                    animate('0.3s ease', style({
                        transform: 'translateX(-50px)',
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    }
}