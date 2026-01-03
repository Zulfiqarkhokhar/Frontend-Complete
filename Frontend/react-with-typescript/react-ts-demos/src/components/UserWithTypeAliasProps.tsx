type UserShape = {
  name: string;
  age: number;
};
const UserWithTypeAliasProps = ({ name, age }: UserShape) => {
  return (
    <div>
      <h1>UserWithTypeAliasProps</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default UserWithTypeAliasProps;
