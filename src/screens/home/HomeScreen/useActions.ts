import {useGetTasksQuery, useLazyGetTasksQuery} from '@/api/task/taskApi';
import {useAuthProvider} from '@/context/AuthContext';

export const useActions = () => {
  const {user} = useAuthProvider();
  const {data: dataTasks} = useGetTasksQuery(user?.id || 0);
  const [triggerTask, {isLoading: loadingTasks}] = useLazyGetTasksQuery();

  const onRefresh = async () => {
    try {
      await triggerTask(user?.id || 0);
    } catch (error) {
      console.error('Error al recargar los datos:', error);
    }
  };
  return {dataTasks, loadingTasks, triggerTask, onRefresh};
};
