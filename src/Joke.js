import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  upVote() { this.props.vote(this.props.id, +1) }
  downVote() { this.props.vote(this.props.id, -1) }


  //OLD CODE FOR REFERENCE JUST IN CASE
  // function Joke({ vote, votes, text, id }) {
  //   const upVote = () => vote(id, +1);
  //   const downVote = () => vote(id, -1);

  render() {
    return (
      <div className="Joke" >
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {this.prop.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
