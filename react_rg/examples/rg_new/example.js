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
      targetValue = targetNode.value;

      changeSet[targetName] = {};
      changeSet[targetName][targetProp] = {$set: targetValue};

      var newState = React.addons.update(this.state, changeSet);
      this.setState(newState);
  },
  render: function() {
    return (
      <div>
        <div class="col-md-8" id="appInput">
          <h3>Text</h3>
          <div class="form-group">
            <label>Header</label>
            <InputText name="header" property="text" value={this.state.header.text}  handleChange={this.handleChange} />
            </div>
            <div class="form-group">
            <label>Color</label>
            <InputText name="header" property="color" value={this.state.header.color}  handleChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label>Description</label>
            <InputText name="paragraph" property="text" value={this.state.paragraph.text} handleChange={this.handleChange} />
            </div>
            <div class="form-group">
            <label>Color</label>
            <InputText name="paragraph" property="color" value={this.state.header.color}  handleChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label>Button</label>
            <InputText name="button" property="text" value={this.state.button.text} handleChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label>Color</label>
            <InputText name="button" property="color" value={this.state.header.color}  handleChange={this.handleChange} />
          </div>
        </div>
        <div id="appOutput">
        <a href="%%CLICK_URL_UNESC%%%%DEST_URL_ESC%%" target="_blank" class="rg-ad" id="rg-ad">
          <img class="rg-ad-img" id="rg-ad-img" src="#" />
          <h3 style={{color: this.state.header.color}}>{this.state.header.text} </h3>
          <p style={{color: this.state.paragraph.color}}>{this.state.paragraph.text}</p>
          <button style={{color: this.state.button.color}}>{this.state.button.text}</button>
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

var appData = {
  header: {
    text: "title",
    color: "black"
  },
  paragraph: {
    text: "Description",
    color: "black"
  },
  button: {
    text: "Button",
    color: "black"
  }
};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);
