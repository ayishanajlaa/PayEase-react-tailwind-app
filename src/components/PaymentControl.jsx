import { appstore, bill, playstore } from "../assets";
import DynamicHeader from "./DynamicHeader";

const PaymentControl = () => {
  return (
    <section className="relative font-poppins py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <div className="flex-1">
          <img
            src={bill}
            alt="bill"
            className="w-full h-full object-contain md:object-fill"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <DynamicHeader text="Effortlessly manage your payments & invoices" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            Keep your finances organized and get paid faster with our payment app. Track all your transactions, generate invoices quickly, and offer flexible payment options to your clients.
          </p>
          <p className="text-dimWhite mt-5 text-base ss:text-lg">
            Accelerate your cash flow and streamline your payment process today!
          </p>
          <div className="flex items-center gap-5">
            <img src={appstore} alt="App Store" />
            <img src={playstore} alt="Play Store" />
          </div>
        </div>
      </div>
      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
    </section>
  );
};

export default PaymentControl;
