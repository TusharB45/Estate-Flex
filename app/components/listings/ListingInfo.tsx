'use client';
import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FiUsers, FiHome, FiCalendar } from "react-icons/fi";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType;
    label: string;
    description: string;
  } | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return ( 
    <div className="col-span-4 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="flex flex-col gap-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full">
            <Avatar src={user?.image}  />
            </div>
            <span className="text-lg font-semibold text-gray-800">Hosted by {user?.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <FiUsers className="w-4 h-4" />
            <span>{guestCount} guests</span>
            <FiHome className="w-4 h-4" />
            <span>{roomCount} rooms</span>
            <FiHome className="w-4 h-4" />
            <span>{bathroomCount} bathrooms</span>
          </div>
        </div>
        <hr />
        {category && (
          <ListingCategory
            icon={category.icon} 
            label={category?.label}
            description={category?.description} 
          />
        )}
        <hr />
        <div className="text-lg text-gray-700">{description}</div>
        <hr />
        <Map center={coordinates} />
      </div>
    </div>
  );
}

export default ListingInfo;
