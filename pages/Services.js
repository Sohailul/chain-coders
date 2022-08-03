import { useState, useEffect } from "react";
import Image from "next/image";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="services bg-gray-800 py-8">
      <h1 className="text-3xl font-bold text-white py-5 text-center uppercase pb-12">
        Our Services
      </h1>
      <div className="flex justify-center items-center px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            return (
              <div className="card max-w-sm bg-base-300 shadow-xl" key={service.id}>
                <Image src={service.img} width={400} height={225} alt="Shoes" />
                <div className="card-body text-center">
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p
                    className="text-justify font-bold"
                    style={{ fontSize: "17px" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
