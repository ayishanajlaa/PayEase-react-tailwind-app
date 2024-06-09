import { FaMobileAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import CommonButton from "./CommonButton";
import DynamicHeader from "./DynamicHeader";

// eslint-disable-next-line react/prop-types
const PaymentFeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
      <div className="p-4 bg-dimBlue rounded-full">
        <span className="text-2xl ss:text-[2rem] text-secondary">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-base sm:text-lg font-semibold">
          {title}
        </h3>
        <p className="text-dimWhite text-xs sm:text-base">{desc}</p>
      </div>
    </div>
  );
};

const PaymentFeatures = () => {
  return (
    <section id="payment-features" className="font-poppins pb-10 md:py-16">
      <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <DynamicHeader text="Simple and Secure Payments, Anytime, Anywhere." />
          <p className="text-dimWhite text-base sm:text-lg">
            With our payment app, managing your transactions is easier than
            ever. Enjoy seamless payments without the hassle of bank accounts.
          </p>
          <CommonButton btnText="Get Started" />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <PaymentFeatureCard
            icon={<FaMobileAlt />}
            title="Mobile Payments"
            desc="Make payments on-the-go with just a tap on your smartphone."
          />
          <PaymentFeatureCard
            icon={<MdSecurity />}
            title="Secure Transactions"
            desc="Our app ensures your transactions are encrypted and fully secure."
          />
          <PaymentFeatureCard
            icon={<GiReceiveMoney />}
            title="Receive Funds Instantly"
            desc="Get paid instantly without the need for bank transfers."
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFeatures;
