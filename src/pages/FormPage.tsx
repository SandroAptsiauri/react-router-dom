import React from "react";
import { Form } from "react-router-dom";

const FormPage: React.FC = () => {
  return (
    <Form method="POST" action="/form-page">
      <label htmlFor="email">email</label>
      <input type="email" name="email" />

      <label htmlFor="password">password</label>
      <input type="password" name="password" />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default FormPage;

export const action = async ({ request }: any) => {
  const data = await request.formData();
  const result = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(result);
};
