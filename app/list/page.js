"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { name: "Tomatoes", price: 40, count: 0 },
  { name: "Cucumbers", price: 30, count: 0 },
  { name: "Kale", price: 60, count: 0 },
  { name: "Potatoes", price: 20, count: 0 },
  { name: "Carrots", price: 40, count: 0 },
];

export default function List() {
  const [quantity, setQuantity] = useState(products);

  const handleIncrement = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index].count++;
    setQuantity(newQuantity);
  };

  const handleDecrement = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index].count > 0) {
      newQuantity[index].count--;
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {quantity.map((product, index) => (
        <div className="food" key={index}>
          <Image
            src={`/images/${product.name}.jpg`}
            width={100}
            height={100}
            alt={product.name}
            className="food-img"
          />
          <h4>
            {product.name} {product.price}$
          </h4>
          <span>{product.count > 0 ? `${product.count}개` : ""}</span>
          <button onClick={() => handleIncrement(index)}>+</button>
          <button onClick={() => handleDecrement(index)}>-</button>
        </div>
      ))}
    </div>
  );
}
