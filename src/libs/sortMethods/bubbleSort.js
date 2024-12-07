import { Sorter } from "../sorter";
import { Sort } from "../utility";

class BubbleSort extends Sorter {
  constructor() {
    super(Sort.BUBBLE_SORT);
    this.sorter = this.bubbleSort;
  }

  bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      // to track if the array is already sorted
      let isSorted = true;
      this.captureStateHolding(array);

      for (let j = 0; j <= i; ++j) {
        this.captureStateComparing(array, j, j + 1);

        // swap if the first element is larger than the other
        if (this.comparator(array[j], array[j + 1])) {
          this.captureStateSwapping(array, j, j + 1);
          this.swap(array, j, j + 1);
          isSorted = false;
        }
      }

      // break id already sorted
      if (isSorted) break;
    }
    this.captureStateSorted(array);
  }
}

export default BubbleSort;
