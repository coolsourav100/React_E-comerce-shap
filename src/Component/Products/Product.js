import React, { useState } from "react";
import { useParams } from "react-router-dom";
let productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = () => {
    // const [pdetail , setPdetail] = useState()
  const param = useParams();
  console.log(param);
  const productItem = productsArr.filter((item) => item.id == param.id);
  console.log(...productItem);
//   setPdetail(...productItem)
//   const productDetail = (...productItem})
//   console.log(pdetail)
  return (
    <div>
      <div class="container mt-5 mb-5">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 border-end">
              <div class="d-flex flex-column justify-content-center">
                <div class="main_image">
                  <img
                    src={productItem[0].imageUrl}
                    id="main_product_image"
                    width="350"
                  />{" "}
                </div>
                <div class="thumbnail_images"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 right-side">
                <div class="d-flex justify-content-between align-items-center">
                  <h3>{productItem[0].title}</h3>{" "}
                  <span class="heart">
                    <i class="bx bx-heart"></i>
                  </span>
                </div>
                <div class="mt-2 pr-3 content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <h3>{`₹ ${productItem[0].price}`}</h3>
                <div class="ratings d-flex flex-row align-items-center">
                  {" "}
                  <span>441 reviews</span>
                </div>
                <div class="buttons d-flex flex-row mt-5 gap-3">
                  <button class="btn btn-outline-dark">Buy Now</button>
                  <button class="btn btn-dark">Add to Cart</button>
                </div>
                <div class="search-option">
                  <i class="bx bx-search-alt-2 first-search"></i>
                  <i class="bx bx-share-alt share"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
