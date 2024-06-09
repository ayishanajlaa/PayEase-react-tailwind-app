import { testimonialData } from "../utils";
import { RiDoubleQuotesL } from "react-icons/ri";
import DynamicHeader from "./DynamicHeader";

const ClientTestimonials = () => {
  return (
    <section id="clients" className="relative font-poppins md:py-16 py-10">
      <div>
        <DynamicHeader text="What Our Users Are Saying" />
        <p className="text-dimWhite md:text-lg text-base">
        Our app makes transactions easy, boosting your business and delighting customers everywhere you go.
        </p>
        <div className="grid ss:grid-cols-2 md:grid-cols-3 gap-10 ss:gap-5 sm:gap-10 mt-10 sm:mt-16">
          {testimonialData.map(({ id, about, image, name, title }) => (
            <div
              key={id}
              className="flex flex-col gap-10 feature-card rounded-2xl px-5 sm:px-10 md:px-6 py-10 ss:py-14 lg:px-10"
            >
              <RiDoubleQuotesL className="text-5xl text-secondary" />
              <p className="leading-normal text-base text-dimWhite">
                {about}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 object-cover rounded-full object-top"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-dimWhite text-sm font-[500]">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-[20%] h-[40%] rounded-full right-0 top-40 blue__gradient"></div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
