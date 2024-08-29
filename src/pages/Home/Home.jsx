import React from 'react';
import ApiPokemon from '../../services/ApiPokemon';
import './Home.scss';
import buttonLoad from '../../assets/loading-spokes.svg';
import Loading from '../../components/Loading/Loading';
import Pokemon from '../../components/Pokemon/Pokemon';

const Home = () => {
    const { data, loading, loadMorePokemons } = ApiPokemon('pokemon');

    return(
        <div className='container-pokemon'>
            <div className={loading ? 'row-body': 'hidden'}>
                {loading && <Loading />}
            </div>
            <span className='title-pokemon'>POKEDEX</span>
            <div className='lista-pokemon'>
                {data.pokemons?.length ? data.pokemons.map(item => {
                    return (
                        <Pokemon key={item.id} pokemon={item} />
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
