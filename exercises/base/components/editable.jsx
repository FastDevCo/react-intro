var React = require('react');


/*
  This is just an input field that becomes editable when you click it
  and saves its current state with onSave (that it takes as a parameter)
  when you hit `Enter`.

  Usage in JSX:
  
  <Editable onSave={yourCallbackFn}/>
*/


export var Editable = React.createClass({

  getInitialState: function () {
    return {
      editmode: false, 
      value: ""
    };
  },

  edit: function () {
    this.setState({
      editmode: true, 
      value: this.props.value
    });
  },

  update: function (e) {
    this.setState({
      editmode: this.state.editmode, 
      value: e.target.value
    });
  },

  save: function (e) {
    if (e.key !== "Enter") return;
    this.props.onSave(this.state.value);
    this.setState({
      editmode: false, 
      value: ""
    });
  },

  render: function () {
    var editor = (
      <input 
        className="update-input" 
        type="text" 
        value={this.state.value} 
        onChange={this.update} 
        onKeyPress={this.save} />
    );

    var viewer = <strong onClick={ this.edit }>{ this.props.value }</strong>
    var v = this.state.editmode ? editor : viewer;
    return (<span>{ v }</span>)
  }
});
