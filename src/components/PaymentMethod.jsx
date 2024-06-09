import { card } from "../assets";
import CommonButton from "./CommonButton";
import DynamicHeader from "./DynamicHeader";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const PaymentSteps = ({ title }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
      <span>
        <FaStar className="text-secondary -mt-1 text-base" />
      </span>
      <span>{title}</span>
    </p>
  );
};

const PaymentMethod = () => {
  return (
    <section id="payment-method" className="py-10 sm:py-16 font-poppins">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col gap-7 sm:gap-10 flex-1">
          <DynamicHeader text="Make payments hassle-free with just one scan!" />
          <div className="flex flex-col gap-3">
            <PaymentSteps title="Scan the QR code of the recipient" />
            <PaymentSteps title="Confirm payment details" />
            <PaymentSteps title="Complete the transaction securely" />
          </div>
          <CommonButton btnText="Get Started" />
        </div>

        <div className="flex-1">
          <img
            src={card}
            alt="payment app"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
