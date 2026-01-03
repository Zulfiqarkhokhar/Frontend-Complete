const UserWithDestructureProps = ({
  name,
  age,
}: {
  name: string;
  age: number;
}) => {
  return (
    <div>
      <h1>UserWithDestructureProps</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default UserWithDestructureProps;
