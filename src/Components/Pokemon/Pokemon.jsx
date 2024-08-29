import React from 'react';
import Chip from '../Chip/Chip';
import ProgressBar from '../ProgressBar/ProgressBar';
import PropTypes from 'prop-types'

import './Pokemon.scss'

const Pokemon = ({pokemon}) => {
    const formatNumber = (id) => `#${id.toString().padStart(3, '0')}`;

    return(
        <div className={`tarjeta-pokemon tarjeta-pokemon-${pokemon.specie.color.name}`} key={pokemon.id}>
            <div className='dato-pokemon'>
                <span className='pokemon-name'>
                    { pokemon.name }
                </span>
                <span className='pokemon-number'>{formatNumber(pokemon.id)}</span>
            </div>
            <img src={pokemon.sprites.other.home.front_default} alt={ pokemon.name } className='pokemon-img' />
            <div className='detalle-pokemon'>
                {pokemon.types?.length ? pokemon.types.map((it, idx) => {
                    return(
                        <Chip key={idx} label={it.type.name} color={pokemon.specie.color.name} />
                    )
                }) : null}
            </div>
            <div className='detalle-pokemon'>
                <div className='item-detalle'>
                    <span className='item-titulo'>{pokemon.base_experience}</span>
                    <span className='item-subtitulo'>experience</span>
                </div>
                <div className='item-detalle'>
                    <span className='item-titulo'>{pokemon.weight / 10} Kg</span>
                    <span className='item-subtitulo'>weight</span>
                </div>
                <div className='item-detalle'>
                    <span className='item-titulo'>{pokemon.height / 10} m</span>
                    <span className='item-subtitulo'>height</span>
                </div>
            </div>
            <div className='item-stats'>
                {pokemon.stats?.length ? pokemon.stats.map((it, idx) => {
                    return(
                        <div className='detail-stat' key={idx}>
                            <span className='item-detail-stat-name'>{it.stat.name}</span>
                            <span className='item-detail-stat'>{it.base_stat}</span>
                            <ProgressBar base_stat={it.base_stat} color={pokemon.specie.color.name}/>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

Pokemon.propType = {
    pokemon: PropTypes.object.isRequired
}

export default Pokemon;