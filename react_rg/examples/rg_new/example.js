var Editor = React.createClass({
  render: function() {
    return (
        <Input value={this.props.data.text} />

    );
  }
});


var Input = React.createClass({
  getInitialState: function() {
    return {value: this.props.value,
            header: this.props.value,
            paragraph: this.props.value,
            button: this.props.value};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.setState({header: event.target.value});
    this.setState({paragraph: event.target.value});
    this.setState({button: event.target.value});
  },

  render: function() {
    return (
      <div>
      <Output value={this.state.value} handleChange={this.handleChange} />
      <Output2 value={this.state.value} handleChange={this.handleChange} />
      <Output3 value={this.state.value} handleChange={this.handleChange} />

      </div>
    );
  }
});

var Output = React.createClass({
  render: function() {
    return (
      <div>
      <input type="text" onChange={this.props.handleChange} />
      <h2>{this.props.value}</h2>
      </div>
    );
  }
});

var Output2 = React.createClass({
  render: function(){
    return (
      <div>
      <input type="text" onChange={this.props.handleChange} />
      <h3>{this.props.value}</h3>
      </div>
    );
  }
});
var Output3 = React.createClass({
  render: function(){
    return (
      <div>
      <input type="text" onChange={this.props.handleChange} />
      <button> {this.props.value} </button>
      </div>
    );
  }
});
var appData = {text: "hello"};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);
