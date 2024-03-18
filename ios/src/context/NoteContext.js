import React, { createContext, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      // Find and update existing note, or add a new one
      const index = prevNotes.findIndex((n) => n.id === note.id);
      if (index !== -1) {
        const newNotes = [...prevNotes];
        newNotes[index] = note;
        return newNotes;
      }
      return [...prevNotes, { ...note, id: Date.now() }];
    });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};
