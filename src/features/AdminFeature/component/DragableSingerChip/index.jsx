import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
DragableSingerChip.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  handleAddSinger: PropTypes.func,
};

function DragableSingerChip(props) {
  const { item, index, handleAddSinger } = props;

  return (
    <Draggable index={index} draggableId={`${item._id}`}>
      {(provided) => (
        <Chip
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          color="info"
          onDelete={() => handleAddSinger(item)}
          deleteIcon={<Add />}
          sx={{ ml: 1, mt: 1, float: 'left' }}
          avatar={
            <Avatar
              alt={item.artist_name}
              src={`http://localhost:5000/images/artist/${item.artist_image}`}
            />
          }
          label={item.artist_name}
        />
      )}
    </Draggable>
  );
}

export default DragableSingerChip;
