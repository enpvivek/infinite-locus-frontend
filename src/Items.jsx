import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Items = () => {
  return (
    <div id="items" className="grid justify-start w-auto h-auto border-2">
      <div className="productItem m-4 p-4">
        <img
          className="w-auto h-auto "
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/g/f/8-1831156820-ruosh-brown-original-imagzyxxyrg4kfqn.jpeg?q=70"
        />
        <div className="flex flex-row justify-around m-x-0 my-2">
          <div id="itemDetails" className="flex flex-col justify-start">
            <p className="flex font-semibold text-2xl"> Shoes1</p>
            <p className="flex"> Corporate Casuals For Men</p>
            <p className="flex"> 25$</p>
            <p className="flex"> Wearables </p>
            <p className="flex">In Stock 20 Items</p>
          </div>
          <div className="items-center mt-5 justify-end">
            <FontAwesomeIcon icon={faTrash} className="h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
