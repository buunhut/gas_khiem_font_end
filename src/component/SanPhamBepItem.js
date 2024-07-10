import React from "react";

const SanPhamBepItem = ({ product }) => {
  const { id, name, price, detail, img } = product;
  return (
    <div className="sanPhamBepItem">
      <img src={`img/${img}`} alt="" />
      <div className="overlay">
        <h1>{name}</h1>
        <p>{detail}</p>
        <h2>{price?.toLocaleString()}đ</h2>
      </div>
    </div>
  );
};

export default SanPhamBepItem;
