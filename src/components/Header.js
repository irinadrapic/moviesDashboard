import React from 'react';
import Searchbar from './Searchbar';


class Header extends React.Component{
render(){

  return (
    <div className="blue-grey darken-1 header">
    <div className="title logo">
    MoviesDB
    </div>
    <Searchbar currentSearch={this.props.currentSearch} updateSearch={this.props.updateSearch} updateCurrent={this.props.updateCurrent}/>
    <div className="right-header-spacing"/>
    </div>
  );
}
}

export default Header;