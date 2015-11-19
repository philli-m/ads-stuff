var Editor = React.createClass({
  render: function() {
    return (
      <div>
        <Input value={this.props.data.text} />
      </div>
    );
  }
});

var Input = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input type="text" maxLength="20" value={this.state.value} onChange={this.handleChange} />
    );
  }
});

var appData = {text: "hello"};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);