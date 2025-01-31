import { useState, useRef, useEffect } from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 24},
    {name: 'Michael', age: 35}
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [persons,setPersons] = useState<{name: string,age: number} | undefined>()

    const handleClick = () => {
        let peopleList = users.find((user) => user.name == name)
       setPersons(peopleList)
    }

    useEffect(() => {
        if(!inputRef.current) return
        inputRef.current?.focus()
    },[])

   return <div>
    User Search
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={handleClick} >Find User</button>
    <ul>
        <li>{persons && persons.name}</li>
        <li>{persons?.age}</li>
    </ul>
   </div>
}

export default UserSearch;