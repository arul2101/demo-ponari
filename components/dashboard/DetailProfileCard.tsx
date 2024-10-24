import React, { FC } from 'react'

type AvatarDetailProfileCardProps = {
  onEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarDetailProfileCard: FC<AvatarDetailProfileCardProps> = ({ onEditProfile }) => {
  return (
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
        <button
          className="hover:bg-slate-50 transition-all h-[40px] w-[130px] border border-black text-[16px]"
          onClick={() => onEditProfile(true)}
        >
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default AvatarDetailProfileCard