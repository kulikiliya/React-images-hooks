import React, { Component } from 'react';
import { ModalOverlay, ModalDiv } from './Modal.Styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  onBackDropClick = e => {
    if (e.currentTarget === e.target || e.key === 'Escape') {
      this.props.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape' && this.props.isOpen) {
      this.props.close();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <ModalOverlay className="overlay" onClick={this.onBackDropClick}>
        <ModalDiv className="modal">{this.props.children}</ModalDiv>
      </ModalOverlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
};
