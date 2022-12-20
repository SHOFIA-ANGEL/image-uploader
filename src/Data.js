import React from "react";

function Data({ data }) {
  return (<div>
   
      <h1 className="sub1">Image List</h1>
        <center>
        {data &&
          data.map((item,_id) => (
            <div key={item.id}>
              <img id="img1" src={item.img1.value} className="images"/>
              <img id="img1" src={item.img2.value} className="images" />
              <img id="img1" src={item.img3.value} className="images" />
            </div>
          ))}</center>
          </div>
     
  );
}
export default Data;