import React from 'react';

class Builder extends React.Component {
  // Set initial state
  state = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  };

  // Method to handle input changes and update state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Method to handle form submission and convert state to JSON
  handleSubmit = event => {

    event.preventDefault();
    const inputs = this.state;
    const inputsAsJson = `{<br>"` + this.state.input1 + `": {<br>"` + this.state.input2 + `":{<br>"` + this.state.input3 + `":` + this.state.input4 +`<br>}<br>}<br>}`;
    // Do something with the JSON, such as displaying it in a div
    document.getElementById('json-output').innerHTML = inputsAsJson;
  };

  render() {
    return (
      <div>
        <style>
          {`
          body {
            background-color: #282c34;
            color: white;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.5rem;
            text-align: left;
          }
          form {
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          label {
            margin: 1rem;
          }
          input {
            margin: 0.5rem;
          }
          button {
            margin: 1rem;
            padding: 0.5rem;
            background-color: #61dafb;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
          }
          button:hover {
            background-color: #61dafb;
            cursor: pointer;
          }
          #json-output {
            margin: 1rem;
            padding: 1rem;
            background-color: #282c34;
            color: white;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.5rem;
            text-align: left;
          }
          footer {
            padding: 7rem;
            display: table;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
          `}
        </style>
        <form onSubmit={this.handleSubmit}>
          <label>
            Guild ID:
            <input
              type="text"
              name="input1"
              value={this.state.input1}
              placeholder='123456789'
              onChange={this.handleChange}
            />
          </label>
          <label>
            Message ID:
            <input
              type="text"
              name="input2"
              placeholder='9723427836952345'
              value={this.state.input2}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Emoji:
            <input
              type="text"
              name="input3"
              placeholder='👍'
              value={this.state.input3}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Role ID:
            <input
              type="text"
              name="input4"
              placeholder='123456789'
              value={this.state.input4}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <br />
          <div id="json-output"></div>
        </form>
        <footer>
          Made with ❤️ by Copperhead Software and Chat GPT-3
        </footer>
      </div>
    );
  }
}

export default Builder;