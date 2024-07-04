import React, { useState } from 'react';
import DataItem from './DataItem.js'

function DataItemList({ data, setView }) {

    const [dataList, setDataList] = useState(data);
    function titleCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function getImage(product, index) {
        return <div className="container">
        <div>
          <img align="left" 
          src={`../img/${product.pic}`} 
          alt="product pic" 
          width="250" 
          height="150" 
          border="1" />
        </div>
  
        <div style={{ "minWidth": 180, "marginLeft": 5 }}>
          <div>Name: {titleCase(product.name)}</div>
          <div>Size: {titleCase(product.size)}</div>
          <div>Department: {titleCase(product.department)}</div>
        </div>
  
        <div style={{ "marginLeft": 5 }}>Price: £{product.price.toFixed(2)}</div>
      </div>
    }

    function buildList(index) {
        return (<div index={index}><div>
            {getImage(data[index], index)}
            </div></div>)
    }
    return (<div>{dataList.map((product, index) => {
        return (buildList(index)
        )})}</div>
    );
}
export default DataItemList; 
