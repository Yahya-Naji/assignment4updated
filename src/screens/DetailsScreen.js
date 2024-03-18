import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NotesContext } from '../context/NotesContext';

export default function DetailsScreen({ route }) {
  const [noteContent, setNoteContent] = useState('');
  const { addNote } = useContext(NotesContext);
  const { noteId } = route.params || {};

  return (
    <View>
      <TextInput
        value={noteContent}
        onChangeText={setNoteContent}
        placeholder="Type your note here..."
      />
      <Button title="Save Note" onPress={() => addNote({ id: noteId, content: noteContent })} />
    </View>
  );
}
