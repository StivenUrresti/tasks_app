import {userEntity} from '@/api/user/entities/usersEntity';

export interface taskEntity {
  id: number;
  title: string;
  description: string;
  status: string;
  category: Category;
  user: userEntity;
}

interface Category {
  id: number;
}

export type ITaskEntityArray = taskEntity[];
