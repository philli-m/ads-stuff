  var update = React.addons.update;



var Editor = React.createClass({
  getInitialState: function() {
    return this.props.data;
  },
  handleChange: function(event) {
    var changeSet = {},
      targetNode = event.target,
      targetName = targetNode.getAttribute("name"),
      targetProp = targetNode.getAttribute("data-property"),
      targetValue;

      // Note: the more 'React' way to do this is use a checkedLink
      // https://facebook.github.io/react/docs/two-way-binding-helpers.html
      if (targetNode.getAttribute("type") === "checkbox") {
        targetValue = targetNode.checked;
      } else {
        targetValue = targetNode.value;
      }

      changeSet[targetName] = {};
      changeSet[targetName][targetProp] = {$set: targetValue};
      var newState = React.addons.update(this.state, changeSet);

      this.setState(newState);
  },

  shadowString: function (hasShadow) {
    // returns the
      if (hasShadow) {
          return this.state.header.shadowStyle;
      } else{
          return "";
      }

  },
  render: function() {

    var textshadowStyle = {
      color: this.state.header.color,
      textShadow: this.shadowString(this.state.header.hasShadow)
    };

    return (
      <div>
        <div class="col-md-8" id="appInput">
          <h3>Text</h3>
            <div class="form-group">
              <label>Header</label><br></br>
              <InputText name="header" property="text" maxLength="30" value={this.state.header.text}  handleChange={this.handleChange} />
              <TextShadow name="header" property="hasShadow" value={this.state.header.hasShadow} handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Description</label><br></br>
              <InputText name="paragraph" property="text" maxLength="230" value={this.state.paragraph.text} handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Button</label><br></br>
              <InputText name="button" property="text" value={this.state.button.text} handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Header Color</label><br></br>
              <InputColor name="header" property="color" value={this.state.header.color}  handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Description Color</label><br></br>
               <InputColor name="paragraph" property="color" value={this.state.paragraph.color}  handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Button Text Color</label><br></br>
              <InputColor name="button" property="color" value={this.state.button.color}  handleChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label>Ad Color</label><br></br>
              <InputColor name="adBackground" property="color" value={this.state.adBackground.color}  handleChange={this.handleChange} />
            </div>
            <div class="form-group">
              <label>Button Color</label><br></br>
              <InputColor name="buttonBackground" property="color" value={this.state.buttonBackground.color}  handleChange={this.handleChange} />
            </div>
          </div>
        <div id="appOutput" name="adBackground"  style={{backgroundColor: this.state.adBackground.color}}>
          <a href="%%CLICK_URL_UNESC%%%%DEST_URL_ESC%%" target="_blank" class="rg-ad" id="rg-ad">
          <img class="rg-ad-img" id="rg-ad-img" src="#" />
          <h3 style={textshadowStyle} >{this.state.header.text} </h3>
          <p style={{color: this.state.paragraph.color}}>{this.state.paragraph.text}</p>
          <button style={{color: this.state.button.color, backgroundColor: this.state.buttonBackground.color}}> {this.state.button.text} </button>
          </a>
        </div>
      </div>
    );
  }
});

var InputText = React.createClass({
  render: function() {
    return (
      <input name={this.props.name} data-property={this.props.property} type="text" onChange={this.props.handleChange} />
    );
  }
});

var InputColor = React.createClass({
  render: function() {
    return (
      <input name={this.props.name} data-property={this.props.property} type="color" onChange={this.props.handleChange} />
    );
  }
});

var TextShadow = React.createClass({
  render: function() {
    return (
        <input name={this.props.name} type="checkbox" checked={this.props.value} data-property={this.props.property} onChange={this.props.handleChange} value={this.props.value} />
    );
  }
});

var appData = {
  header: {
    text: "title",
    color: "black",
    hasShadow: false,
    shadowStyle: "#333 5px 5px 5px"
  },
  paragraph: {
    text: "Description",
    color: "black",

  },
  button: {
    text: "Button",
    color: "black",

  },
  buttonBackground: {
    color: "blue"
  },
  adBackground: {
    color: "white",
    border: "black 3px"
  },

};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);
var App = React.createClass({

    displayName: 'App',

    onDrag: function(color, c){
        COLOR = color
        this.setState({})
    },

    render: function(){

        return (
            <div>
                <ColorPicker value={COLOR} onDrag={this.onDrag} />
                <div style={{background: COLOR, width: 100, height: 50, color: 'white'}}>
                    {COLOR}
                </div>
            </div>
        )
    }
})

React.renderComponent(App(), document.body)
