import React from 'react';


class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("http://localhost:3001/api/home")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.cities
              });
            },

            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }

    render() {
      return (
          <div>
          </div>
      );
    }
  };

export default Config;