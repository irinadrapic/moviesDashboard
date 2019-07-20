import React from 'react';

class OutputCell extends React.Component{
    render(){
        return(
            <div className="output-item" onClick={() => this.props.onSelect(this.props.singleMovie.imdb_id)}>
                    {this.props.singleMovie.Title} <br/>
            </div>
        )
    }
}

export default OutputCell