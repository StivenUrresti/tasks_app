import {useGetTasksQuery} from '@/api/task/taskApi';
import {useAuthProvider} from '@/context/AuthContext';

export const useActions = () => {
  const {user} = useAuthProvider();
  const {data: dataTasks} = useGetTasksQuery(user?.id || 0);
  return {dataTasks};
};
