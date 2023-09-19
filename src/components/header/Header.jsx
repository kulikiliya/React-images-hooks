import { useState } from 'react';
import {
  HeaderWrapper,
  HeaderForm,
  InputFiled,
  ButtonLable,
  Button,
} from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ newQuerry }) => {
  const [name, setName] = useState('');

  const handleInput = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    newQuerry(name);
  };

  return (
    <HeaderWrapper>
      <HeaderForm onSubmit={handleSubmit}>
        <Button>
          <ButtonLable>Search</ButtonLable>
        </Button>

        <InputFiled
          onChange={handleInput}
          className="input"
          value={name}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </HeaderForm>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  newQuerry: PropTypes.func,
};
