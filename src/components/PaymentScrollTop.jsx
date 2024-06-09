import { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const PaymentScrollTop = () => {
  const arrowRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 180) {
        arrowRef.current.classList.add("right-10");
      } else {
        arrowRef.current.classList.remove("right-10");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-white hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrowRef}
      >
        <AiOutlineArrowUp className="text-xl active:text-lg text-black" />
      </button>
    </div>
  );
};

export default PaymentScrollTop;
