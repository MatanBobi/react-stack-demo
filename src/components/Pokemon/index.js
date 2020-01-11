import React from 'react';
import {simulateSleep} from '../../helpers/utils';
import PokemonImage from '../PokemonImage';

class Pokemon extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(response => response.json()).then(data => {
            this.setState({data});
        })
    }

    render() {
        const {name, searchValue} = this.props;
        const {data} = this.state;

        simulateSleep(2);

        const matchesFilterAtIndex = name.toLowerCase().indexOf(searchValue.toLowerCase());

        if (matchesFilterAtIndex >= 0 && searchValue !== "") {
            return (
                <div className='pokemon-wrapper'>
                    {data.sprites &&
                    <PokemonImage src={data.sprites.front_default} name={name}/>
                    }
                    <div className="name">
                        {name.substring(0, matchesFilterAtIndex)}
                        <span className="highlight">
                          {name.substring(
                              matchesFilterAtIndex,
                              matchesFilterAtIndex + searchValue.length
                          )}
                        </span>
                        {name.substring(matchesFilterAtIndex + searchValue.length)}
                    </div>
                </div>
            );
        } else {
            return <div className='pokemon-wrapper'>
                {data.sprites &&
                <PokemonImage src={data.sprites.front_default} name={name}/>
                }
                <div className="name">{name}</div>
            </div>;
        }
    }
}

export default Pokemon;