const User = (props: { name: string; age: number }) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  );
};

export default User;
