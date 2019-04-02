import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        query: '',
        gifs: []
    }
   

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://api.giphy.com/v1/gifs/search?q='+this.state.query+'&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                gifs: data.data.slice(0, 3)
            })
        })

    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.handleSubmit} handleChange={this.handleChange} query={this.state.query}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    handleChange = ({target: {value}}) => {
        this.setState({
            query: value
        })
    }
}