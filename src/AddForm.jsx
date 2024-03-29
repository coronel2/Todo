
import React, { useState,  } from 'react';
import { Button, Alert, AlertIcon} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
   
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">

 
  <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
    <Button type = "submit" leftIcon={<AddIcon />} colorScheme='pink' variant='solid'>
    Agregar
  </Button>

      
    

    </form>
  );
};

export default AddTaskForm;