import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ImgDisp from './components/ImgDisp/ImgDisp'
import './App.css';

/*const app = new Clarifai.App({
 apiKey: '2e2b3e8adf1d407e98e0d92f4d8d0d31'
});*/

    const USER_ID = '77fp2fth65xn'
    const PAT = '3a466543258d4ba7b4b9d950926a894e';
    const APP_ID = '1e516835bad84453a7c27434a24524f8';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
    // Change this to whatever image URL you want to process
    let IMAGE_URL = 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg';

const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    class App extends Component {
      constructor() {
        super();
        this.state = {
          input: '',
          imgUrl: '',
        }
      }

onInputChange = (event) => {
  this.setState({input: event.target.value})
}

onButtonSubmit = () => {
  this.setState({imgUrl: this.state.input})
  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

  render() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
      <ImgDisp imageUrl={this.state.imgUrl} />
    </div>
  );
}
}


export default App;
