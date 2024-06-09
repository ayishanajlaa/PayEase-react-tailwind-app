// eslint-disable-next-line react/prop-types
const DynamicHeader = ({ text }) => (
  <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
    {text}
  </h1>
);

export default DynamicHeader;
