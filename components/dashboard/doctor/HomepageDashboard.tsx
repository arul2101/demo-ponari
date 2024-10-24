"use client";

import React, { FC, useState } from "react";
import LastPatient from "./LastPatient";
import UpcomingAppointments from "./UpcomingAppointments";

const HomepageDashboard: FC = ({}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className="bg-[#F2F5F9] space-y-8 pb-10">
      <div className="max-w-[1100px] mx-auto pt-5 flex justify-between items-center gap-4">
        <div className="bg-white h-[402px] w-[360px] rounded-[12px] flex flex-col items-center pt-10">
          <div>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="50" fill="#DBDBDB" />
              <rect
                width="24"
                height="24"
                transform="translate(38 38)"
                fill="#DBDBDB"
              />
              <path
                d="M50 52C51.3845 52 52.7378 51.5895 53.889 50.8203C55.0401 50.0511 55.9373 48.9579 56.4672 47.6788C56.997 46.3997 57.1356 44.9922 56.8655 43.6344C56.5954 42.2765 55.9287 41.0292 54.9497 40.0503C53.9708 39.0713 52.7235 38.4046 51.3656 38.1345C50.0078 37.8644 48.6003 38.003 47.3212 38.5328C46.0421 39.0627 44.9489 39.9599 44.1797 41.111C43.4105 42.2622 43 43.6155 43 45C43 46.8565 43.7375 48.637 45.0503 49.9497C46.363 51.2625 48.1435 52 50 52ZM50 40C50.9889 40 51.9556 40.2932 52.7779 40.8427C53.6001 41.3921 54.241 42.173 54.6194 43.0866C54.9978 44.0002 55.0969 45.0055 54.9039 45.9755C54.711 46.9454 54.2348 47.8363 53.5355 48.5355C52.8363 49.2348 51.9454 49.711 50.9755 49.9039C50.0055 50.0969 49.0002 49.9978 48.0866 49.6194C47.173 49.241 46.3921 48.6001 45.8427 47.7779C45.2932 46.9556 45 45.9889 45 45C45 43.6739 45.5268 42.4022 46.4645 41.4645C47.4021 40.5268 48.6739 40 50 40Z"
                fill="black"
              />
              <path
                d="M51 54H49C46.0826 54 43.2847 55.1589 41.2218 57.2218C39.1589 59.2847 38 62.0826 38 65C38 65.2652 38.1054 65.5196 38.2929 65.7071C38.4804 65.8946 38.7348 66 39 66H61C61.2652 66 61.5196 65.8946 61.7071 65.7071C61.8946 65.5196 62 65.2652 62 65C62 62.0826 60.8411 59.2847 58.7782 57.2218C56.7153 55.1589 53.9174 54 51 54ZM40.06 64C40.3059 61.8006 41.3535 59.769 43.0027 58.2932C44.6518 56.8175 46.7869 56.0011 49 56H51C53.2131 56.0011 55.3482 56.8175 56.9973 58.2932C58.6465 59.769 59.6941 61.8006 59.94 64H40.06Z"
                fill="black"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-[14px] font-bold">Dr. Adam H.</h2>
          <p className="text-[#505050] text-[10px] font-light">
            adamh@email.com
          </p>
        </div>

        <div className="h-[402px] w-[740px] bg-white rounded-[12px] pt-10 px-14 flex gap-4 justify-between">
          <div className="space-y-8">
            <div className="flex">
              <div className="w-[236px]">
                <p className="text-[16px] font-bold">Name</p>
                <p>Adam Hawkins</p>
              </div>

              <div>
                <p className="text-[16px] font-bold">Birthday</p>
                <p>25 Oct 1969</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[236px]">
                <p className="text-[16px] font-bold">Phone Number</p>
                <p>(063) 222-4444</p>
              </div>

              <div>
                <p className="text-[16px] font-bold">Address</p>
                <p>Sonyachna str.226b</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[236px]">
                <p className="text-[16px] font-bold">City</p>
                <p>Khorkiv</p>
              </div>

              <div>
                <p className="text-[16px] font-bold">Gender</p>
                <p>Male</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[236px]">
                <p className="text-[16px] font-bold">NIK</p>
                <p>09123110129111</p>
              </div>

              <div>
                <p className="text-[16px] font-bold">Member Status</p>
                <p>Active member</p>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:bg-slate-50 transition-all h-[40px] w-[130px] border border-black text-[16px]">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto bg-white rounded-[12px] pt-8 pb-16 px-12 space-y-8">
        <div className="rounded-[12px] bg-[#F2F5F9] h-[60px] w-[330px] flex justify-between items-center p-4">
          <button
            onClick={() => setSelectedTab(1)}
            className={`h-[44px] w-[110px] ${
              selectedTab === 1 && "bg-white rounded-[12px] text-[16px]"
            }`}
          >
            Last Patient
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`h-[44px] w-[200px] ${
              selectedTab === 2 && "bg-white rounded-[12px] text-[16px]"
            }`}
          >
            Upcoming appointments
          </button>
        </div>

        <div className="bg-[#F2F5F9] rounded-[12px] h-[496px] w-[1027px] overflow-y-scroll">
          <div className="border-b border-[#BFBFBF] py-4 px-6">
            <h2>
              {selectedTab === 1 ? "Last Patient" : "Upcoming appointments"}
            </h2>
          </div>

          {selectedTab === 1 ? <LastPatient /> : <UpcomingAppointments />}
        </div>
      </div>
    </section>
  );
};

export default HomepageDashboard;
