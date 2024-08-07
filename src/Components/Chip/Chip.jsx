import React from 'react'
import './Chip.scss'
import PropTypes from 'prop-types'

const Chip = ({label, color}) => {
    return (
        <div className={`chip-container ${color}`}>
            <span className='text-chip'>{label}</span>
        </div>
    )
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Chip