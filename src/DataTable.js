import { useState, useEffect } from "react";
import data from './data.json';
import DataItem from './DataItem';
import './App.css';
import DataItemList from './DataItemList.js';
import DataItemGallery from './DataItemGallery.js';

function DataTable() {

  const [itemNo, setItemNo] = useState(window.sessionStorage.getItem("saveState") ? window.sessionStorage.getItem("saveState") : 0);
  const [viewType, setViewType] = useState('Individual');
  const [order, setOrderType] = useState(window.sessionStorage.getItem("saveOrder") ? window.sessionStorage.getItem("saveOrder") : 'NameAZ');
  const [sortedData, setSortedData] = useState(data);
  

  useEffect(() => {
    window.sessionStorage.setItem("saveState", itemNo);
  }, [itemNo]);

  function nextPage() {
    if (itemNo + 1 < data.length) {
      setItemNo(itemNo + 1);
    }
  }

  
  function setView(itemNo) {
    setItemNo(itemNo)
    setViewType("Individual")

  }

  useEffect(() => {

    function getFieldName() {
      switch (order) {
        case 'NameAZ':
        case 'NameZA':
          return "name";
        case 'CatAZ':
        case 'CatZA':
          return "department";
        case 'PriceHL':
        case 'PriceLH':
          return "price";
        case 'RatingHL':
        case 'RatingLH':
          return 'ratings';
        case 'TypeAZ':
        case 'TypeZA':
          return 'type';
        default:
          return "name"
      }
    }

    function getDirection() {
      switch (order) {
        case 'NameAZ':
        case 'CatAZ':
        case 'TypeAZ':
        case 'PriceLH':
        case 'RatingLH':
          return true;
        default:
          return false;
      }
    }


    function sortData() {

      var obj = [...data];

      return obj.sort(function (a, b) {

        var field = getFieldName()
        var textA = "";
        var textB = "";

        if (field !== "price" && field !== "ratings") {
          textA = a[field].toUpperCase();
          textB = b[field].toUpperCase();
        } else {
          textA = a[field];
          textB = b[field];
        }

        if (getDirection()) {
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }

        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      })
    }

    setSortedData(sortData())
    window.sessionStorage.setItem("saveOrder", order);
  }, [order]);

  function previousPage() {
    if (itemNo - 1 > -1) {
      setItemNo(itemNo - 1)
    }
  }

  function first() {
    setItemNo(0)
  }

  function last() {
    setItemNo(data.length - 1)
  }

  return (<div>
    <div className="Navbar">
      <select value={viewType} className="Dropbtn" style={{ float: "right" }}
        onChange={e => setViewType(e.target.value)} >
        <option value="Gallery">Gallery</option>
        <option value="List">List</option>
        <option value="Individual">Individual</option>
      </select>
      <select value={order} className="Dropbtn" style={{ float: "right" }}
        onChange={e => setOrderType(e.target.value)} >
        <option value="NameAZ">Name A -&gt; Z</option>
        <option value="NameZA">Name Z -&gt; A</option>
        <option value="CatAZ">Category A -&gt; Z</option>
        <option value="CatZA">Category Z -&gt; A</option>
        <option value="PriceHL">Price High -&gt; Low</option>
        <option value="PriceLH">Price Low -&gt; High</option>
        <option value="RatingHL">Ratings High -&gt; Low</option>
        <option value="RatingLH">Ratings Low -&gt; High</option>
        <option value="TypeAZ">Type A -&gt; Z</option>
        <option value="TypeZA">Type Z -&gt; A</option>
      </select>
      {/* <select value={viewType} className="Dropbtn" style={{ float: "right" }}
        onChange={e => setFilterType(e.target.value)} >
        <option value="Sets">Sets</option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="SizeXS">Size XS</option>
        <option value="SizeS">Size S</option>
        <option value="SizeM">Size M</option>
        <option value="SizeL">Size L</option>
        <option value="SizeAA">Size AA</option>
        <option value="SizeAAA">Size AAA</option>
        <option value="SizeC">Size C</option>
        <option value="SizeD">Size D</option>
        <option value="Size9V">Size 9V</option>
        <option value="Size12V">Size 12V</option>        
        <option value="2Way">2 Way</option>
        <option value="4Way">4 Way</option>
      </select> */}
    </div>
    <div className="Datatable">
      {viewType === 'Individual' ? <div><DataItem product={sortedData[itemNo]} />
        <button onClick={() => previousPage()}>Previous</button>
        <button onClick={() => nextPage()}>Next</button>
        <div>
        </div>
        <button onClick={() => first()}>First</button>
        <button onClick={() => last()}>Last</button></div>
        : null}
      {viewType === 'Gallery' ? <DataItemGallery data={sortedData} setView={setView} />
        : null}
      {viewType === 'List' ? <DataItemList data={sortedData} setView={setView} />
        : null}</div></div>
  );
}

export default DataTable; 