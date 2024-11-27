import { SortState } from "./utility";

/**
 * The current state of the array during sorting
 */
class State {
  state = SortState.INIT;

  holding = [];
  swapping = null;
  comparing = null;

  constructor(state, holding, swapping, comparing) {
    this.state = state;
    this.holding = holding;
    this.swapping = swapping;
    this.comparing = comparing;
  }

  getState() {
    return this.state;
  }

  isComparing() {
    return this.comparing != null;
  }

  isValueAtRightPlace(value) {
    return this.holding[value] === value;
  }

  isValueToBeHighlighted(index) {
    return (
      (this.comparing != null &&
        (this.comparing.first === index || this.comparing.second === index)) ||
      (this.swapping != null &&
        (this.swapping.first === index || this.swapping.second === index))
    );
  }

  isSwapping() {
    return this.swapping != null;
  }

  getCurrentState() {
    return this.holding;
  }

  getIndexesBeingSwapped() {
    return this.swapping;
  }

  getIndexesBeingCompared() {
    return this.swapping;
  }
}

export default State;
