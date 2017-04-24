import React, {Component} from 'react';


/*
  This is just an input field that becomes editable when you click it
  and saves its current state with onSave (that it takes as a parameter)
  when you hit `Enter`.

  Usage in JSX:

  <Editable onSave={yourCallbackFn}/>
*/


export class Editable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editmode: false,
      value: ''
    };

    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
  }

  edit() {
    this.setState({
      editmode: true,
      value: this.props.value
    });
  }

  update(e) {
    this.setState({
      editmode: this.state.editmode,
      value: e.target.value
    });
  }

  save(e) {
    if (e.key !== 'Enter') return;
    this.props.onSave(this.state.value);
    this.setState({
      editmode: false,
      value: ''
    });
  }

  render() {
    const editor = (
      <input
        className='update-input'
        type='text'
        value={this.state.value}
        onChange={this.update}
        onKeyPress={this.save} />
    );

    const viewer = <strong onClick={this.edit}>{this.props.value}</strong>
    const v = this.state.editmode ? editor : viewer;
    return (<span>{v}</span>)
  }
};
