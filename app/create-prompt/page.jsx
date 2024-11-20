'use client'
import React from "react";
import { useState } from "react";
import Form from '@components/Form'

const CreatePrompt = () => {

    const [post, setPost] = useState({ prompt:'', tag:'' })

    const createPrompt = async (e) => {
        e.preventDefault();
        console.log(`Create Prompt ${post} calling api`)
    }

    return (
        <Form 
            type='Create'
            post={post}
            setPost={setPost}
            handleSubmit={createPrompt}
        />
    );
};

export default CreatePrompt;
