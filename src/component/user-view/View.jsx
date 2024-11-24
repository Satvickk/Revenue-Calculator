import { useState } from "react";
import ProjectedOutput from "./ProjectedOutput";
import RevenueSummary from "./RevenueSummary";

function View() {
  const [check, setCheck] = useState(true);
  const viewProjectedOutput = () => setCheck(true);
  const viewRevenueSummary = () => setCheck(false);
  return (
    <div className="h-full w-full rounded-xl sm:col-span-2 grid sm:grid-rows-12 shadow-md">
      <div className="flex justify-start items-start row-span-1">
        <button
          onClick={viewProjectedOutput}
          className={`px-3 py-2 ${
            check && "bg-slate-200"
          } transition-all duration-300 rounded-tl-xl font-semibold text-gray-600`}
        >
          Projected Output
        </button>
        <button
          onClick={viewRevenueSummary}
          className={`px-3 py-2 ${
            !check && "bg-slate-200"
          } transition-all duration-300 rounded-tl-xl font-semibold text-gray-600`}
        >
          Revenue Summary
        </button>
      </div>
      <div className="row-span-11">
      {check ? <ProjectedOutput /> : <RevenueSummary />}
      </div>
    </div>
  );
}

export default View;
