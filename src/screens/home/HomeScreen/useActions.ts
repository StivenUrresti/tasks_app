import {ITaskEntityArray} from '@/api/task/entities/taskEntity';
import {useLazyGetTasksQuery} from '@/api/task/taskApi';
import {useAuthProvider} from '@/context/AuthContext';
import {useEffect, useState} from 'react';

export const useActions = () => {
  const {user} = useAuthProvider();
  const [triggerTask, {isLoading: loadingTasks}] = useLazyGetTasksQuery();
  const [dataTask, setDataTask] = useState<ITaskEntityArray | undefined>([]);

  const onRefresh = async () => {
    try {
      await triggerTask(user?.id || 0);
    } catch (error) {
      console.error('Error al recargar los datos:', error);
    }
  };
  const onRefreshCategory = async () => {
    try {
      await triggerTask(user?.id || 0);
    } catch (error) {
      console.error('Error al recargar los datos:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const {data: dataTasks} = await triggerTask(user?.id || 0);
        setDataTask(dataTasks);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
    fetchData();
  }, [triggerTask, user?.id]);

  return {
    dataTask,
    loadingTasks,
    triggerTask,
    onRefresh,
    onRefreshCategory,
  };
};
