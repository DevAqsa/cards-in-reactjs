// eslint-disable-next-line react/prop-types
function Price({oldPrices,  newPrices}) {

    let oldstyles = {
        textDecoration: "line-through",
        color: "grey",
        fontSize: "15px",
        paddingRight: "10px",
    
    };

    let newstyles ={
        fontSize: "20px",
        fontWeight: "bold",
    }

    
  return (
    <div >
        <span style={oldstyles}>{oldPrices}</span>
        &nbsp;  &nbsp;  &nbsp;
        <span style={newstyles}>{newPrices}</span>

    </div>
  )
}

export default Price;