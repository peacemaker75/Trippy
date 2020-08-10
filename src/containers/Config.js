import React from 'react';



// const Container = styled.div`
//     padding: 10px 0;
// `;

// const Title = styled.h3`
//     font-size: 40px;
//     color: cyan;
// `;


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
                items: result.items
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
      return <div>Chargement…</div>;
      } else {
      return (
          <div>
              <ul>
                  {items.map(item => (
                      <li key={item.name}>
                      {item.name} {item.price}
                      </li>
                  ))}
              </ul>

          </div>
      );
    }
  }
};

export default Config;