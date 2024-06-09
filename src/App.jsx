import PaymentControl from "./components/PaymentControl";
import PaymentFeatures from "./components/PaymentFeatures";
import PaymentFooter from "./components/PaymentFooter";
import PaymentHero from "./components/PaymentHero";
import PaymentNavbar from "./components/PaymentNavbar";
import PaymentMethod from "./components/PaymentMethod";
import ScrollTop from "./components/PaymentScrollTop";
import PaymentStats from "./components/PaymentStats";
import ClientTestimonials from "./components/ClientTestimonials";
import PaymentService from "./components/PaymentService";


const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <PaymentNavbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto">
        <PaymentHero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <PaymentStats number="1000" title="ACTIVE USER" />
          <PaymentStats number="100" title="TRUSTED BY COMPANY" />
          <PaymentStats number="$200M" title="TRANSACTION" />
        </div>
        <PaymentFeatures />
        <PaymentControl />
        <PaymentMethod />
        <ClientTestimonials />
        <PaymentService />
        <PaymentFooter />
      </div>
    </div>
  );
};

export default App;
