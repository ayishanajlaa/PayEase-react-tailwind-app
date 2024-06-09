import { footerData } from "../utils";
import { SiTwitter, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ icon, name, link }) => (
  <a href={link} className="relative social-icon">
    <span className="social-media-icon mt-8 ss:mt-0 p-3 xs:py-4 xs:px-4 ss:px-[1.03rem] text-black block rounded-full z-2 ss:absolute top-1/2 left-0 -translate-y-1/2">
      {icon}
    </span>
    <span className="hidden ss:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
      {name}
    </span>
  </a>
);

const PaymentFooter = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative font-poppins pb-10 sm:pb-16">
      <div className="flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[370px]">
          <h2 className="text-3xl">PayEase.</h2>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg mt-5">
            Simplifying payments for businesses, making transactions secure and efficient.
          </p>
        </div>
        <div className="w-full md:flex-1 flex items-start ss:justify-between gap-10 ss:gap-5 ss:flex-nowrap flex-wrap">
          {footerData.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 text-dimWhite mt-5">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-[.9rem] font-[500] hover:text-secondary">
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-10 mt-10 sm:mt-16 border-t">
        <p className="md:text-base xs:text-sm text-xs">
          Copyright Ⓒ {date} PayEase. All Rights Reserved.
        </p>
        <div>
          <div className="flex items-center gap-3 xs:gap-5 text-lg xs:text-xl">
            <SocialIcon icon={<SiTwitter />} name="Twitter" link="https://twitter.com/PayEase" />
            <SocialIcon icon={<SiFacebook />} name="Facebook" link="https://facebook.com/PayEase" />
            <SocialIcon icon={<SiInstagram />} name="Instagram" link="https://instagram.com/PayEase" />
            <SocialIcon icon={<SiYoutube />} name="YouTube" link="https://youtube.com/PayEase" />
            <SocialIcon icon={<FaTiktok />} name="TikTok" link="https://tiktok.com/@PayEase" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFooter;
