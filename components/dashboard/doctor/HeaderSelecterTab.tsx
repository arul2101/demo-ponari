import React, { FC } from 'react'

interface HeaderSelecterTabProps {
  selectedTab: number;
}

const HeaderSelecterTab: FC<HeaderSelecterTabProps> = ({ selectedTab }) => {
  return (
    <div className="border-b border-[#BFBFBF] py-4 px-6">
      <h2>
        {selectedTab === 1 ? "Last Patient" : "Upcoming appointments"}
      </h2>
    </div>
  )
}

export default HeaderSelecterTab;