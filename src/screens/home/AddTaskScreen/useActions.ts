import {useGetCategoryQuery} from '@/api/category/categoryApi';
import {useAuthProvider} from '@/context/AuthContext';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCreateTaskMutation} from '@/api/task/taskApi';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {useAppDispatch} from '@/hooks/useRedux';
import {setVisibleLoading} from '@/slices/loadingSlice';

export interface IForm {
  title: string;
  description: string;
  categoryId?: string;
}

const schema = yup.object({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  categoryId: yup.string(),
});

export const useActions = () => {
  const {user} = useAuthProvider();
  const {data: dataCategories} = useGetCategoryQuery(user?.id || 0);
  const [createTask] = useCreateTaskMutation();
  const dispatch = useAppDispatch();

  const methods = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const {control, formState, getValues, watch} = methods;
  const {errors, dirtyFields, isValid} = formState;

  const handleCreateTask = async (
    navigation: StackNavigationProp<
      RootStackParamList,
      RootStackRoutes.ADD_TASK,
      undefined
    >,
  ) => {
    dispatch(setVisibleLoading(true));
    const {title, description, categoryId} = getValues();
    const body = {
      title,
      description,
    };
    try {
      await createTask({
        ...body,
        userId: user?.id || 0,
        categoryId: categoryId as unknown as number,
      });
      await dispatch(setVisibleLoading(false));
      await navigation.pop();
    } catch (error) {
      console.log('error', error);
      dispatch(setVisibleLoading(false));
    }
  };

  return {
    dataCategories,
    control,
    errors,
    dirtyFields,
    isValid,
    getValues,
    watch,
    handleCreateTask,
  };
};
