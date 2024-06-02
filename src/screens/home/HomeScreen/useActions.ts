/* eslint-disable react-hooks/exhaustive-deps */
import {useGetTasksQuery} from '@/api/task/taskApi';
import {useAuthProvider} from '@/context/AuthContext';
import {useEffect} from 'react';

export const useActions = () => {
  const {user} = useAuthProvider();
  const {data: dataTasks} = useGetTasksQuery(user?.id || 0);
  useEffect(() => {
    if (dataTasks && dataTasks.length > 0) {
      console.log('dataTasks', dataTasks);
    }
  }, [user?.id]);
  return {dataTasks};
};
