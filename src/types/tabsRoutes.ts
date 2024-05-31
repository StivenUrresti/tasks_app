import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList, RootStackScreenProps} from '@/types/stackRoutes';

export enum TabsHomeRoutes {
  EXPLORER = 'EXPLORER',
  PROFILE = 'PROFILE',
  SCHEDULE = 'SCHEDULE',
}

export type TabsHomeParamList = {
  [TabsHomeRoutes.EXPLORER]: undefined;
  [TabsHomeRoutes.PROFILE]: undefined;
  [TabsHomeRoutes.SCHEDULE]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabsHomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsHomeParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
