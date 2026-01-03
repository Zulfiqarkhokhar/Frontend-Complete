import React, { useRef, useState, type FormEvent } from "react";

type formDataType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
    setFormData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          ref={name}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          ref={email}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Name: {formData.name}</h1>
      <h1>Email: {formData.email}</h1>
      <h1>Password: {formData.password}</h1>
    </div>
  );
};

export default Form;
