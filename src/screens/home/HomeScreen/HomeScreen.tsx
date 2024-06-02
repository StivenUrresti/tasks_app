import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useActions} from './useActions';
import {theme} from '@/theme/theme';
import {View} from 'react-native-ui-lib';
import {taskEntity} from '@/api/task/entities/taskEntity';
import {RenderItem} from './RenderItem';
import {Accordion} from '@/components';
import {TabsHomeRoutes, TabsHomeScreenProps} from '@/types/tabsRoutes';
import {RootStackRoutes} from '@/types/stackRoutes';

export const HomeScreen = (props: TabsHomeScreenProps<TabsHomeRoutes.HOME>) => {
  const {navigation} = props;
  const {dataTasks, loadingTasks, onRefresh} = useActions();
  const [resetAccordion, setResetAccordion] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setResetAccordion(false);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setResetAccordion(true);
    });

    return () => {
      unsubscribe();
      unsubscribeBlur();
    };
  }, [navigation]);

  const renderItem = ({item}: {item: taskEntity}) => {
    return <RenderItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Accordion reset={resetAccordion}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(RootStackRoutes.ADD_TASK)}>
            <Text style={styles.buttonText}>Tarea</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(RootStackRoutes.ADD_CATEGORY)}>
            <Text style={styles.buttonText}>Categoría</Text>
          </TouchableOpacity>
        </Accordion>
        <Text style={styles.title}>Listado de tareas</Text>

        <View style={styles.listContainer}>
          <FlatList
            data={dataTasks || []}
            keyExtractor={(item: taskEntity) => item.id.toString()}
            renderItem={renderItem}
            refreshing={loadingTasks}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View marginB-80 />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: theme.PRIMARY_DARK_COLOR,
    marginVertical: 10,
  },
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
  listContainer: {
    flex: 1,
  },
});
