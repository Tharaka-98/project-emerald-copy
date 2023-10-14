import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function ServicesGrid() {
  const { services } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {services.map((service) => {
        const { id, title, text, image } = service;
        return (
          <Link
            key={id}
            to={`/service/${id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300 "
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-accent text-bold capitalize tracking-wider">
                {title}
              </h2>
              <span className="text-007D46">{text}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ServicesGrid;
