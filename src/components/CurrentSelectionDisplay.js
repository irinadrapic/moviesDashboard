import React from 'react';
const MoviesData = require('../csvjson.json');

class CurrentSelectionDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const current = MoviesData.find(x => x.imdb_id === this.props.current);
        return(
            <div className="card blue-grey lighten-2 white-text current-display">
            <Poster pic={current.Poster}/>
            <Details movie={current}/>
            <Synopsis summary={current.Description}/>
            </div>
        )
    }
}

function Poster(props) {
    return(
        <div className = "poster">
            <img className = 'img'
            src={props.pic}>
            </img>
        </div>
    )
} 

function Details(props) {
    return(
        <div className="card-content details-title">
            <div className = "card-title display-title">
                {props.movie.Title}
            </div>
        <p className= "display-details">
            Release Date: {props.movie.release_date}
            <br/>
            Ratings: {parseInt(props.movie.vote_count)}
            <br/>
            Average Rating: {props.movie.vote_average}
        </p>
        </div>
    )
}

function Synopsis(props) {
    return(
        <div className = "card-content synopsis-section">
        <div className = "card-title"> Movie Synopsis </div>
            {props.summary}
        </div>
    )
}




export default CurrentSelectionDisplay


const MyMovie =     {
    "field1": "19284",
    "Poster": "https://images-na.ssl-images-amazon.com/images/I/512n8kyRVoL.jpg",
    "imdb_id": "tt0349205",
    "adult": "False",
    "belongs_to_collection": "{'id': 114783, 'name': 'Cheaper by the Dozen Collection', 'poster_path': '/zW1sw1d0XFT069g5LktF7R5eKhs.jpg', 'backdrop_path': '/abIbeEqOhnEEeEOjalyI16KlabU.jpg'}",
    "budget": "40000000",
    "genres": "[{'id': 35, 'name': 'Comedy'}]",
    "homepage": "",
    "id": "11007",
    "original_language": "en",
    "original_title": "Cheaper by the Dozen",
    "overview": "The Baker brood moves to Chicago after patriarch Tom gets a job coaching football at northwestern University, forcing his writer wife, Mary, and the couple's 12 children to make a major adjustment. The transition works well until work demands pull the parents away from home, leaving the kids bored -- and increasingly mischievous.",
    "popularity": "7.3642970000000005",
    "poster_path": "/qdbC2M1WCY310tmbraIoxbd32TT.jpg",
    "production_companies": "[{'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Robert Simonds Productions', 'id': 3929}]",
    "production_countries": "[{'iso_3166_1': 'US', 'name': 'United States of america'}]",
    "release_date": "2003-12-24",
    "revenue": "190212113.0",
    "runtime": "98.0",
    "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
    "status": "Released",
    "tagline": "Growing pains? They've got twelve of them!",
    "title": "Cheaper by the Dozen",
    "video": "False",
    "vote_average": "6.0",
    "vote_count": "725.0"
  }