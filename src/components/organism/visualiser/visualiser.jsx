"use client";

import { useEffect, useState } from "react";
import SortBoard from "./atom/sortBoard";
import State from "../../../libs/state";

const Visualiser = ({ data, maxNumber }) => {
  const trace = JSON.parse(data);

  const timeout = 50;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, pause] = useState(false);

  useEffect(() => {
    if (!isPaused & (currentStep === trace.length - 1)) {
      setCurrentStep(0);
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused & (currentStep !== trace.length - 1)) {
      const interval = setInterval(() => {
        setCurrentStep(currentStep + 1);
      }, timeout);
      return () => clearInterval(interval);
    } else {
      pause(true);
    }
  }, [currentStep, isPaused]);
  return (
    <>
      <div className="block rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <SortBoard
          state={Object.assign(new State(), trace[currentStep])}
          maxNumber={maxNumber}
          length={maxNumber}
        />

        <div className="mt-5 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={{ width: (currentStep / (trace.length - 1)) * 100 + "%" }}
          ></div>
        </div>

        <div className="relative z-10 mt-6 rounded shadow-xl sm:mt-10">
          <div className="flex items-center rounded-b-xl bg-slate-50 text-slate-500 transition-all transition-all duration-500 duration-500 dark:bg-slate-600 dark:text-slate-200">
            <div className="flex flex-auto items-center justify-evenly">
              <button type="button" aria-label="Add to favorites">
                <svg width="24" height="24">
                  <path
                    d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block"
                aria-label="Previous"
              >
                <svg width="24" height="24" fill="none">
                  <path
                    d="m10 12 8-6v12l-8-6Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6 6v12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button type="button" aria-label="Rewind 10 seconds">
                <svg width="24" height="24" fill="none">
                  <path
                    d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5 5v3.111c0 .491.398.889.889.889H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="-my-2 mx-auto flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5 transition-all transition-all duration-500 duration-500 dark:bg-slate-100 dark:text-slate-700"
              aria-label="Pause"
            >
              <svg width="30" height="32" fill="currentColor">
                <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                <rect x="20" y="4" width="4" height="24" rx="2"></rect>
              </svg>
            </button>
            <div className="flex flex-auto items-center justify-evenly">
              <button type="button" aria-label="Skip 10 seconds" className="">
                <svg width="24" height="24" fill="none">
                  <path
                    d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block"
                aria-label="Next"
              >
                <svg width="24" height="24" fill="none">
                  <path
                    d="M14 12 6 6v12l8-6Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18 6v12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="rounded-lg px-2 text-xs font-semibold leading-6 text-slate-500 ring-2 ring-inset ring-slate-500 transition-all transition-all transition-all duration-500 duration-500 duration-500 dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
              >
                1x
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualiser;
