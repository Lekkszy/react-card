import "./App.css";
import ProductCard from "./components/ProductCard";
import React from 'react' 

function App() {
  const style = {
    display: "flex",
    justifyContent: "space-around",
  }
  return (
    <>
      <h1>React Props and Card Project</h1>
      <div style={style}>
        <ProductCard
          productImg="src/assets/images/mixed.jpg"
          name="Mix Fruit Juice"
          price="N800"
          size="75cl"
          description="Best mix fruit juice in town"
        />
        <ProductCard
          productImg="src/assets/images/orange.jpg"
          name="Pinapple Juice"
          price="N1500"
          size="75cl"
          description="Best pinapple juice in town"
        />
        <ProductCard
          productImg="src/assets/images/pineapple.jpg"
          name="Orange Juice"
          price="N1000"
          size="150cl"
          description="Best orange juice in town"
        />
        <ProductCard
          productImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjpHm9OIflKsCa1bMW1_9j7bezobu3cTDGQ&usqp=CAU"
          name="Zobo Drink"
          price="N500"
          size="75cl"
          description="Zobo drink for good health"
        />
      </div>
    </>
  );
}

export default App;