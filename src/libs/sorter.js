import { SortState } from "./utility";
import State from "./state";
import Pair from "./pair";

export class Sorter {
  comparator = this.integerComparator;
  stateQueue = [];
  sorter = null;

  constructor(name) {
    this.name = name;
  }

  integerComparator(object_1, object_2) {
    return object_1 > object_2;
  }

  swap(array, index_1, index_2) {
    [array[index_1], array[index_2]] = [array[index_2], array[index_1]];
  }

  sort(array) {
    // clear state queue before sorting
    this.stateQueue = [];
    this.sorter(array);
  }

  getSortHistory() {
    return this.stateQueue;
  }

  addState(state) {
    this.stateQueue.push(state);
  }

  captureStateComparing(array, i, j) {
    let state = new State(
      SortState.COMPARING,
      [...array],
      null,
      new Pair(array[i], array[j]),
    );
    this.addState(state);
  }

  captureStateSwapping(array, i, j) {
    let state = new State(
      SortState.SWAPPING,
      [...array],
      new Pair(array[i], array[j]),
      null,
    );
    this.addState(state);
  }

  captureStateHolding(array) {
    let state = new State(SortState.HOLDING, [...array], null, null);
    this.addState(state);
  }

  captureStateSorted(array) {
    let state = new State(SortState.SORTED, [...array], null, null);
    this.addState(state);
  }
}
