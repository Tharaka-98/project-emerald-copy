import React from "react";
import { useLoaderData } from "react-router-dom";
import { services } from "../data";

export const loader = () => {
  return { services };
};

function Quote() {
  const { services } = useLoaderData();
  const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
            defaultValue={defaultValue}
          />
        </div>
      </>
    );
  };

  const ContactInputBox = ({ type, placeholder, name }) => {
    return (
      <>
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
      </>
    );
  };

  const ServiceInputBox = ({ type, name }) => {
    return (
      <>
        <div className="mb-6">
          <input
            type={type}
            name={name}
            // className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className=" mb-6 text-[32px] text-success font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Request Your Personalized Quote Today
              </h2>
              <p className="mt-16 text-base leading-relaxed mb-9 text-body-color">
                At Emerald, we're committed to providing you with the best
                solutions tailored to your needs. Whether you're looking for our
                top-quality products or services, we're here to assist you every
                step of the way. Requesting a quote is easy. Simply fill out the
                form below, and our expert team will get back to you with a
                personalized quote that suits your requirements. Your
                satisfaction is our priority. Tell us more about your needs, and
                let's get started on finding the perfect solution for you. We
                look forward to working with you!
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="relative p-8 bg-base-100 rounded-lg shadow-lg sm:p-12">
              <form>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
                <ContactInputBox
                  type="text"
                  name="email"
                  placeholder="Your Email"
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                />
                <div className="my-5 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none">
                  <p className="mb-8 px-[4px] text-base text-[18px] text-body-color">
                    services
                  </p>
                  {services.map((service) => {
                    const { id, title } = service;
                    return (
                      <div key={id} className="mt-5 px-[30px] grid grid-cols-2 gap-1 w-full rounded border py-3  text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none bg-[#ecfdf5]">
                        <div  className="flex items-center  gap-8">
                          <p>{id}.</p>
                          <p>{title}</p>
                        </div>
                        <div className="ml-10 ">
                          <ServiceInputBox type="checkbox" name="services" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ContactTextArea
                  row="6"
                  placeholder="Your Message"
                  name="details"
                  defaultValue=""
                />
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 text-white transition border rounded border-success bg-success hover:bg-opacity-90"
                  >
                    Send Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
