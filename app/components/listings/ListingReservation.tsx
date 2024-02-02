import { Range } from "react-date-range";
import Heading from "../Heading";
import Button from "../Button";
import Calendar from "../inputs/Calendar";
import { AiOutlineMail, AiOutlineEnvironment, AiOutlinePhone } from "react-icons/ai";

interface ListingReservationProps {
  Address: String;
  MobileNumber: number;
  Email: String;
  price: number;
  Buyprice: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  Address,
  MobileNumber,
  Email,
  price,
  Buyprice,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Rent section */}
      <div>
        <Heading title="Rent" subtitle='' />
        
        <div className="text-2xl font-semibold">
          $ {price}
        </div>

         <div className="font-light text-neutral-600">
          Per night
        </div>
      </div>

      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />



      {/* Total */}
      <div className="flex items-center justify-between font-semibold text-lg">
        <div>Total:</div>
        <div>${totalPrice}</div>
        
      </div>
            <Button
        disabled={disabled}
        label="Book"
        onClick={onSubmit}
      />

      <hr className="border-t border-gray-300" />

      {/* Purchase section */}
      <div>
        <Heading title="Purchase" subtitle=''/>
        <div className="text-2xl font-semibold p-6 space-y-6">
          $ {Buyprice}
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center">
            <AiOutlineMail className="text-2xl mr-2" />
            <div>Email: {Email}</div>
          </div>
          <div className="flex items-center">
            <AiOutlineEnvironment className="text-2xl mr-2" />
            <div>Address: {Address}</div>
          </div>
          <div className="flex items-center">
            <AiOutlinePhone className="text-2xl mr-2" />
            <div>Mobile Number: {MobileNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
