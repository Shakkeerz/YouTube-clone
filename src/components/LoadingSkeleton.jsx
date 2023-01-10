import React from "react";

function LoadingSkeleton({ width, height, hideItem, loadingCardMaping }) {
  console.log(width, height, hideItem, loadingCardMaping);
  return (
    <div className={`h-[90vh]`}>
      <div
        style={{ width: width || "80%" }}
        role="status"
        class={`flex justify-center items-center w-full md:h-${
          `[${height}]` || "[650px]"
        } h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700`}
      >
        {hideItem ? (
          ""
        ) : (
          <svg
            class="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
        )}
      </div>

      <div className="mt-10">
        <div
          className={`w-full md:w-${`[340px]`|| `[900px]`
          } dark:bg-gray-700 h-[30px] animate-pulse `}
        ></div>
        {/* youtube loading customization width */}
        <div className={`mt-5 w-full md:w-${`[340px]` ||'[400px]'} dark:bg-gray-700 h-[30px] animate-pulse `}></div>
      </div>
      <section className="flex flex-wrap gap-2" >
        {loadingCardMaping.map((item) => {
          return (
            <div className="w-[340px] h-[12rem]  bg-slate-500 ">{item}</div>
          );
        })}
      </section>
    </div>
  );
}

export default LoadingSkeleton;
