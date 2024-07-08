import React, { useState } from "react";
import "animate.css";
import "./app.scss";
import TypingEffect from "./component/TypingEffect";

const App = () => {
  const [smallMenu, setSmallMenu] = useState(false);
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
            <h1>GAS KHIÊM</h1>
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
            <h1>ĐẠI LÝ GAS KHIÊM</h1>
            {/* <TypingEffect text="ĐẠI LÝ GAS - BẾP GAS KHIÊM" speed={100} /> */}
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
            <button className="fadeInUp">
              <a href="tel:+84939710395">
                <i className="fa-solid fa-phone"></i> 0939 710 395
              </a>
            </button>
          </div>
          <div className="contentItem fadeInUp">
            <img src="./img/banner2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="sanPham">
        <h1>Bình Gas</h1>
        <div className="content">
          <div className="sanPhamItem">
            <h1>Bình Gas SP Đỏ</h1>
            <h2>350.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas SP Xám</h1>
            <h2>350.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas VT Đỏ</h1>
            <h2>350.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas VT Xám</h1>
            <h2>350.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas VT Xánh</h1>
            <h2>350.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas ELF</h1>
            <h2>410.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamItem">
            <h1>Bình Gas TO</h1>
            <h2>390.000đ</h2>

            <div className="overlay"></div>
          </div>
        </div>
        <h1 className="bepGas">Bếp Gas</h1>
        <div className="content">
          <div className="sanPhamBepItem">
            <h1>Bếp Đầm</h1>
            <h2>620.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Khè Gang</h1>
            <h2>520.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Khè Inox</h1>
            <h2>1.000.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Khè Đôi Inox</h1>
            <h2>1.000.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Kính Đơn Cao Cấp</h1>
            <h2>1.500.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Inox Đơn</h1>
            <h2>300.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Kính Thường</h1>
            <h2>500.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Kính Cao Cáp Mol</h1>
            <h2>1.300.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Inox Thường</h1>
            <h2>550.000đ</h2>

            <div className="overlay"></div>
          </div>
          <div className="sanPhamBepItem">
            <h1>Bếp Inox Namilux</h1>
            <h2>1.600.000đ</h2>

            <div className="overlay"></div>
          </div>
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
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div id="footer">
        <div className="content">
          <p>Gas Khiêm - Copy-right 2024 </p>
          <span> Code by Zero - 0909240886</span>
        </div>
      </div>
    </div>
  );
};

export default App;
