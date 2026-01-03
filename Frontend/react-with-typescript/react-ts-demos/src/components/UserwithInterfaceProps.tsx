interface UserShape {
  name: string;
  age: number;
}
const UserwithInterfaceProps = ({ name, age }: UserShape) => {
  return (
    <div>
      <h1>UserwithInterfaceProps</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default UserwithInterfaceProps;
