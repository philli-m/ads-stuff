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
              <label>Header</label><br></br>
              <InputText name="header" property="text" maxLength="30" value={this.state.header.text}  handleChange={this.handleChange} />
              <label>Text Shadow</label>
              <TextShadow name="header" type="checkbox" hasShadow={this.state.header.shadow} hasShadow={this.handleChange}/>
            </div>
            <div class="form-group">
              <label>Description</label><br></br>
              <InputText name="paragraph" property="text" maxLength="230" value={this.state.paragraph.text} handleChange={this.handleChange} />
              <label>Text Shadow</label>
              <TextShadow name="headerShadow" type="checkbox" checked="checked" />
            </div>
            <div class="form-group">
              <label>Button</label><br></br>
              <InputText name="button" property="text" value={this.state.button.text} handleChange={this.handleChange} />
              <label>Text Shadow</label>
              <TextShadow name="headerShadow" type="checkbox" checked="checked" />
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
              <InputColor name="adBlock" property="color" value={this.state.adBlock.color}  handleChange={this.handleChange} />
              <label>Boarder</label>
              <TextShadow name="border" type="checkbox" checked="checked" />
            </div>
            <div class="form-group">
              <label>Button Color</label><br></br>
              <InputColor name="buttonBackground" property="color" value={this.state.buttonBackground.color}  handleChange={this.handleChange} />
            </div>
          </div>

        <div id="appOutput" name="adBlock"  style={{backgroundColor: this.state.adBlock.color}} style={{border: this.state.adBlock.border}}>
          <img class="rg-ad-img" id="rg-ad-img" src="#" />
          <h3 style={{color: this.state.header.color}} style={{textShadow: this.state.header.shadow}}>{this.state.header.text} </h3>
          <p style={{color: this.state.paragraph.color}}>{this.state.paragraph.text}</p>
          <button style={{color: this.state.button.color}} style={{backgroundColor: this.state.buttonBackground.color}}>{this.state.button.text}</button>
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
        <input name={this.props.name} type="checkbox" checked={this.props.property} data-property={this.props.property} onChange={this.props.handleChange}/>
    )
  }
})

var appData = {
  header: {
    text: "title",
    color: "black",
    hasShadow: true,
    shadow: "1px 1px 2px black"
  },
  paragraph: {
    text: "Description",
    color: "black",
    hasShadow: true,
    shadow: "1px 1px 2px black"
  },
  button: {
    text: "Button",
    color: "black",
    hasShadow: true,
    shadow: "1px 1px 2px black"
  },
  buttonBackground: {
    color: "blue"
  },
  adBlock: {
    color: "white",
    border: "3px solid black"
  },

};

ReactDOM.render(
  <Editor data={appData} />, document.getElementById('app')
);
