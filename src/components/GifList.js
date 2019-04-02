import React from 'react';

 const GifList = (props) => {
    let gifs;
    if(props.gifs.length > 0){
        gifs = props.gifs.map((gif, index) => {
            return <li key={index}><img src={gif.images.original.url} alt=''/></li>
        })
    }

    return (
        <ul>
            {gifs}
        </ul>
    )
}

export default GifList