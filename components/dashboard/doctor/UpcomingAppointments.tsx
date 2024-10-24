"use client";

import React, { FC, useState } from "react";
import DiagnoseForm from "./DiagnoseForm";
import PrescriptionForm from "./PrescriptionForm";

const UpcomingAppointments: FC = () => {
  const [selectedForm, setSelectedForm] = useState<number>(0);
  return (
    <>
      {selectedForm === 1 && <DiagnoseForm onSelectedForm={setSelectedForm} />}
      {selectedForm === 2 && (
        <PrescriptionForm onSelectedForm={setSelectedForm} />
      )}
      <div className="py-6 px-8 space-y-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-around items-center bg-white w-[961px] h-[128px] py-4 px-6"
          >
            <div className="text-center space-y-4 w-[250px]">
              <h2 className="text-[32px]">26 Nov 2023</h2>
              <p className="text-[12px]">09.00 - 10.00</p>
            </div>

            <div className="w-[1px] h-[65px] bg-[#BFBFBF]"></div>

            <div className="w-[180px] text-center">
              <p className="text-[12px] text-[#A0A0A0]">patient</p>
              <p className="text-[20px] font-bold">John</p>
            </div>

            <div className="w-[1px] h-[65px] bg-[#BFBFBF]"></div>

            <div className="flex flex-1 gap-6 justify-center items-center">
              <button
                onClick={() => setSelectedForm(1)}
                className="h-[29px] w-[130px] border border-black flex justify-center gap-3 items-center hover:bg-slate-50 transition-all"
              >
                Diagnose{" "}
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.5L3.85714 10.5L11 0.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => setSelectedForm(2)}
                className="h-[29px] w-[130px] border border-black flex justify-center gap-3 items-center hover:bg-slate-50 transition-all"
              >
                Prescription{" "}
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.5L3.85714 10.5L11 0.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="h-[29px] w-[70px] bg-black text-white hover:bg-opacity-80 transition-all">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingAppointments;
