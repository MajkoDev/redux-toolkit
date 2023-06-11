import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function onTitleChange(e){
        setTitle(e.target.value)
    }

    function onContentChange(e){
        setContent(e.target.value)
    }

    const handleSubmit = () => {
        // if we have title and content
        if(title && content){
            // 'dispatch' function calls 'postAdded' action
            dispatch(postAdded({
                // we take title and content from useState hooks 
                // and generate new ID
                id: nanoid(), title, content
            }))
            setTitle('')
            setContent('')
        }
    }

  return (
    <div className="container" style={{'marginTop': '40px'}}>
        <h2>Add a New Post</h2>
        <form className="container">

            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" id='postTitle' name='postTitle'
                value={title} 
                onChange={onTitleChange} />

            <label htmlFor="postContent">Content:</label>
            <textarea name="postContent" id="postContent"
                value={content} 
                onChange={onContentChange}>    
            </textarea>

            <button type='button'
                onClick={handleSubmit}>Save Post</button>
        </form>
    </div>
  )
}

export default AddPostForm