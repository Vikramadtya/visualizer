import { Sorter } from "../sorter";
import { Sort } from "../utility";

class BubbleSort extends Sorter {
  constructor() {
    super(Sort.BUBBLE_SORT);
    this.sorter = this.bubbleSort;
  }

  bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
      this.captureStateHolding(array);
      for (let j = 0; j < array.length - 1; ++j) {
        this.captureStateComparing(array, j, j + 1);
        if (this.comparator(array[j], array[j + 1])) {
          this.captureStateSwapping(array, j, j + 1);
          this.swap(array, j, j + 1);
        }
      }
    }
    this.captureStateSorted(array);
  }
}

export default BubbleSort;
