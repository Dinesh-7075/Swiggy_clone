import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const {
    name: restaurantName,
    cuisines: cuisine,
    avgRating: starRating,
    cloudinaryImageId: restaurantImage,
    costForTwo,
  } = restaurant.info;
  console.log(restaurant);

  return (
    <div className="card-container h-[323px] m-1 hover:shadow-2xl shadow-green-950 bg-[#f0f0f0]">
      <div className="rounded-lg p-2">
        <img
          className="rest-img w-[100%] h-[160px]"
          alt="res-logo"
          src={RES_LOGO_URL + restaurantImage}
        />
        <div className="absolute w-60">
          {(restaurant?.info?.aggregatedDiscountInfoV3?.header !== undefined)? (
            <span className="text-white font-extrabold text-xl absolute top-[-40px] p-2">
              {restaurant?.info?.aggregatedDiscountInfoV3?.header +
                " " +
                restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="text-xs">
        <h3 className="card-data text-sm font-bold pl-1 mb-1">
          {restaurantName}
        </h3>
        <h5 className="card-data pl-2">{cuisine.join(", ")}</h5>
        <h5 className="card-data pl-2">{starRating} Stars</h5>
        <h5 className="card-data pl-2">{costForTwo}</h5>
        <h5 className="card-data pl-2">
          {restaurant.info.sla.deliveryTime} mins
        </h5>
      </div>
    </div>
  );
};


export default RestaurantCard;
