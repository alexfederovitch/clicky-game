import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title"
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import sponge from "./components/sponge.json";

class App extends Component {

  state = {
    message: "Click an image to begin",
    sponge,
    score: 0,
    highscore: 0
  }

gameOver = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score, message: "You guessed incorrectly!"}, function() {
      console.log(this.state.highscore);
    });
  }
  this.state.sponge.forEach(card => {
    card.count = 0;
  });
  this.setState({score: 0});
  return true;
}

clickCount = id => {
  this.state.sponge.find((o, i) => {
    if (o.id === id) {
      if(sponge[i].count === 0){
        sponge[i].count = sponge[i].count + 1;
        this.setState({score : this.state.score + 1, message: "You guessed correctly!"}, function(){
          console.log(this.state.score);
        });
        this.state.sponge.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
      }
    }
  });
}

  render() {
    return (
      <Wrapper>
        <Title message={this.state.message} score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
        {this.state.sponge.map(sponge => (
         <Card
          clickCount={this.clickCount}
          id={sponge.id}
          key={sponge.id}
          image={sponge.image}
         />
        ))}
      </Wrapper>
    );
  }
}

export default App;
