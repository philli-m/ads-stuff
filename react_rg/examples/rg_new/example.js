var Editor = React.createClass({
  render: function() {
    return (
        <Input value={this.props.data.text} />

    );
  }
});


var Input = React.createClass({
  getInitialState: function() {
    console.log(this)
    return {value: this.props.value,
            header: this.props.value,
            paragraph: this.props.value,
            button: this.props.value};
  },
  handleChange: function(event) {
    console.log("name", event.target.name)
    console.log("value", event.target.value)

    // because 'name' changes for each child object, we need to set
    // the `changeSet` this way, instead of using an object literal
    // like we would normally

    var changeSet = {}
    changeSet[event.target.name] = event.target.value;

    this.setState(changeSet)

  },

  render: function() {
    return (
      <div>
      <Output  value={this.state.value}  handleChange={this.handleChange} />
      <Output2 value={this.state.header} handleChange={this.handleChange} />
      <Output3 value={this.state.button} handleChange={this.handleChange} />

      </div>
    );
  }
});

var Output = React.createClass({
  render: function() {
    return (
      <div>
      <input name="value" type="text" onChange={this.props.handleChange} />
      <h2>{this.props.value}</h2>
      </div>
    );
  }
});

var Output2 = React.createClass({
  render: function(){
    return (
      <div>
      <input name="header" type="text" onChange={this.props.handleChange} />
      <h3>{this.props.value}</h3>
      </div>
    );
  }
});
var Output3 = React.createClass({
  render: function(){
    return (
      <div>
      <input name="button" type="text" onChange={this.props.handleChange} />
      <button> {this.props.value} </button>
      </div>
    );
  }
});
var appData = {text: "hello"};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);