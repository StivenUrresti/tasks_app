import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {TabsHomeParamList} from './tabsRoutes';

export enum RootStackRoutes {
  WELCOME = 'WELCOME',
  TABS_HOME = 'TABS_HOME',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export type RootStackParamList = {
  [RootStackRoutes.WELCOME]: undefined;
  [RootStackRoutes.TABS_HOME]: NavigatorScreenParams<TabsHomeParamList>;
  [RootStackRoutes.LOGIN]: undefined;
  [RootStackRoutes.REGISTER]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
