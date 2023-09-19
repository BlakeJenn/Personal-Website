import React from 'react';
import Composer from './Composer';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdMusicOff, MdEdit } from 'react-icons/md';
import { PiMusicNotesPlusFill } from 'react-icons/pi';


// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ComposerList({ composers, onDelete, onEdit }) {
    return (
        <table id="composers">
            <caption><AiOutlineUserAdd size={15}/>Add, <MdMusicOff size={15}/>Delete, or <PiMusicNotesPlusFill size={15}/>Edit Composers</caption>
            <thead>
                <tr>
                    <th>Composer</th>
                    <th>Birth Date</th>
                    <th>Compositions</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="/create"><AiOutlineUserAdd size={20}/>Add</Link> </th>
                </tr>
            </thead>
            <tbody>
                {composers.map((composer, i) => 
                    <Composer 
                        composer={composer} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ComposerList;
