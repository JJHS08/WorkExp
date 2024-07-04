import React, { useState } from 'react';

function DataItemGallery({ data, setView }) {

    const [dataGallery, setDataGallery] = useState(data);

    function getImage(product, index) {
        return <img title={"£" + product.price.toFixed(2)} align="left" src={`../img/${product.pic}`} alt="product pic" width="250" height="150" border="1" onClick={() => setView(index)} />

    }

    function buildGallery(index) {
        var remainder = (index + 1) % 4
        if (index >= 3 && remainder === 0)
            return (<div index={index}>
                <div>
                    {getImage(data[index - 3], index - 3)}
                    {getImage(data[index - 2], index - 2)}
                    {getImage(data[index - 1], index - 1)}
                    {getImage(data[index - 0], index)}
                </div>
            </div>)
        if ((index + 1) === data.length)
            return (<div index={index}>
                {remainder === 3 ? getImage(data[index - 2], index - 2) : null}
                {remainder >= 2 ? getImage(data[index - 1], index - 1) : null}
                {remainder >= 1 ? getImage(data[index - 0], index) : null}
            </div>)


    }
    return (<div>{dataGallery.map((product, index) => {
        return (
            buildGallery(index)
        )
    })}</div>

    );
}
export default DataItemGallery; 