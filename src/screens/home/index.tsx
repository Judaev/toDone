import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheet,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import TodoItem from '../../components/TodoItem/TodoItem';

function HomeScreen() {
  const [isOpen, setOpen] = useState(false);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    if (isOpen) {
      setOpen(false);
      return bottomSheetModalRef.current?.close();
    }
    setOpen(true);
    return bottomSheetModalRef.current?.present();
  }, [isOpen]);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={{flex: 1}}>
      <BottomSheetModalProvider>
        <View style={{width: '100%', height: 20}} />
        <TodoItem title="Task" />
        <TodoItem title="To do" />
        <TodoItem title="Meet" />

        <Button
          onPress={handlePresentModalPress}
          title="Add todo"
          color="black"
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'blue'}}>Add new task!</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}

const styleSheet = () =>
  StyleSheet.create({
    root: {
      backgroundColor: 'white',
    },
  });

export default HomeScreen;
