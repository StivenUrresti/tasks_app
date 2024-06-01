import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {TabsHomeRoutes} from '@/types/tabsRoutes';
import {
  HomeFilledIcon,
  HomeOutlinedIcon,
  UserFilledIcon,
  UserOutlinedIcon,
} from '@/assets/svg';
import {theme} from '@/theme/theme';

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  const getIcon = (key: string, isFocused: boolean) => {
    switch (key) {
      case TabsHomeRoutes.HOME:
        return isFocused ? (
          <HomeFilledIcon color={theme.PRIMARY_COLOR} />
        ) : (
          <HomeOutlinedIcon color={theme.SECONDARY_COLOR} />
        );
      case TabsHomeRoutes.PROFILE:
        return isFocused ? (
          <UserFilledIcon color={theme.PRIMARY_COLOR} />
        ) : (
          <UserOutlinedIcon color={theme.SECONDARY_COLOR} />
        );
      default:
        return isFocused ? (
          <UserFilledIcon color={theme.PRIMARY_COLOR} />
        ) : (
          <UserOutlinedIcon color={theme.SECONDARY_COLOR} />
        );
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
            key={index}>
            {getIcon(route?.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: theme.WHITE,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 32 : 16,
    elevation: 3,
    borderRadius: 34,
    shadowColor: '#00000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: 'row',
    height: 68,
    width: '50%',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
