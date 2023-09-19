import React from 'react';
import { PictureItem } from '../pictureItem/PicturesItem';
import { ListWrapper } from './PictureList.styled';
import PropTypes from 'prop-types';

export const PictureList = ({ data = [], handleOpenModal }) => {
  return (
    <ListWrapper>
      {data.map(picture => {
        return (
          <PictureItem
            {...picture}
            key={picture.id}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </ListWrapper>
  );
};

PictureList.propTypes = {
  handleOpenModal: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string),
};
