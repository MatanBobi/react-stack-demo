import React from 'react';
import './App.css';
import PokemonsList from "./components/PokemonsList";
import SearchBox from './components/SearchBox';
import {sendAnalyticsPing} from './helpers/utils';
import Description from './components/Description';
import Header from './components/Heder';

class App extends React.Component{
    state = {
        inputValue: ''
    };

    onInputChange = (value) => {
        this.setState({inputValue: value});
        sendAnalyticsPing(value);
    };

    render(){
        const {pokemons, inputValue} = this.state;

        return (
            <div className="App">
                <Header>Pokédex</Header>
                <SearchBox inputValue={inputValue} onChange={this.onInputChange}/>
                <PokemonsList pokemons={pokemons} searchValue={inputValue}/>
                <Description/>
            </div>
        )
    }
}

export default App;
