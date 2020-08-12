import React from 'react';


class Home extends React.Component {
    constructor(state){
        super(state)

        this.state = {
            cities: [],
        }
    }

    render() {
        return(
            <div>
               Hello world
            </div>
        )
    }
};



export default Home;