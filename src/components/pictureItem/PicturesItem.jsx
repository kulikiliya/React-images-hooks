import React from 'react';
import { Item, Image } from './PicturesItem.styled';
import PropTypes from 'prop-types';

export const PictureItem = ({ webformatURL, type, handleOpenModal }) => {
  return (
    <Item>
      <Image
        src={webformatURL}
        alt={type}
        onClick={() => handleOpenModal(webformatURL, type)}
      />
    </Item>
  );
};

PictureItem.propTypes = {
  webformatURL: PropTypes.string,
  type: PropTypes.string,
  handleOpenModal: PropTypes.func,
};
