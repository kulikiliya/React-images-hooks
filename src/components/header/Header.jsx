import React, { Component } from 'react';
import {
  HeaderWrapper,
  HeaderForm,
  InputFiled,
  ButtonLable,
  Button,
} from './Header.styled';
import PropTypes from 'prop-types';

export class Header extends Component {
  state = {
    name: '',
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    this.props.newQuerry(this.state.name);
  };

  render() {
    return (
      <HeaderWrapper>
        <HeaderForm onSubmit={this.handleSubmit}>
          <Button>
            <ButtonLable>Search</ButtonLable>
          </Button>

          <InputFiled
            onChange={this.handleInput}
            className="input"
            value={this.state.name}
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </HeaderForm>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  newQuerry: PropTypes.func,
};
