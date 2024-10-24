import React, { FC } from "react";

type DiagnoseFormProps = {
  onSelectedForm: React.Dispatch<React.SetStateAction<number>>;
};

const DiagnoseForm: FC<DiagnoseFormProps> = ({ onSelectedForm }) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-25 no-doc-scroll"></div>

      <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="relative h-[629px] w-[570px] bg-white rounded-[20px] p-10">
          <div
            className="absolute right-10 top-7 cursor-pointer"
            onClick={() => onSelectedForm(0)}
          >
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12646 1.09961L10.4081 11.4231M19.6897 21.7466L10.4081 11.4231M10.4081 11.4231L19.6897 1.09961L1.12646 21.7466"
                stroke="black"
              />
            </svg>
          </div>

          <h2 className="text-center mt-2 mb-10 text-[32px]">Diagnose Form</h2>

          <div className="">
            <div className="mt-4">
              <label htmlFor="" className="text-[16px]">
                Symptoms
              </label>
              <input
                type="text"
                className="border border-black w-full h-[48px] focus:outline-none p-2"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="" className="text-[16px]">
                Check up result
              </label>
              <input
                type="text"
                className="border border-black w-full h-[48px] focus:outline-none p-2"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="" className="text-[16px]">
                Diagnose
              </label>
              <input
                type="text"
                className="border border-black w-full h-[48px] focus:outline-none p-2"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="" className="text-[16px]">
                Care Suggestions
              </label>
              <input
                type="text"
                className="border border-black w-full h-[48px] focus:outline-none p-2"
              />
            </div>

            <button className="w-full h-[48px] bg-black text-white hover:bg-opacity-80 transition-all mt-8">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnoseForm;
