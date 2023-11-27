import { mockResData as swiggyRestaurantList } from "../utils/mockResData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]); //Array destructuring
  const [filteredResList, setFilteredResList] = useState([]);
  const onlineStatus = useOnlineStatus();

  console.log(resList);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.463649023786143&lng=78.43273993581533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Optional Chaining
      setResList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); 

      setFilteredResList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e);
    }
  };

  if (onlineStatus === false)
    return (
      <h1 className="flex justify-center font-bold my-16">
       ⚠ Looks like you're offline!! Please check your internet connection
      </h1>
    );

  return (resList !== undefined && resList.length === 0) ? (
    <ShimmerUI />
  ) : (
    <div className="body-container w-[90%] m-auto">
      <div className="search-bar flex justify-center border-blue-50">
        <input
          className=" w-[100%] mx-7 h-8 p-5 border-inherit bg-blue-50 focus:outline rounded-lg"
          type="search"
          placeholder="Search for restaurants and foods"
          onKeyUp={(e) => {
            const filterRes = resList.filter((res) => {
              const text = e.target.value.toLowerCase();
              return res.info.name.toLowerCase().includes(text);
            });
            setFilteredResList(filterRes);
          }}
        ></input>
      </div>
      <div className="res-container">
        <div className="buttons">
          <button className="ml-14 mr-5 mt-4 p-1 mb-3 rounded-lg bg-teal-100 hover:bg-teal-200"
            onClick={() => {
              const filterdData = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResList(filterdData);
            }}
          >
            Top rated restaurants
          </button>

          <button
            className="mr-5 mt-4 p-1 mb-3 rounded-lg bg-teal-100 hover:bg-teal-200"
            onClick={() => {
              return resList.length === 0 ? (
                <ShimmerUI />
              ) : (
                setFilteredResList(resList)
              );
            }}
          >
            See all restaurants
          </button>
        </div>
        <div className="restaurant-list flex flex-wrap gap-x-[9px] mx-2 pl-[40px]">
          {filteredResList.map((restaurant) => (
            <Link
              className="res-cards w-[31%] h-[315px] my-2.5 decoration-0 text-black"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.name.split(" ").join("_")+ "/" +restaurant.info.id}
            >
              {
              <RestaurantCard restaurant={restaurant} />
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
