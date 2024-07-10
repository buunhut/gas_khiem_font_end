import React from "react";

const SanPhamItem = ({ product }) => {
  const { id, name, price, detail, img } = product;
  return (
    <div className="sanPhamItem">
      <img src={`img/${img}`} alt="" />

      <div className="overlay">
        <h1>{name}</h1>
        <p>{detail}</p>
        <a href="tel:+84939710395">
          <i className="fa-solid fa-phone"></i> 0939 710 395
        </a>
        <h2>{price?.toLocaleString()}đ</h2>
      </div>
    </div>
  );
};

export default SanPhamItem;
