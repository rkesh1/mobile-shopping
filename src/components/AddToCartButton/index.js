import { useContext } from "react";
import ProductListContext from "../../context/productListContext";

const AddToCartButton = ({id}) => {
  const { products, cart, setCart } = useContext(ProductListContext);
  const item = products.find((im) => Number(im.id) === Number(id));

  const isAdded = cart.filter(fObj => item.id === fObj.id).length; 
  
  function addItem(obj){
      console.log("come", obj);
    if(!cart.filter(item => item.id === obj.id).length){
      setCart([...cart, {...obj, quantity:1}]);
    }
  }

  return (
    <>
     
        <button type="button" className="btn btn-outline-success" onClick={() => addItem(item)}>
                { isAdded ? 'Added to cart': 'Add to Cart' }
        </button>

    </>
  );
};
export default AddToCartButton;
