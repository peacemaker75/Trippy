import Config from "../containers/Config";

const Api = 'http://localhost:3001/api/home';

class Api {
    constructor(props) {
        super(props);
     
        this.state = {
          cities: [],
        };
      }
      componentDidMount() {
        fetch(API + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => this.setState({ hits: data.cities }));
      }

}


export default new Api();
