import React from 'react'

const Form = ({ type, post, setPost, handleSubmit }) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <textarea 
                className='form_textarea'
                value={post.prompt}
            >
            </textarea>
        </section>
    )
}

export default Form
