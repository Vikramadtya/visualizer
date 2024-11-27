export const SortState = {
  INIT: "init",
  HOLDING: "holding",
  SORTED: "sorted",
  COMPARING: "comparing",
  SWAPPING: "swapping",
};

export const Sort = {
  BUBBLE_SORT: "bubbleSort",
};

export function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
