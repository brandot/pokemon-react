import axios from 'axios';
import {useEffect, useState} from 'react'

const service = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

const ApiPokemon = (initialUrl) => {
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);

    const getPokemon = async(url, initialData) => {
        let pokemons = initialData;
        let data = {
            next: null,
            previous: null,
            pokemons: []
        }
        try {
            setLoading(true);
            const response = await service.get(url);
            if (response.status === 200 && response.data.results) {
                for (let index = 0; index < response.data.results.length; index++) {
                    const item = response.data.results[index];
                    const pokemon = await service.get(`${item.url}`);
                    if (pokemon.status === 200 && pokemon.data) {
                        pokemons.push(pokemon.data);
                    }
                    if (index === response.data.results.length - 1) {
                        data.next = response.data.next;
                        data.previous = response.data.previous;
                        data.pokemons = pokemons;
                        setData(data);
                        setLoading(false);
                    }
                }
            } else {
                setData(data);
                setLoading(false);
            }
        } catch (error) {
            console.log('Error al leer API', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemon(initialUrl, []);
    }, [initialUrl])

    const loadMorePokemons = () => {
        if (data && data.next) {
            getPokemon(data.next, data.pokemons);
        }
    }

    return { data, loading, loadMorePokemons };
};

export default ApiPokemon;