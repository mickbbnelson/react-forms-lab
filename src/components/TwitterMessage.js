import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars,
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
      charsLeft: this.state.charsLeft - event.target.value.length
    })

  }

  //updateChars = () => {
  //  this.setState({
  //    charsLeft: {charsLeft - event.target.value.length},
  //  })
  //}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
