import React, {Component} from 'react';
import MovieList from './components/movie-list'
import './App.css';

class  App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    //fetch data
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 8d6f8bf807715c44ab52f1882a7ed2a8be507bb0'
      }
    })
    .then(resp => resp.json())
    .then(json_res => this.setState({
      movies: json_res
    }))
    .catch(errors => console.log(errors))
  }

  render(){
    return (
      <div className="App">
          <h1>Movie Rater</h1>
          <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
