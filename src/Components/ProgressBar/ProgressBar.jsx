import React from 'react'
import './ProgressBar.scss'
import PropTypes from 'prop-types'

const ProgressBar = ({base_stat, color}) => {
    const base = 250;
    const percentBase = `${(base_stat * 100)/base}%`;
    return (
        <div className='base-progreso'>
            <div className={`progreso ${color}`} style={{width: percentBase}}></div>
        </div>
    )
}

ProgressBar.propTypes = {
    base_stat: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default ProgressBar