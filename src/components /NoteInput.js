import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NotesContext } from '../context/NotesContext';

export default function NoteInput({ existingNote }) {
  const [content, setContent] = useState(existingNote ? existingNote.content : '');
  const { addNote } = useContext(NotesContext);

  const handleSave = () => {
    const note = {
      id: existingNote ? existingNote.id : Date.now().toString(),
      content: content.trim()
    };
    addNote(note);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Write your note here..."
        multiline
        numberOfLines={4}
      />
      <Button title="Save Note" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4
  }
});
