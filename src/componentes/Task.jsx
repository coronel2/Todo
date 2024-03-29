import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, AddIcon } from "@chakra-ui/icons";

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.name);
 
  const handleEdit = () => {
    editTask(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span className={task.completed ? "completed" : ""}>{task.name}</span>

          <Button
            onClick={() => setIsEditing(true)}
            leftIcon={<EditIcon />}
            colorScheme="pink"
            variant="solid"
            color="white"
          >Editar</Button>
          <Button
            onClick={() => deleteTask(task.id)}
            leftIcon={<DeleteIcon />}
            colorScheme="pink"
            variant="solid"
            color="white"
          >Eliminar</Button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
         
            <Button onClick={handleEdit} type = "submit" leftIcon={<AddIcon />} colorScheme='pink' variant='solid'>
    Guardar
  </Button>
        </>
      )}
    </div>
  );
};

export default Task;
