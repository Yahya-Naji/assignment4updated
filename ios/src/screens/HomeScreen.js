import React, { useContext } from 'react';
import { View, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NotesContext } from '../context/NotesContext';
import Note from '../components/Note';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { notes } = useContext(NotesContext);

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Note
            id={item.id}
            content={item.content}
            onPress={() => navigation.navigate('Details', { noteId: item.id })}
          />
        )}
      />
      <Button title="Add Note" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
