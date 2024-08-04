import React from 'react'
import './Chip.css'
import PropTypes from 'prop-types'

const Chip = ({label}) => {
    return (
        <div className='chip-container'>
            <span className='text-chip'>{label}</span>
        </div>
    )
}

Chip.propTypes = {
    label: PropTypes.string.isRequired
}

export default Chip