import React from 'react';

class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cities: []
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:3001/api/home')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        cities: json.cities
      })
  });
  }

  render() {
    console.log(this.state.cities)
    return (
      <div
        className='container-fluid'
        style={{
          fontFamily: 'Montserrat'
        }}>
        <div
          className='row'>
            {this.state.cities.map((result) => {
              if (result.name  === 'Paris'){
              return (
            <div>{result.name} + est magique</div>
              ) } 
              else {
                return(
                <div>{result.name} + superville</div>
              )};
  })}
        </div>
      </div>
    );
  }
}

export default HomeContainer;