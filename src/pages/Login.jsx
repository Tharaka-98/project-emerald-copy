import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-success text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <p className="text-center">
          Not the Admin?
          <Link to="/" className="ml-2 link link-hover link-success capitalize">
            Go Home
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
