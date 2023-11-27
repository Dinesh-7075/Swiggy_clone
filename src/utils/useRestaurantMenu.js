import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_MENU_URL + resId);
      const data = await response.json();
      // console.log(data);
      setResMenu(data.data);
      console.log(resMenu);
    } catch (e) {
      console.log(e);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
