"use client";

import { useEffect, useState } from "react";
import SortBoard from "./atom/sortBoard";
import State from "../../../libs/state";
import Icon from "../../molecule/icon";

const Visualiser = ({ data, maxNumber }) => {
  const trace = JSON.parse(data);

  const timeout = 50;
  const [multiplier, setMultiplier] = useState(1);
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
      }, timeout * multiplier);
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
              <button
                type="button"
                className="rounded-lg px-2 text-xs font-semibold leading-6 text-slate-500 ring-2 ring-inset ring-slate-500 transition-all transition-all transition-all duration-500 duration-500 duration-500 dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
              >
                10
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block"
                aria-label="Previous"
                onClick={() => {
                  setCurrentStep(currentStep > 0 ? currentStep - 1 : 0);
                }}
              >
                <Icon className={"h-8 w-8"} kind="previous" />
              </button>
            </div>
            <button
              type="button"
              className="-my-2 mx-auto flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5 transition-all transition-all duration-500 duration-500 dark:bg-slate-100 dark:text-slate-700"
              aria-label="Pause"
              onClick={() => {
                pause(!isPaused);
              }}
            >
              <Icon
                className={isPaused ? "h-10 w-10 pl-2" : "h-10 w-10"}
                kind={isPaused ? "play" : "pause"}
              />
            </button>
            <div className="flex flex-auto items-center justify-evenly">
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block"
                aria-label="Next"
                onClick={() => {
                  setCurrentStep(
                    currentStep < trace.length - 1 ? currentStep + 1 : 0,
                  );
                }}
              >
                <Icon className={"h-8 w-8"} kind="next" />
              </button>
              <button
                type="button"
                className="rounded-lg px-2 text-xs font-semibold leading-6 text-slate-500 ring-2 ring-inset ring-slate-500 transition-all transition-all transition-all duration-500 duration-500 duration-500 dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
                onClick={() =>
                  setMultiplier(multiplier < 10 ? multiplier + 1 : 1)
                }
              >
                {multiplier}x
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualiser;
