import React from "react";

const SanPhamItem = ({ product }) => {
  const { id, name, price, detail, img } = product;
  return (
    <div className="sanPhamItem">
      <img src={`img/${img}`} alt="" />

      <div className="overlay">
        <h1>{name}</h1>
        <p>{detail}</p>
        <h2>{price?.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default SanPhamItem;
