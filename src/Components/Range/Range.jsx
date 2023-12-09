import React from "react";
import Slider from "@material-ui/core/Slider";

function Range() {
  const [range, setRange] = React.useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div style={{display:"flex" ,flexDirection:"column", gap:"1rem"}}>
      <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" />
      <span style={{fontWeight:"500"}}> Price: {range[0]} - {range[1]}</span>
    </div>
  );
}
export default Range;
