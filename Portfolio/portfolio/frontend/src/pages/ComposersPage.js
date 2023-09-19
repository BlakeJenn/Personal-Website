import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ComposerList from '../components/ComposerList';
import { GiMusicalScore } from 'react-icons/gi';

function ComposersPage({ setComposer }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [composers, setComposers] = useState([]);

    // RETRIEVE the entire list of composers
    const loadComposers = async () => {
        const response = await fetch('/composers');
        const composers = await response.json();
        setComposers(composers);
    } 
    

    // UPDATE a single composer
    const onEditComposer = async composer => {
        setComposer(composer);
        redirect("/update");
    }


    // DELETE a single composer  
    const onDeleteComposer = async _id => {
        const response = await fetch(`/composers/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/composers');
            const composers = await getResponse.json();
            setComposers(composers);
        } else {
            console.error(`Composer has not been deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the composers
    useEffect(() => {
        loadComposers();
    }, []);

    // DISPLAY the composers
    return (
        <>
            <h2><GiMusicalScore size={40}/>List of composers</h2>
            <article>
            <p>A list of composers, when they were born, and how many works they composed.</p>
            <ComposerList 
                composers={composers} 
                onEdit={onEditComposer} 
                onDelete={onDeleteComposer} 
            />
            </article>
        </>
    );
}

export default ComposersPage;