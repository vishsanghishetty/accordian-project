import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
export default function AccordionItem({ num, title, children, currOpen, onOpen }) {
    const isOpen = num === currOpen
    console.log(num,'===', currOpen, isOpen)

    function handleToggle() {
        onOpen(isOpen? null : num)
        console.log(num,'===', currOpen)
    }
    const openStyleBox = isOpen ? 'max-w-lg h-fit' : 'w-4/12 h-24'
    const borderBox = isOpen ? 'border-t-4 border-blue-400' : ''
    return (
        <div className={`${openStyleBox} ${borderBox} shadow-lg shadow-slate-200/50 p-10`} onClick={handleToggle}>
            <div className='font-bold flex flex-wrap text-center leading-relaxed'>
                <p className='text-gray-400 mr-4 mb-8'>0{num}</p>
                <div className="text-emerald-500 font-mono mr-4">{title}
                    
                    {
                        isOpen 
                            ?
                        <FontAwesomeIcon fade className='text-gray-800 font-bold cursor-pointer flex-auto ml-8 mr-4' icon={faMinus} size="sm" />
                       
                         :
                        <FontAwesomeIcon fade className='text-gray-800 font-bold cursor-pointer flex-auto ml-8 mr-4' icon={faPlus} size="sm" />
                    }
                    
                    </div>
            {isOpen ? <p className='my-2 font-normal'>{children}</p> : ''}
            </div>
        </div>
    )
}
    AccordionItem.propTypes = {
        num: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        currOpen: PropTypes.number.isRequired,
        onOpen: PropTypes.func.isRequired,
        children: PropTypes.string.isRequired
}
