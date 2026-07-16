import { CDN_URL } from "../../utils/constants";
const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, price, rating } = props;
  return (
    <div className="Restaurant-Cart">
      <img
        className="foodImage"
        src={{ CDN_URL } + cloudinaryImageId}
        alt="Placeholder"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};
export default RestaurentCard;
