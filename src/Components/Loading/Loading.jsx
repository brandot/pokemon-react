import './Loading.scss';
import loading from '../../assets/loading-spokes.svg';

const Loading = () => {
    return (
        <div className='loading isOpen'>
            <img src={loading} alt="Loading icon" className='loading-container' />
            <span className='text-loading'>Obteniendo información...</span>
        </div>
    );
}

export default Loading;