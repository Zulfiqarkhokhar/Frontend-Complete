import React, { useEffect, useState } from "react";

// Review Interface
interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

// Dimensions Interface
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Meta Interface
interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Main Product Interface
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

const UseEffectWithTypeScript = () => {
  const [datas, setDatas] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setDatas(result.products);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {!datas ? (
        <h2>Loading...</h2>
      ) : (
        datas.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <img src={data.thumbnail} alt={data.title} width={200} />

            <p>{data.description}</p>

            <h3>Price: ${data.price}</h3>
            <p>Discount: {data.discountPercentage}%</p>
            <p>Rating: ⭐ {data.rating}</p>
            <p>Stock: {data.stock}</p>

            <p>Brand: {data.brand}</p>
            <p>Category: {data.category}</p>
            <p>Status: {data.availabilityStatus}</p>

            <h3>Dimensions</h3>
            <ul>
              <li>Width: {data.dimensions.width}</li>
              <li>Height: {data.dimensions.height}</li>
              <li>Depth: {data.dimensions.depth}</li>
            </ul>

            <h3>Reviews</h3>
            {data.reviews.map((review, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <strong>{review.reviewerName}</strong>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default UseEffectWithTypeScript;
