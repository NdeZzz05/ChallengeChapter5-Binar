import React from "react";

export const ResponsiveDesign = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col p-5 w-full h-screen text-white font-semibold dekstop:text-5xl tablet:text-2xl mobile:text-xl">
          <div className="flex h-[20%] mb-3 justify-end tablet:justify-center">
            <div className="flex justify-center items-center bg-red-600 h-full w-[40%] tablet:w-full">
              Merah
            </div>
          </div>
          <div className="flex flex-col w-full h-[80%] gap-4 tablet:flex-col-reverse dekstop:flex-row">
            <div className="flex justify-center items-center bg-violet-700 w-full h-[50%] dekstop:w-[40%] dekstop:h-full">
              Ungu
            </div>
            <div className="flex flex-col-reverse gap-4 h-full w-full tablet:flex-col desktop:w-[60%]">
              <div className="flex justify-center items-center bg-[#38EB55] w-full h-[50%]">
                Hijau
              </div>
              <div className="flex flex-row-reverse w-full h-[50%] gap-4 tablet:flex-row">
                <div className="flex justify-center items-center w-[50%] bg-cyan-400 tablet:bg-pink-500 dekstop:bg-cyan-400">
                  Biru
                </div>
                <div className="flex justify-center items-center w-[50%] bg-pink-500">
                  Pink
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
