import React from "react";
import Content from "./content.mdx";
import ComplexityTable from "../../components/molecule/complexityTable";

export default function Home() {
  return (
    <>
      <main>
        <div className="text-lg leading-8 text-gray-600 dark:text-gray-100">
          <Content />
        </div>
      </main>
    </>
  );
}
