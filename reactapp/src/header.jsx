const clothingStore = () => {
  const item = {
    name: "Jacket",
    size: "Large",
    price: 799,
    colour: "Yellow",
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <h1>{item.size}</h1>
      <h1>{item.price}</h1>
      <h1>{item.colour}</h1>
    </div>
  );
};
export default clothingStore;
