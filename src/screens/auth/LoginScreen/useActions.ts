import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {useState} from 'react';
export interface IFormLoginEmail {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('Please enter a username'),
  password: yup.string().required('Please enter a password'),
});

export const useActions = () => {
  const [showPassWord, setShowPassWord] = useState(false);

  const {control, formState} = useForm<IFormLoginEmail>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const {isValid, dirtyFields, errors} = formState;

  const toggleShowPassword = () => setShowPassWord(!showPassWord);

  return {
    control,
    isValid,
    dirtyFields,
    errors,
    showPassWord,
    toggleShowPassword,
  };
};
