import React from 'react'
import './ProgressBar.css'
import PropTypes from 'prop-types'

const ProgressBar = ({base_stat}) => {
    const base = 250;
    const percentBase = `${(base_stat * 100)/base}%`;
    return (
        <div className='base-progreso'>
            <div className='progreso' style={{width: percentBase}}></div>
        </div>
    )
}

ProgressBar.propTypes = {
    base_stat: PropTypes.number.isRequired
}

export default ProgressBar