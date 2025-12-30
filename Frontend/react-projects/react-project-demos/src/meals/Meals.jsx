import React, { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        🍽️ Seafood Meals
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(({ strMeal, strMealThumb, idMeal }) => (
          <div
            key={idMeal}
            className="bg-slate-950/80 backdrop-blur-md rounded-2xl
                       shadow-xl overflow-hidden hover:scale-105
                       transition-transform duration-300"
          >
            <img
              src={strMealThumb}
              alt={strMeal}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold text-white mb-2">
                {strMeal}
              </h2>
              <p className="text-sm text-gray-400">Meal ID: #{idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meals;
