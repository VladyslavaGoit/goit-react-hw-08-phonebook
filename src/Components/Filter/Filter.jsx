import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Label } from './Filter.styled';
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </Label>
  );
};

export default Filter;
