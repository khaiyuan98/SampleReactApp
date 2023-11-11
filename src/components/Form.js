import {useState} from 'react';

export const Form = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form data is ${username}, ${description}, ${country}`);
    }
    
    
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)}></input>
        </div>
        <div>
            <label>Description</label>
            <input type="text" 
            value={description} 
            onChange={(event) => setDescription(event.target.value)}></input>
        </div>
            <div>
            <label>Country</label>
            <select type="text" 
            value={country} 
            onChange={(event) => setCountry(event.target.value)}>
                <option>None</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
            </select>
        </div>
        <button type="submit">Submit</button>
    </form>
}