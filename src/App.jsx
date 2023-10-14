import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  About,
  Error,
  Landing,
  Login,
  Quote,
  Services,
  SingleService,
  ContactUs,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as aboutLoader } from "./pages/About";
import { loader as serviceLoader } from "./pages/Services";
import { loader as quoteLoader } from "./pages/Quote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "services",
        element: <Services />,
        loader: serviceLoader,
      },
      {
        path: "service/:id",
        element: <SingleService />,
      },
      {
        path: "quote",
        element: <Quote />,
        loader: quoteLoader,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
