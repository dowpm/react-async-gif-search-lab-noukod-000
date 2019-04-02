import React from 'react';

const GifSearch = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <input type='text' value={props.query} onChange={props.handleChange}/>
            <button type='submit' className='btn primary'>Search</button>
        </form>
    )
    
}

export default GifSearch