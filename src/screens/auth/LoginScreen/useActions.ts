import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {useState} from 'react';
import {useLazyVerifyUserQuery} from '@/api/user/usersApi';
import {useAuthProvider} from '@/context/AuthContext';
import {Alert} from 'react-native';
import {useAppDispatch} from '@/hooks/useRedux';
import {setVisibleLoading} from '@/slices/loadingSlice';
export interface IFormLoginEmail {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Please enter a password'),
});

export const useActions = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const {saveDataUser, checkUserIsAuth} = useAuthProvider();
  const [triggerValidateUser] = useLazyVerifyUserQuery();
  const dispatch = useAppDispatch();

  const {control, formState, getValues} = useForm<IFormLoginEmail>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const {isValid, dirtyFields, errors} = formState;
  const toggleShowPassword = () => setShowPassWord(!showPassWord);

  const handleSingIn = async () => {
    const {email, password} = getValues();
    dispatch(setVisibleLoading(true));
    try {
      const result = await triggerValidateUser({
        email,
        password,
      }).unwrap();
      await saveDataUser(result);
      await checkUserIsAuth();
      await dispatch(setVisibleLoading(false));
    } catch (error) {
      Alert.alert('Error', 'Invalid username or password');
      dispatch(setVisibleLoading(false));
    }
  };

  return {
    control,
    isValid,
    dirtyFields,
    errors,
    showPassWord,
    toggleShowPassword,
    handleSingIn,
  };
};
