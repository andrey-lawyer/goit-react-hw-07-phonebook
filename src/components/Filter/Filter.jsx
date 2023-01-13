import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import { filterContact } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/selectFilter';

import { FieldInput, InputFind } from './Filter.styled';

const idUser = nanoid();

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FieldInput>
      <label htmlFor={idUser}>Find contacts by name</label>
      <InputFind
        id={idUser}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </FieldInput>
  );
};

export default Filter;
