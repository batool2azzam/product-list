import React, { useState } from "react";
import ProductList from "./components/ProductList";
import necklace1 from "./assets/necklace1.jpg";
import necklace2 from "./assets/necklace2.jpg";
import necklace3 from "./assets/necklace3.jpg";
import necklace4 from "./assets/necklace4.jpg";
import ring1 from "./assets/ring1.jpg";
import ring2 from "./assets/ring2.jpg";
import ring3 from "./assets/ring3.jpg";
import ring4 from "./assets/ring4.jpg";
import bracelet1 from "./assets/bracelet1.jpg";
import bracelet2 from "./assets/bracelet2.jpg";
import bracelet3 from "./assets/bracelet3.jpg";
import bracelet4 from "./assets/bracelet4.jpg";

interface Product {
  name: string;
  category: string;
  price: number;
  photo: string;
}

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [pressedButton, setPressedButton] = useState<string>("all");

  const products: Product[] = [
    { name: "Elegant Silver Ring", category: "ring", price: 30, photo: ring1 },
    { name: "Classic Gold Ring", category: "ring", price: 45, photo: ring2 },
    {
      name: "Exquisite Diamond Bracelet",
      category: "bracelet",
      price: 120,
      photo: bracelet1,
    },
    {
      name: "Sleek Diamond Bracelet",
      category: "bracelet",
      price: 110,
      photo: bracelet2,
    },
    { name: "Stylish Gold Ring", category: "ring", price: 55, photo: ring3 },
    { name: "Trendy Gold Ring", category: "ring", price: 50, photo: ring4 },
    {
      name: "Luxurious Diamond Bracelet",
      category: "bracelet",
      price: 130,
      photo: bracelet3,
    },
    {
      name: "Chic Diamond Bracelet",
      category: "bracelet",
      price: 115,
      photo: bracelet4,
    },
    {
      name: "Stunning Gold Necklace",
      category: "necklace",
      price: 80,
      photo: necklace1,
    },
    {
      name: "Radiant Gold Necklace",
      category: "necklace",
      price: 90,
      photo: necklace2,
    },
    {
      name: "Glamorous Gold Necklace",
      category: "necklace",
      price: 75,
      photo: necklace3,
    },
    {
      name: "Beautiful Pearl Necklace",
      category: "necklace",
      price: 85,
      photo: necklace4,
    },
  ];

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setPressedButton(category);
  };

  return (
    <div className="container">
      <h1>Jewelry Product List</h1>
      <div className="filter">
        <button
          className={`filter-button ${
            pressedButton === "all" ? "pressed" : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${
            pressedButton === "necklace" ? "pressed" : ""
          }`}
          onClick={() => handleFilterChange("necklace")}
        >
          Necklaces
        </button>
        <button
          className={`filter-button ${
            pressedButton === "ring" ? "pressed" : ""
          }`}
          onClick={() => handleFilterChange("ring")}
        >
          Rings
        </button>
        <button
          className={`filter-button ${
            pressedButton === "bracelet" ? "pressed" : ""
          }`}
          onClick={() => handleFilterChange("bracelet")}
        >
          Bracelets
        </button>
      </div>
      <ProductList products={products} filter={filter} />
    </div>
  );
};

export default App;
