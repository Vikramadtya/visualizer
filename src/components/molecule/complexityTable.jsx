import React from "react";
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
    bestTimeComplexity: commonComplexity["n"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
  },
  {
    name: "Insertion Sort",
    bestTimeComplexity: commonComplexity["n"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
  },
  {
    name: "Selection Sort",
    bestTimeComplexity: commonComplexity["n^2"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["n^2"],
    spaceComplexity: commonComplexity["1"],
  },
  {
    name: "Heap Sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["nLog(n)"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["1"],
  },
  {
    name: "Merge Sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["nLog(n)"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["n"],
  },
  {
    name: "Quick Sort",
    bestTimeComplexity: commonComplexity["nLog(n)"],
    worstTimeComplexity: commonComplexity["n^2"],
    averageTimeComplexity: commonComplexity["nLog(n)"],
    spaceComplexity: commonComplexity["log(n)"],
  },
  {
    name: "Radix Sort",
    bestTimeComplexity: commonComplexity["nk"],
    worstTimeComplexity: commonComplexity["nk"],
    averageTimeComplexity: commonComplexity["nk"],
    spaceComplexity: commonComplexity["n+k"],
  },
  {
    name: "Counting Sort",
    bestTimeComplexity: commonComplexity["n+k"],
    worstTimeComplexity: commonComplexity["n+k"],
    averageTimeComplexity: commonComplexity["n+k"],
    spaceComplexity: commonComplexity["k"],
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
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">
                    &Omicron; ({item.worstTimeComplexity})
                  </td>
                  <td className="px-6 py-4">
                    &Theta; ({item.averageTimeComplexity})
                  </td>
                  <td className="px-6 py-4">
                    &Omega; ({item.bestTimeComplexity})
                  </td>
                  <td className="px-6 py-4">
                    &Omicron; ({item.spaceComplexity})
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
