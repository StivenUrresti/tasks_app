import {PlusIcon, XIcon} from '@/assets/svg';
import {theme} from '@/theme/theme';
import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

export const Accordion = ({
  children,
  reset,
}: {
  children: React.ReactNode;
  reset: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpansion = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (reset) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setExpanded(false);
    }
  }, [reset, animation]);

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={toggleExpansion} style={styles.titleContainer}>
        {expanded ? <XIcon size={40} /> : <PlusIcon height={40} width={40} />}
      </TouchableOpacity>
      <Animated.View style={[styles.contentContainer, {height: contentHeight}]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionItem: {
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  titleContainer: {
    padding: 10,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  accordionTitle: {
    fontSize: 18,
  },
  contentContainer: {
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.SECONDARY_TEXT_COLOR,
    fontSize: 16,
  },
});
