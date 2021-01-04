import { useState } from 'react';

export const useHeader = (filter) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ value, setValue ] = useState('')
    
    const toggleMenu = () => setIsOpen(!isOpen)
    
    const changeHandler = (e) => {
        let value = e.target.value
        
        setValue(value)
        filter(value)
    }

    return { isOpen, value, toggleMenu, changeHandler }
}