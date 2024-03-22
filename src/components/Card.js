import React, { useEffect, useState } from "react";
import { myDatabase } from "../Firebase";

function Card() {
  const [productDetails, setProductsDetails] = useState([]);
  useEffect(() => {
    myDatabase.collection("products").onSnapshot((snapShot) => {
      setProductsDetails(
        snapShot.docs.map((item) => {
          return item.data();
        })
      );
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {productDetails.map((item) => {
        return (
          <div
            key={item.srno}
            className="card"
            style={{ width: "400px", margin: "30px", padding: "30px" }}
          >
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <del>
                <h5 className="card-title">{item.orignalprice}</h5>
              </del>

              <h5 className="card-title">{item.discountedprice}</h5>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
