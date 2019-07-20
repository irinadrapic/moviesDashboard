import React from 'react';
const MoviesData = require('../csvjson.json');

class SuggestedMovies extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const current = MoviesData.find(x => x.imdb_id === this.props.current)
        return (
            <div className = "card suggest-display">
            <div className="card-title suggestions-header">
            Check these out!
            </div>
            <div className="suggestions-container">
            <Suggestion desc={current.Recom1Desc} img_src={current.Recom1Poster} style={{gridColumn:1}}/>
            <Suggestion desc={current.Recom2Desc} img_src={current.Recom2Poster} style={{gridColumn:2}}/>
            <Suggestion desc={current.Recom3Desc} img_src={current.Recom3Poster} style={{gridColumn:3}}/>
            </div>
            </div>

        )
    }

}

const Suggestion = (props) => {
    return(
    <div className="suggestion" style={props.style}>
    <img className= "suggestion-image"  src={props.img_src}></img>
    <div className="suggestion-title">
        
    </div>
    </div>)
}

export default SuggestedMovies





const AllMovies = [{
"field1": "20146",
"Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvED0F_M4YI1y2mpj0jemifEOd0SwJhWsZPoE7SA5P5ga2104VA",
"imdb_id": "tt0078163",
"adult": "False",
"belongs_to_collection": "{'id': 937, 'name': 'The Pink Panther (Original) Collection', 'poster_path': '/xu6gZ0zGUSR8SC2QLKFaUrX2niM.jpg', 'backdrop_path': '/6KE7aguGR3UqwUn5RkzkoBc3MLy.jpg'}",
"budget": "0",
"genres": "[{'id': 28, 'name': 'action'}, {'id': 35, 'name': 'Comedy'}, {'id': 80, 'name': 'Crime'}, {'id': 53, 'name': 'Thriller'}]",
"homepage": "",
"id": "6081",
"original_language": "en",
"original_title": "Revenge of the Pink Panther",
"overview": "Chief Inspector Jacques Clouseau is dead. at least that is what the world (and Charles Dreyfus) believe when a dead body is discovered in Clouseau's car after being shot off the road. naturally, Clouseau knows differently, and taking advantage of not being alive, sets out to discover why an attempt was made on his life.",
"popularity": "6.970037",
"poster_path": "/rbShQ2wslGEJhjn8Y7XpdKaihyR.jpg",
"production_companies": "[{'name': 'United artists', 'id': 60}, {'name': 'Jewel Productions', 'id': 10257}, {'name': 'Pimlico Films', 'id': 10258}, {'name': 'Sellers-Edwards productions', 'id': 23537}]",
"production_countries": "[{'iso_3166_1': 'GB', 'name': 'United Kingdom'}, {'iso_3166_1': 'US', 'name': 'United States of america'}]",
"release_date": "1978-07-19",
"revenue": "49579269.0",
"runtime": "104.0",
"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Franais'}]",
"status": "Released",
"tagline": "Just when you thought it was safe to go back to the movies...",
"title": "Revenge of the Pink Panther",
"video": "False",
"vote_average": "6.4",
"vote_count": "121.0"},
  
{"field1": "12272",
"Poster": "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXPPPZR/image?locale=en-au&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
"imdb_id": "tt0113497",
"adult": "False",
"belongs_to_collection": "",
"budget": "65000000",
"genres": "[{'id': 12, 'name': 'adventure'}, {'id': 14, 'name': 'Fantasy'}, {'id': 10751, 'name': 'Family'}]",
"homepage": "",
"id": "8844",
"original_language": "en",
"original_title": "Jumanji",
"overview": "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite alan -- an adult who's been trapped inside the game for 26 years -- into their living room. alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
"popularity": "17.015539",
"poster_path": "/vzmL6fP7aPKnKPRTFnZmiUfciyV.jpg",
"production_companies": "[{'name': 'TriStar Pictures', 'id': 559}, {'name': 'Teitler Film', 'id': 2550}, {'name': 'Interscope Communications', 'id': 10201}]",
"production_countries": "[{'iso_3166_1': 'US', 'name': 'United States of america'}]",
"release_date": "1995-12-15",
"revenue": "262797249.0",
"runtime": "104.0",
"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Franais'}]",
"status": "Released",
"tagline": "Roll the dice and unleash the excitement!",
"title": "Jumanji",
"video": "False",
"vote_average": "6.9",
"vote_count": "2413.0"},
{
"field1": "12275",
"Poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Father_of_the_bride_poster.jpg/200px-Father_of_the_bride_poster.jpg",
"imdb_id": "tt0113041",
"adult": "False",
"belongs_to_collection": "{'id': 96871, 'name': 'Father of the Bride Collection', 'poster_path': '/nts4iOmnnq7GnicycMJ9pSan204.jpg', 'backdrop_path': '/7qwE57OVZmMJChBpLEbJEmzUydk.jpg'}",
"budget": "0",
"genres": "[{'id': 35, 'name': 'Comedy'}]",
"homepage": "",
"id": "11862",
"original_language": "en",
"original_title": "Father of the Bride Part II",
"overview": "Just when George Banks has recovered from his daughter's wedding, he receives the news that she's pregnant ... and that George's wife, nina, is expecting too. he was planning on selling their home, but that's a plan that -- like George -- will have to change with the arrival of both a grandchild and a kid of his own.",
"popularity": "8.387519000000001",
"poster_path": "/e64sOI48hQXyru7naBFyssKFxVd.jpg",
"production_companies": "[{'name': 'Sandollar Productions', 'id': 5842}, {'name': 'Touchstone Pictures', 'id': 9195}]",
"production_countries": "[{'iso_3166_1': 'US', 'name': 'United States of america'}]",
"release_date": "1995-02-10",
"revenue": "76578911.0",
"runtime": "106.0",
"spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
"status": "Released",
"tagline": "Just When his World Is Back To normal... he's In For The Surprise Of his Life!",
"title": "Father of the Bride Part II",
"video": "False",
"vote_average": "5.7",
"vote_count": "173.0"
  }]

