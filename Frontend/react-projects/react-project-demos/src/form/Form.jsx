import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUsername("");
      setUsernameColor("green");
    } else {
      setErrorUsername("Username must be 8 letter long.");
      setUsernameColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }
    if (password.length > 8) {
      setPasswordColor("green");
      setErrorPassword("");
    } else {
      setPasswordColor("red");
      setErrorPassword("Password must be 8 letter long.");
    }
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <form
        onSubmit={validate}
        className="bg-slate-950/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Registration Form
        </h2>

        <div className="mb-4">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: usernameColor }}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white
                       placeholder-gray-400 outline-none focus:ring-2
                       focus:ring-emerald-500 transition-colors duration-200"
          />
          {errorUsername && (
            <p className="text-red-500 text-sm mt-1">{errorUsername}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white
                       placeholder-gray-400 outline-none focus:ring-2
                       focus:ring-emerald-500 transition-colors duration-200"
          />
          {errorEmail && (
            <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white
                       placeholder-gray-400 outline-none focus:ring-2
                       focus:ring-emerald-500 transition-colors duration-200"
          />
          {errorPassword && (
            <p className="text-red-500 text-sm mt-1">{errorPassword}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white
                       placeholder-gray-400 outline-none focus:ring-2
                       focus:ring-emerald-500 transition-colors duration-200"
          />
          {errorConfirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errorConfirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-xl
                     font-semibold hover:bg-emerald-600 active:scale-95
                     transition-all duration-200 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
