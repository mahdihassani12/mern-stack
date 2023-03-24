import React from 'react';
import { useParams } from 'react-router-dom';

function Edit() {

  const params = useParams();

  return (
    <div>
        Edit post component { params.postid }
    </div>
  )
}

export default Edit
