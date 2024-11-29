import BubbleSort from "./bubbleSort";

const SortFactory = (sort) => {
  switch (sort) {
    case "bubble-sort":
      return new BubbleSort();
  }
};

export default SortFactory;
