import { FaPaypal, FaStripe } from "react-icons/fa";
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai";
import { BiLogoWix } from "react-icons/bi";
import { SiShopify, SiAmazon } from "react-icons/si";
import DynamicHeader from "./DynamicHeader";
import PrimaryButton from "./CommonButton";

const PaymentService = () => {
  return (
    <section className="font-poppins md:py-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="brands-logo flex items-center sm:flex-nowrap flex-wrap w-full gap-10 text-6xl xs:text-7xl ss:text-8xl justify-center sm:text-[130px] text-[#5f5f5fb8] cursor-pointer">
          <FaPaypal className="hover:text-white" />
          <FaStripe className="hover:text-white" />
          <BiLogoWix className="hover:text-white" />
          <AiFillApple className="hover:text-white" />
          <AiFillGoogleCircle className="hover:text-white" />
          <SiShopify className="hover:text-white" />
          <SiAmazon className="hover:text-white" />
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:items-center justify-between w-full bg-black-gradient-2 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-7 my-10 md:my-16">
          <div>
            <DynamicHeader text="Let's try our service now!" />
            <p className="max-w-[470px] mt-4 sm:mt-8">
              Our app makes transactions easy, boosting your business and
              delighting customers everywhere you go. Get Started
            </p>
          </div>
          <div>
            <PrimaryButton btnText="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentService;
