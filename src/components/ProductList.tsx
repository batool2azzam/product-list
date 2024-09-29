import React from "react";

interface Product {
  name: string;
  category: string;
  price: number;
  photo: string;
}

interface ProductListProps {
  products: Product[];
  filter: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, filter }) => {
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="product-list">
      {filteredProducts.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.photo} alt={product.name} />
          <div className="product-overlay">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
