import { useState } from "react";
import { restrautList } from "../../utils/mockData";
import RestaurentCard from "./RestaurentCard";
//  studied: useStae hook. Task: filter restaurent which more having rating more than 4 star.added button  onclick
const Body = () => {
  const [listOfRestaurant, setListOfRestaurent] = useState(restrautList);
  return (
    <div className="body">
      <div className="RestaurentContainer">
        {/* 1. Render a single RestaurantCard by passing the complete object */}
        {/* <RestaurentCard resData={singleRestraunt} /> */}
        {/* 2. Render multiple RestaurantCards manually (not recommended) */}
        {/*
        <RestaurentCard resData={restrautList[0]} />
        <RestaurentCard resData={restrautList[1]} />
        <RestaurentCard resData={restrautList[2]} />
        */}
        {/* 3. Render all RestaurantCards using map() by passing the complete object.
            Access inside component:
            const { name, cuisines, ... } = resData.data;
        */}
        {/*
        {restrautList.map((restaurant) => (
          <RestaurentCard
            key={restaurant.data.id}
            resData={restaurant}
          />
        ))}
        */}
        {/* 4. Render all RestaurantCards using map() with the spread operator (Recommended).
            {...restaurant.data} passes all properties of restaurant.data as individual props.
            Access inside component:
            const { name, cuisines, ... } = props;
        */}

        <div className="btn-search">
          <button
            onClick={() => {
              const resResult = restrautList.filter(
                (restaurant) => restaurant.data.avgRating > 4,
              );
              setListOfRestaurent(resResult);

              console.log("resResult", resResult);
            }}
          >
            Search top rated Restaurants
          </button>
        </div>
        {listOfRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
