import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [objeto, setObjeto] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGift(category).then((imgs) => {
      setTimeout(() => {
        setObjeto({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return objeto; // {data: [], loading: true};
};
