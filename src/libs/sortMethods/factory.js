import BubbleSort from "./bubbleSort";

const SortFactory = (sort) => {
  switch (sort) {
    case "bubble-sort":
      return new BubbleSort();
    case "insertion-sort":
      return new BubbleSort();
    case "selection-sort":
      return new BubbleSort();
    case "heap-sort":
      return new BubbleSort();
    case "merge-sort":
      return new BubbleSort();
    case "quick-sort":
      return new BubbleSort();
    case "counting-sort":
      return new BubbleSort();
    case "radix-sort":
      return new BubbleSort();
  }
};

export default SortFactory;
