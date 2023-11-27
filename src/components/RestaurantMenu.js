import index from "../../index.css";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resName, resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resMenu = useRestaurantMenu(resId); //CUSTOM HOOK

  if (resMenu === null) return;

  console.log(resMenu);
  const { areaName, city, avgRating, totalRatingsString } = resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  const { name, cuisines, costForTwoMessage } = resMenu?.cards[0]?.card?.card?.info;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);


  return (
    <div>
      {/* Res Name Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 flex justify-between items-center rounded-lg">
        <div>
          <p className="font-semibold text-xl">{name}</p>
          <p className="text-xs py-1">
            {areaName}, {city}
          </p>
          <p className="text-xs block">
            {cuisines.join(",")} - {costForTwoMessage}
          </p>
        </div>
        <div className="border-zinc-400  h-16 border rounded-lg p-2">
          <span className="text-sm font-bold mb-2">⭐{avgRating}</span>
          <p className="text-xs border-t border-zinc-400 text-gray-400 font-semibold py-1">
            {totalRatingsString}
          </p>
        </div>
      </div>
      {/* Category Section */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}

    </div>
  );
};

export default RestaurantMenu;
