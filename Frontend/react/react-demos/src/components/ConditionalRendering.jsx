import React from "react";

const ConditionalRendering = () => {
  return (
    <div>
      <PasswordWithIfElse isValid={true} />
      <PasswordWithTernary isValid={false} />
      <Products />
    </div>
  );
};

const IsPasswordValid = () => <h1>Password is Valid</h1>;
const IsPasswordNotValid = () => <h1>Password is not Valid</h1>;

const PasswordWithIfElse = ({ isValid }) => {
  if (isValid) {
    return <IsPasswordValid />;
  }
  return <IsPasswordNotValid />;
};

const PasswordWithTernary = ({ isValid }) => {
  return isValid ? <IsPasswordValid /> : <IsPasswordNotValid />;
};

const Products = () => {
  const items = ["Headphones", "Hoddies", "Keyboar"];
  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

      <ul>
        <h2>Items</h2>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionalRendering;
