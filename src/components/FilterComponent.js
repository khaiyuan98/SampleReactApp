import NAMES from './data.json';
import {useState, useTransition} from 'react';

export const FilterComponent = () => {
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition();

    const changeHandler = (event) => {
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value))
    }

    const filteredNames = NAMES.filter(item => item.first_name.includes(query) || item.last_name.includes(query))

    return <div>
        <input type="input" value={inputValue} onChange={changeHandler}></input>
        {isPending && <p>Updating list...</p>}
        {
            filteredNames.map((item) => 
            <p key={item.id}>{item.first_name} {item.last_name}</p>
            )
        }
    </div>
}