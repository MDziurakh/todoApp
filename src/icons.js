import {useState} from "react";

export const XCircle = () => {
    const [iColor, setIColor] = useState('gray');
    const toActive = () => {
        setIColor('red')
    }
    const toBlur = () => {
        setIColor('gray')
    }

    return (
        <svg onMouseOver={() => toActive()} onMouseLeave={() => toBlur()} className="w-6 h-6" fill="none"
             stroke={iColor} viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    )
}

export const DoneIcon = ({done}) => {

    const initialState = done ? 'green' : 'gray'
    const [iColor, setIColor] = useState(initialState);

    const toggleColor = () => {
        iColor === 'gray' ? setIColor("green") : setIColor("gray")
    }

    return (

        <svg onClick={() => toggleColor()} className="w-6 h-6" fill="none" stroke={iColor} viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    )
}


export const AddIcon = ({handleSubmit}) =>{
    return(
        <svg onClick={(e)=>handleSubmit(e)} className="w-6 h-6 inside-input" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
    )
}