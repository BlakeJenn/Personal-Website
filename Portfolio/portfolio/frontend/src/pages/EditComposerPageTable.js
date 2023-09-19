import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditComposerPageTable = ({ composerToEdit }) => {
 
    const [composer, setComposer]       = useState(composerToEdit.composer);
    const [birthyear, setBirthyear]     = useState(composerToEdit.birthyear.slice(0,10));
    const [era, setEra]                 = useState(composerToEdit.era);
    
    const redirect = useNavigate();

    const editComposer = async () => {
        const response = await fetch(`/composers/${composerToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                composer: composer, 
                birthyear: birthyear, 
                era: era
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You successfully edited the composer!`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to edit the composer. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/composers");
    }

    return (
        <>
        <article>
            <h2>Edit a composer</h2>
            <p>Change one or more of the details of this composer.</p>
            <table id="composers">
                <caption>What would you like to change?</caption>
                <thead>
                    <tr>
                        <th>Composer</th>
                        <th>Birth Year</th>
                        <th>Era</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="composer">Name of Composer</label>
                        <input
                            type="text"
                            placeholder="Name"
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
                            onClick={editComposer}
                            id="submit"
                        >Edit</button>
            </article>
        </>
    );
}
export default EditComposerPageTable;