import React, { Component } from 'react';
import Twitter from 'react-twitter-login';
const authHandler = (err, data) => {
    console.log(err, data);
};
class twitterLogin extends Component {
    responseTwitter(response) {
        console.log(response);
    }
 
    render() {
        return (
            <Twitter
                consumerKey = {"6nCRcqMddG5rGAOuQLH9lJlxA"}
                consumerSecret = {"nUs7jaoMYyA8Q88fJdX4cINnjoUmPZ3kXx6h35ZYowc1XGtkly"}
                authCallback={authHandler}
                className = "Twitter"
                buttonTheme = "light_short"
            ></Twitter>
        )
    }
}
export default twitterLogin;