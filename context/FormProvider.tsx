import { FC, useReducer } from 'react';
import { FormState, Position } from '../interfaces/Form';
import { FormContext } from './FormContext';
import { FormReducer } from './FormReducer';

interface Props {
  children: JSX.Element;
}

const INITIAL_STATE: FormState = {
  size: 250,
  radius: 25,
  distance: 35,
  intensity: 14,
  blur: 20,
  background: '#fafafa',
  shape: 'left',
  colors: {
    first: '#c3c3c3',
    second: '#ffffff',
  },
  position: {
    top: '',
    right: '-',
    left: '',
    bottom: '-',
  },
};

export const FormProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const modifyForm = (state: FormState) => {
    dispatch({
      type: 'Form -  Modify Form State',
      formState: state,
    });
  };

  const modifyPosition = (position: Position) => {
    dispatch({
      type: 'Form -  Modify Position',
      position,
    });
  };

  return (
    <FormContext.Provider value={{ state, modifyForm, modifyPosition }}>
      {children}
    </FormContext.Provider>
  );
};
