import React from 'react';
import ApiPokemon from '../../Services/ApiPokemon';
import './Home.scss';
import buttonLoad from '../../assets/loading-spokes.svg';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Loading from '../../Components/Loading/Loading';
import Chip from '../../Components/Chip/Chip';

const Home = () => {
    const { data, loading, loadMorePokemons } = ApiPokemon('pokemon');

    const formatNumber = (id) => `#${id.toString().padStart(3, '0')}`;

    return(
        <div className='container-pokemon'>
            <div className={loading ? 'row-body': 'hidden'}>
                {loading && <Loading />}
            </div>
            <span className='title-pokemon'>POKEDEX</span>
            <div className='lista-pokemon'>
                {data.pokemons?.length ? data.pokemons.map(item => {
                    return(
                        <div className={`tarjeta-pokemon tarjeta-pokemon-${item.specie.color.name}`} key={item.id}>
                            <div className='dato-pokemon'>
                                <span className='pokemon-name'>
                                    { item.name }
                                </span>
                                <span className='pokemon-number'>{formatNumber(item.id)}</span>
                            </div>
                            <img src={item.sprites.other.home.front_default} alt={ item.name } className='pokemon-img' />
                            <div className='detalle-pokemon'>
                                {item.types?.length ? item.types.map((it, idx) => {
                                    return(
                                        <Chip key={idx} label={it.type.name} color={item.specie.color.name} />
                                    )
                                }) : null}
                            </div>
                            <div className='detalle-pokemon'>
                            <div className='item-detalle'>
                                    <span className='item-titulo'>{item.base_experience}</span>
                                    <span className='item-subtitulo'>experience</span>
                                </div>
                                <div className='item-detalle'>
                                    <span className='item-titulo'>{item.weight / 10} Kg</span>
                                    <span className='item-subtitulo'>weight</span>
                                </div>
                                <div className='item-detalle'>
                                    <span className='item-titulo'>{item.height / 10} m</span>
                                    <span className='item-subtitulo'>height</span>
                                </div>
                            </div>
                            <div className='item-stats'>
                                {item.stats?.length ? item.stats.map((it, idx) => {
                                    return(
                                        <div className='detail-stat' key={idx}>
                                            <span className='item-detail-stat-name'>{it.stat.name}</span>
                                            <span className='item-detail-stat'>{it.base_stat}</span>
                                            <ProgressBar base_stat={it.base_stat} color={item.specie.color.name}/>
                                        </div>
                                    )
                                }) : null}
                            </div>
                        </div>
                    )
                }) : null}
            </div>
            <div className='load-more'>
                <button className='button-pokemon' onClick={loadMorePokemons} disabled={loading}>
                    {loading && <img className='button-loading' src={buttonLoad} alt="" />}
                    {!loading && <span>LISTAR MAS POKEMONS</span>}
                </button>
            </div>
        </div>
    );
};

export default Home;
