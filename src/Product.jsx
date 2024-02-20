import "./Product.css";
import Price from "./Price.jsx";

// eslint-disable-next-line react/prop-types
function Product({ title, idx}) {
  let oldPrices = ["12,465" , "11,900" , "1599" , "879"];
  let newPrices = ["8999", "9,199", "899" , "234"];

  let description = [["8,000 DPI", "Prammable devices"], 
  ["Ituiative Surface", "Working TV's"], 
  ["designed for iPad", "Ituiative Surface"], 
  ["wireless", "Ituiative Surface"]]
  return (
    <div className="Product">
    <h4>{title}</h4>
    <p>{description[idx][0]}</p>
    <p>{description [idx][1]}</p>
    <p>{description [idx][2]}</p>
    <p>{description [idx][3]}</p>

    <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>

    </div>
  )
}

export default Product;