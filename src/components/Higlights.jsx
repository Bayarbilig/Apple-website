import { useGSAP } from "@gsap/react";

const Higlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0
  },[])
  return (
    <section
      id="Higlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <h1 id="title" className="section-heading">
          Get the Highlights
        </h1>
      </div>
    </section>
  );
};

export default Higlights
