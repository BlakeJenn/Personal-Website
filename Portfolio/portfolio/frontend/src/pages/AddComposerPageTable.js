import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddComposerPageTable = () => {

    const [composer, setComposer]       = useState('');
    const [birthyear, setBirthyear]     = useState('');
    const [era, setEra]                 = useState('');
    
    const redirect = useNavigate();

    const addComposer = async () => {
        const newComposer = { composer, birthyear, era };
        const response = await fetch('/composers', {
            method: 'post',
            body: JSON.stringify(newComposer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You successfully added a composer!`);
        } else {
            alert(`Unable to add composer. = ${response.status}`);
        }
        redirect("/composers");
    };

    return (
        <>
        <article>
            <h2>Add a composer</h2>
            <p>Please input the composer's last name, year they were born, and musical era their compositions are associated with.</p>
            
            <table id="composers">
                <caption>Which composer are you adding?</caption>
                <thead>
                    <tr>
                        <th>Composer</th>
                        <th>Birth Date</th>
                        <th>Era</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="composer">Name of Composer</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={composer}
                            onChange={e => setComposer(e.target.value)} 
                            id="composer" />
                    </td>

                    <td><label for="birthyear">Birth Year</label>
                        <input
                            type="date"
                            value={birthyear}
                            placeholder="Year"
                            onChange={e => setBirthyear(e.target.value)} 
                            id="birthyear" />
                    </td>

                    <td><label for="era">Number of Compositions</label>
                        <input
                            type="number"
                            placeholder="Number"
                            value={era}
                            onChange={e => setEra(e.target.value)} 
                            id="era" />
                    </td>
                    </tr>
                </tbody>
            </table>
            <label for="submit">Commit</label>
                    <button
                            type="submit"
                            onClick={addComposer}
                            id="submit"
                        >Add</button>
        </article>
    </>
);
}

export default AddComposerPageTable;