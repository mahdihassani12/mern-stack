import React from 'react'

function Create() {
  return (
    <div className="app-container">
      <h1>Add a new post</h1>
      <form>

        <div className='form-group'>
            <label htmlFor="title">Post title</label>
            <input 
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Post title"
            />
        </div>

        <div className='form-group'>
            <label htmlFor="description">Post description</label>
            <textarea className="form-control" 
                      name="description"
                      id="description"
                      placeholder="Post description"></textarea>
        </div>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Create
