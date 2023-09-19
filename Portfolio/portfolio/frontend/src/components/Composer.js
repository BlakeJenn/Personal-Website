import React from 'react';
import { IoMdMusicalNote } from 'react-icons/io';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdMusicOff, MdEdit } from 'react-icons/md';
import { PiMusicNotesPlusFill } from 'react-icons/pi';


function ComposerRow({ composer, onEdit, onDelete }) {
    return (
        <tr>
            <td><IoMdMusicalNote size={25}/>{composer.composer}</td>
            <td>{composer.birthyear.slice(0,10)}</td>
            <td>{composer.era}</td>
            <td><MdMusicOff size={25}onClick={() => onDelete(composer._id)} /></td>
            <td><PiMusicNotesPlusFill size={25} onClick={() => onEdit(composer)} /></td>
            <td></td>
        </tr>
    );
}

export default ComposerRow;