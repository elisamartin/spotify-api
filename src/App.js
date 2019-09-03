import React, { Component } from 'react';
import axios from './axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      playlists: [],
      currentCategory: ''
    };
  }

  componentDidMount() {
    axios()
      .get('https://api.spotify.com/v1/browse/categories?country=ES&locale=es_ES')
      .then((res) => {
        this.setState(() => ({ categories: res.data.categories.items }));
      })
      .catch((err) => console.log(err));
  }

  fetchPlaylists = (id) => {
    axios()
      .get(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=ES&locale=es_ES`)
      .then((res) => {
        this.setState(() => ({ playlists: res.data.playlists.items }));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <h2>Sapi</h2>
        <ul>
          {this.state.categories.map((category) => {
            return (
              <div onClick={this.fetchPlaylists(category.id)} key={category.id}>
                ID: {category.id}, Nombre: {category.name}
              </div>
            );
          })}
        </ul>
        <p>Playlists</p>
        <ul>
          {this.state.playlists.map((playlist) => {
            return (
              <a href={playlist.external_urls.spotify} key={playlist.id}>
                {playlist.name}
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
