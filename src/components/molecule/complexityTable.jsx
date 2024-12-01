import React from "react";
import Link from "next/link";
const commonComplexity = {
  "n^2": (
    <math>
      <mrow>
        <msup>
          <mi>n</mi>
          <mi>2</mi>
        </msup>
      </mrow>
    </math>
  ),
  "nLog(n)": (
    <math>
      <mrow>
        <mi>n</mi>
        <mtext>log(</mtext>
        <mi>n</mi>
        <mtext>)</mtext>
      </mrow>
    </math>
  ),
  nk: (
    <math>
      <mrow>
        <mi>nk</mi>
      </mrow>
    </math>
  ),
  "n+k": (
    <math>
      <mrow>
        <mi>n</mi>
        <mi>+</mi>
        <mi>k</mi>
      </mrow>
    </math>
  ),
  n: (
    <math>
      <mrow>
        <mi>n</mi>
      </mrow>
    </math>
  ),
  "log(n)": (
    <math>
      <mrow>
        <mtext>log(</mtext>
        <mi>n</mi>
        <mtext>)</mtext>
      </mrow>
    </math>
  ),
  1: (
    <math>
      <mrow>
        <mi>1</mi>
      </mrow>
    </math>
  ),
  k: (
    <math>
      <mrow>
        <mi>k</mi>
      </mrow>
    </math>
  ),
};

let sortToComplexity = [
  {
    name: "Bubble Sort",
    slug: "bubble-sort",
    bestTimeComplexity: commonComplexity["n"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
    bestTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    worstTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    averageTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    spaceComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Insertion Sort",
    slug: "insertion-sort",
    bestTimeComplexity: commonComplexity["n"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
    bestTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    worstTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    averageTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    spaceComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Selection Sort",
    slug: "selection-sort",
    bestTimeComplexity: commonComplexity["n^2"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
    bestTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    worstTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    averageTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    spaceComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Heap Sort",
    slug: "heap-sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["nLog(n)"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["1"],
    bestTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    worstTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    averageTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    spaceComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Merge Sort",
    slug: "merge-sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["nLog(n)"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["n"],
    bestTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    worstTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    averageTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    spaceComplexityColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    name: "Quick Sort",
    slug: "quick-sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["log(n)"],
    bestTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    worstTimeComplexityColor:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    averageTimeComplexityColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    spaceComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Radix Sort",
    slug: "radix-sort",
    bestTimeComplexity: commonComplexity["nk"],
    worstTimeComplexity: commonComplexity["nk"],
    averageTimeComplexity: commonComplexity["nk"],
    spaceComplexity: commonComplexity["n+k"],
    bestTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    worstTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    averageTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    spaceComplexityColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    name: "Counting Sort",
    slug: "counting-sort",
    bestTimeComplexity: commonComplexity["n+k"],
    worstTimeComplexity: commonComplexity["n+k"],
    averageTimeComplexity: commonComplexity["n+k"],
    spaceComplexity: commonComplexity["k"],
    bestTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    worstTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    averageTimeComplexityColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    spaceComplexityColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
];

const ComplexityTable = () => {
  return (
    <>
      <div className="relative mb-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-white rtl:text-right">
          <thead className="text-xs uppercase text-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                Algorithm
              </th>
              <th scope="col" className="px-6 py-3">
                Worst Time Complexity
              </th>
              <th scope="col" className="px-6 py-3">
                Average Time Complexity
              </th>
              <th scope="col" className="px-6 py-3">
                Best Time Complexity
              </th>
              <th scope="col" className="px-6 py-3">
                Space Complexity
              </th>
            </tr>
          </thead>
          {sortToComplexity.map((item) => {
            return (
              <tbody key={item.name}>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 hover:text-blue-500 dark:bg-gray-800 dark:text-white"
                  >
                    <Link href={`/${item.slug}`}>{item.name}</Link>
                  </th>
                  <td className="px-6 py-4">
                    <span
                      className={`${item.worstTimeComplexityColor} me-2 rounded px-2.5 py-0.5 text-xs font-medium`}
                    >
                      &Omicron; ({item.worstTimeComplexity})
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${item.averageTimeComplexityColor} me-2 rounded px-2.5 py-0.5 text-xs font-medium`}
                    >
                      &Theta; ({item.averageTimeComplexity})
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${item.bestTimeComplexityColor} me-2 rounded px-2.5 py-0.5 text-xs font-medium`}
                    >
                      &Omega; ({item.bestTimeComplexity})
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${item.spaceComplexityColor} me-2 rounded px-2.5 py-0.5 text-xs font-medium`}
                    >
                      &Omicron; ({item.spaceComplexity})
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ComplexityTable;
