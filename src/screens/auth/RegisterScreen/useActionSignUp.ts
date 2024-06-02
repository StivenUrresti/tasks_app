import {useCreateUserMutation} from '@/api/user/usersApi';
import {yupResolver} from '@hookform/resolvers/yup';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

export interface IForm {
  email: string;
  password: string;
  username: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export const useActionSignUp = () => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [handleCreateUser] = useCreateUserMutation();

  const {control, formState, getValues} = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const toggleModalSuccess = () => setModalSuccess(!modalSuccess);
  const toggleModalError = () => setModalError(!modalError);

  const handleSignUp = async () => {
    const {email, username, password} = getValues();
    try {
      const response = await handleCreateUser({
        email,
        username,
        password,
      }).unwrap();
      console.log('response', response);
      if (response.id) {
        console.log('entro en success');
        setModalSuccess(true);
      } else {
        console.log('entro en error ');
        setModalError(true);
      }
    } catch (error) {
      console.log('error del catch');
      setModalError(true);
    } finally {
    }
  };

  const {errors, dirtyFields, isValid} = formState;
  return {
    control,
    errors,
    dirtyFields,
    isValid,
    modalError,
    modalSuccess,
    toggleModalSuccess,
    toggleModalError,
    handleSignUp,
  };
};
