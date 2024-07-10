import React, { useEffect, useState } from "react";
import "animate.css";
import "./app.scss";
import TypingEffect from "./component/TypingEffect";
import { useSelector } from "react-redux";
import SanPhamItem from "./component/SanPhamItem";
import SanPhamBepItem from "./component/SanPhamBepItem";

const App = () => {
  const { listProducts, listProductsBep } = useSelector(
    (state) => state.dataSlice
  );

  console.log(listProducts);

  const [smallMenu, setSmallMenu] = useState(false);

  useEffect(() => {
    if (smallMenu) {
      // Lock scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scrolling
      document.body.style.overflow = "scroll";
    }
  }, [smallMenu]);
  return (
    <div>
      <div id="header">
        <div className="menu">
          <div className="menuBar">
            <i
              className="fa-solid fa-bars"
              onClick={() => setSmallMenu(!smallMenu)}
            ></i>
          </div>
          <div className="logo">
            <h2
            // className="animate__animated animate__flip animate__infinite animate__slower"
            >
              GAS KHIÊM
            </h2>
          </div>
          <ul style={{ transform: smallMenu ? "translateX(0)" : "" }}>
            <li onClick={() => setSmallMenu(false)}>
              <a href="#trangChu">Trang Chủ</a>
            </li>
            <li onClick={() => setSmallMenu(false)}>
              <a href="#sanPham">Sản Phẩm</a>
            </li>
            <li onClick={() => setSmallMenu(false)}>
              <a href="#contact">Địa Chỉ</a>
            </li>
            {smallMenu && (
              <button
                className="close"
                type="button"
                onClick={() => setSmallMenu(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </ul>
        </div>
      </div>

      <div id="trangChu">
        <div className="content">
          <div className="contentItem fadeInLeft">
            {/* <h1>ĐẠI LÝ GAS KHIÊM</h1> */}
            <TypingEffect text="ĐẠI LÝ GAS KHIÊM" speed={100} />
            <div>
              <p>
                <i className="fa-regular fa-hand-point-right"></i> Chuyên kinh
                doanh, mua bán - trao đổi các loại Bình Gas - Bếp Gas phục vụ
                sinh hoạt gia đình, quán ăn...,
              </p>
              <p>
                <i className="fa-regular fa-hand-point-right"></i> Với tiêu chí
                đặt chất lượng lên hàng đầu, đại lý chúng tôi luôn cung cấp các
                loại Gas chất lượng cao, có thương hiệu uy tín trên thị trường,
                đủ trọng lượng và an toàn tuyệt đối.
              </p>
              <p>
                <i className="fa-regular fa-hand-point-right"></i> Giao đến tận
                nơi nhanh chóng, lắp đặt kỹ lượng, với giá cả phải chăng nên
                khách hàng hoàn toàn yên tâm khi sử dụng Gas tại đại lý của
                chúng tôi.
              </p>
            </div>
            <a href="tel:+84939710395">
              <button className="fadeInUp">
                <i className="fa-solid fa-phone"></i> 0939 710 395
              </button>
            </a>
          </div>
          <div className="contentItem fadeInUp ">
            <img src="./img/banner2.jpg" alt="" className="" />
          </div>
        </div>
      </div>
      <div id="sanPham">
        <h1>Bình Gas</h1>
        <div className="content">
          {listProducts?.map((item, index) => {
            return <SanPhamItem key={index} product={item} />;
          })}
        </div>
        <h1 className="bepGas">Bếp Gas</h1>
        <div className="content">
          {listProductsBep?.map((item, index) => {
            return <SanPhamBepItem key={index} product={item} />;
          })}{" "}
        </div>
      </div>
      <div id="about"></div>
      <div id="contact">
        <div className="content">
          <h1>Địa chỉ</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15750.779278432577!2d105.5869179!3d9.2715384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a113a67261f083%3A0x1f6c97f25719d47!2zxJDhuqFpIGzDvSBHYXMgS2hpw6pt!5e0!3m2!1sen!2s!4v1720423258553!5m2!1sen!2s&zoom=2"
            width="100%"
            height="600px"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div id="footer">
        <div className="content">
          <p>Gas Khiêm - Copyright 2024 </p>
          <span> Code by Zero - 0909240886</span>
        </div>
      </div>
    </div>
  );
};

export default App;
