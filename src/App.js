import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '308a78191427468988203e5f4e334e8b'
})

class App extends Component {

  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  onButtonSubmit = () => {
    console.log("Click")
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg"
    ).then(
      function(response) {
        console.log(response)
        // do something with response
      },
      function(err) {
        console.log(err)
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <ParticlesBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {
          //<FaceRecognition />
        }
      </div>
    );
  }
}

export default App;
