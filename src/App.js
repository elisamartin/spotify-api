import React, { Component } from 'react';
import axios from './axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
`;
const Category = styled.div`
  cursor: pointer;
`
const Playlist = styled.a`
  color: black;
  padding: 5px;
  `

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
      <div clasName="App">
        <h2>Sapi. Selecciona una categoria para ver sus playlists</h2>
        <Container>
        <ul>
          {this.state.categories.map((category) => {
            return (
              <Category onClick={this.fetchPlaylists(category.id)} key={category.id}>
                {category.name}
              </Category>
            );
          })}
        </ul>
        <ul>
          {this.state.playlists.map((playlist) => {
            return (
              <Playlist href={playlist.external_urls.spotify} key={playlist.id}>
                {playlist.name}
              </Playlist>
            );
          })}
        </ul>
      </Container>
      </div>
    );
  }
}

export default App;
