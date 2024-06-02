import {useGetTaskByIdQuery, useUpdateTaskMutation} from '@/api/task/taskApi';
import {useAuthProvider} from '@/context/AuthContext';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useEffect} from 'react';
import {useAppDispatch} from '@/hooks/useRedux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {setVisibleLoading} from '@/slices/loadingSlice';

export interface IForm {
  title: string;
  description: string;
  status: boolean;
}

const schema = yup.object({
  title: yup.string().required('title is required'),
  description: yup.string().required('description is required'),
  status: yup.boolean().required('status is required'),
});

export const useActions = (taskId: number) => {
  const {user} = useAuthProvider();
  const dispatch = useAppDispatch();
  const [updateTask] = useUpdateTaskMutation();
  const {data: DataTask} = useGetTaskByIdQuery({
    userId: user?.id as number,
    taskId,
  });
  const methods = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      status: false,
    },
    resolver: yupResolver(schema),
  });

  const {control, formState, getValues, watch, setValue} = methods;
  const {errors, dirtyFields, isValid} = formState;

  useEffect(() => {
    if (DataTask) {
      setValue('title', DataTask.title);
      setValue('description', DataTask.description);
      setValue('status', DataTask.status === 'done' ? true : false);
    }
  }, [DataTask, setValue]);

  const handleUpdateTask = async (
    navigation: StackNavigationProp<
      RootStackParamList,
      RootStackRoutes.TASK_DETAIL,
      undefined
    >,
  ) => {
    dispatch(setVisibleLoading(true));
    const {title, description, status} = getValues();
    const body = {
      title,
      description,
      status: status ? 'done' : 'not_done',
    };
    try {
      await updateTask({
        ...body,
        userId: user?.id || 0,
        taskId,
      });
      await dispatch(setVisibleLoading(false));
      await navigation.pop();
    } catch (error) {
      console.log('error', error);
      dispatch(setVisibleLoading(false));
    }
  };

  return {
    DataTask,
    control,
    errors,
    dirtyFields,
    isValid,
    getValues,
    watch,
    setValue,
    handleUpdateTask,
  };
};
