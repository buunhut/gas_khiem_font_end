import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProducts: [
    {
      id: 1,
      name: "Bình Gas SP Đỏ ",
      price: 350000,
      detail: "Trọng lượng 12kg",
      img: "spd.jpg",
    },
    {
      id: 2,
      name: "Bình Gas SP Xám ",
      price: 350000,
      detail: "Trọng lượng 12kg",
      img: "spx.jpg",
    },
    {
      id: 3,
      name: "Bình Gas VT Đỏ ",
      price: 350000,
      detail: "Trọng lượng 12kg",
      img: "vd.jpg",
    },
    {
      id: 4,
      name: "Bình Gas VT Xám ",
      price: 350000,
      detail: "Trọng lượng 12kg",
      img: "vtx.jpg",
    },
    {
      id: 5,
      name: "Bình Gas VT Xanh ",
      price: 350000,
      detail: "Trọng lượng 12kg",
      img: "vt.jpg",
    },
    {
      id: 6,
      name: "Bình Gas ELF ",
      price: 410000,
      detail: "Trọng lượng 12,5kg",
      img: "elf.jpg",
    },
    {
      id: 7,
      name: "Bình Gas TO ",
      price: 390000,
      detail: "Trọng lượng 12kg",
      img: "to.jpg",
    },
  ],
  listProductsBep: [
    {
      id: 8,
      name: "Bếp Đầm",
      price: 620000,
      detail: "Hàng Việt Nam chất lượng cao",
      img: "",
    },
    {
      id: 9,
      name: "Bếp Khè Gang",
      price: 520000,
      detail: "",
      img: "",
    },
    {
      id: 10,
      name: "Bếp Khè Inox",
      price: 1000000,
      detail: "",
      img: "",
    },
    {
      id: 11,
      name: "Bếp Khè Đôi Inox",
      price: 1000000,
      detail: "",
      img: "",
    },
    {
      id: 12,
      name: "Bếp Kính Cao Cấp Inox",
      price: 1500000,
      detail: "",
      img: "",
    },
    {
      id: 13,
      name: "Bếp Inox Đơn",
      price: 350000,
      detail: "",
      img: "",
    },
    {
      id: 14,
      name: "Bếp Kính Thường",
      price: 550000,
      detail: "",
      img: "",
    },
    {
      id: 15,
      name: "Bếp Kính Cao Cấp Mol",
      price: 1300000,
      detail: "",
      img: "",
    },
    {
      id: 16,
      name: "Bếp Inox thường",
      price: 550000,
      detail: "",
      img: "",
    },
    {
      id: 17,
      name: "Bếp Inox Namilux",
      price: 1600000,
      detail: "",
      img: "",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateListProducts(state, action) {
      state.listProducts = action.payload;
    },
  },
});

export const { updateListProducts } = dataSlice.actions;
export default dataSlice.reducer;
