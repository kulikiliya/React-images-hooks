import React from 'react';
import { AddButton } from './AddMoreButton.styled';
import PropTypes from 'prop-types';

export const AddMoreButton = ({ loadMore }) => {
  return <AddButton onClick={loadMore}>Load More</AddButton>;
};

AddMoreButton.propTypes = {
  loadMore: PropTypes.func,
};
