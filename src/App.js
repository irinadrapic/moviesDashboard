import React from 'react';
import CurrentSelectionDisplay from './components/CurrentSelectionDisplay'
import SuggestedMovies from './components/SuggestedMovies'
import 'materialize-css/dist/css/materialize.min.css'
import './All.css'
import Header from './components/Header.js';
// import SearchResult from './components/SearchResult';

class App extends React.Component{
    constructor(props){
        super(props)
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.updateCurrent = this.updateCurrent.bind(this);
        this.state={
            searchValue:"",
            currentSelection:"tt3371366"
        }
    }
    updateSearchValue(value){
        this.setState({
            searchValue: value
        })
    }

    updateCurrent(imbd_id){
        console.log("here", imbd_id)
        this.setState({currentSelection: imbd_id})
    }

    render(){
        return(
        <div style={{overflow:'hidden', position:'absolute', height: '100vh', width:'100vw'}}>
            <Header currentSearch={this.state.searchValue} updateSearch={this.updateSearchValue} updateCurrent={this.updateCurrent}/>
            <CurrentSelectionDisplay current={this.state.currentSelection}/>
            <SuggestedMovies current={this.state.currentSelection}/>
        </div>
        )
    }
}

export default App;