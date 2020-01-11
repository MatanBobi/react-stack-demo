import React, { PureComponent } from 'react'
import Pokemon from '../Pokemon'
import Spinner from '../Spinner'

class PokemonsList extends PureComponent {
  state = {
    pokemons: [],
    isFetching: true
  }

  getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response => response.json()).then(data => {
      this.setState({ pokemons: data.results, isFetching: false })
    })
  }

  componentDidMount () {
    this.getPokemon()
  }

  render () {
    const { searchValue } = this.props
    const { pokemons, isFetching } = this.state
    return isFetching ? <Spinner/> : (
      <div className="pokemons-list">
        {pokemons.map(pokemon => (
          <Pokemon name={pokemon.name} searchValue={searchValue} key={pokemon.name}/>
        ))}
      </div>
    )
  }
}

export default PokemonsList
