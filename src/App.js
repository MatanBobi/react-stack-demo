import React from 'react'
import './App.css'
import PokemonsList from './components/PokemonsList'
import SearchBox from './components/SearchBox'
import { sendAnalyticsPing } from './helpers/utils'
import Description from './components/Description'
import Header from './components/Heder'

class App extends React.Component {
  state = {
    inputValue: ''
  }

  onInputChange = (inputValue) => {
    this.setState({ inputValue })
    sendAnalyticsPing(inputValue)
  }

  render () {
    const { inputValue } = this.state

    return (
      <div className="App">
        <Header>Pokémons</Header>
        <SearchBox inputValue={inputValue} onChange={this.onInputChange}/>
        <PokemonsList searchValue={inputValue}/>
        <Description/>
      </div>
    )
  }
}

export default App
