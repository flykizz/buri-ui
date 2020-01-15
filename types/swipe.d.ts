import { BuriComponent } from './component';

export type SwipeToOptions = {
  immediate?: boolean;
};

export class Swipe extends BuriComponent {
  swipeTo(index: number, options?: SwipeToOptions): void;

  resize(): void;
}
