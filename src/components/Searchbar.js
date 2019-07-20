import React from 'react';
import Fuse from 'fuse.js';
import Paper from '@material-ui/core/paper';
import OutputCell from './OutputCell.js';
var MoviesData = require('../csvjson.json');

class Searchbar extends React.Component{
    constructor(props){
        super(props)
        this.selectCurrent = this.selectCurrent.bind(this);
    }
    generateSearchOutput(){
    var options = {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "Title",
        ]
        };
    var list = MoviesData
    var fuse = new Fuse(list, options);
    let result = fuse.search(this.props.currentSearch);
    return result
    }

    selectCurrent(imdb_id){
        this.props.updateCurrent(imdb_id);
        this.props.updateSearch("");
    }

    render(){
        var moviesReturned = this.generateSearchOutput();
        console.log(moviesReturned);
        return(
        <div className="searchbar">
        <input
              onChange={(e) => this.props.updateSearch(e.target.value)}
              placeholder="Search Movies..."
              className="search-input"
              value={this.props.currentSearch}
            />
        <div className="results-plane">
        {moviesReturned.map(data => <OutputCell singleMovie={data} onSelect={this.selectCurrent}/>
            )}
        </div>
        </div> 
        )
    }
}

export default Searchbar 