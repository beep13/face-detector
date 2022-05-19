import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import ImgDisp from './components/ImgDisp/ImgDisp'
import Clarifai from 'clarifai'
import './App.css';

const app = new Clarifai.App({
 apiKey: '2e2b3e8adf1d407e98e0d92f4d8d0d31'
});

class App extends Component {
      constructor() {
        super();
        this.state = {
          input: '',
          imgUrl: '',
          box: {},
          route: 'SignIn',
          isSignedIn: false
        }
      }

onInputChange = (event) => {
  this.setState({input: event.target.value})
}

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box: box});
}

onButtonSubmit = () => {
  this.setState({imgUrl: this.state.input});
  app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home'){
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
  const { isSignedIn, imgUrl, route, box } = this.state;
  return (
    <div className="App" >
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {route === 'home'
      ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}/>
          <ImgDisp
            box={box}
            imgUrl={imgUrl}/>
        </div>
      : (
        route === 'SignIn'
        ? <SignIn onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>
      )
    }
    </div>
  );
}
}

export default App;
