import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {useAppDispatch} from '@/hooks/useRedux';
import {setVisibleLoading} from '@/slices/loadingSlice';
import {useCreateCategoryMutation} from '@/api/category/categoryApi';
import {useAuthProvider} from '@/context/AuthContext';

export interface Form {
  name: string;
}

const schema = yup.object({
  name: yup.string().required('nombre  es requerido'),
});

export const useActions = () => {
  const dispatch = useAppDispatch();
  const {user} = useAuthProvider();
  const [createCategory] = useCreateCategoryMutation();
  const methods = useForm<Form>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const {control, formState, getValues, watch} = methods;
  const {errors, dirtyFields, isValid} = formState;

  const handleCreateCategory = async (
    navigation: StackNavigationProp<
      RootStackParamList,
      RootStackRoutes.ADD_CATEGORY,
      undefined
    >,
  ) => {
    dispatch(setVisibleLoading(true));
    const {name} = getValues();
    const body = {
      name,
    };
    try {
      await createCategory({
        ...body,
        userId: user?.id || 0,
      });
      await dispatch(setVisibleLoading(false));
      await navigation.pop();
    } catch (error) {
      console.log('error', error);
      dispatch(setVisibleLoading(false));
    }
  };
  return {
    control,
    errors,
    dirtyFields,
    isValid,
    getValues,
    watch,
    handleCreateCategory,
  };
};
