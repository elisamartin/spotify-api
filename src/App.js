import React, { Component } from 'react';
import axios from './axios';
import styled from 'styled-components';

const AppContainer = styled.div`text-align: center;`;
const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  margin: 10px auto;
`;
const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  align-items: baseline;
`;
const Select = styled.select`padding: 10px;`;
const Playlists = styled.div`
  width: 40%;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
`;
const Playlist = styled.a`
  color: black;
  text-decoration: none;
  padding: 5px;
  height: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      playlists: [],
      currentCategory: ''
    };
  }

  componentWillMount() {
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

  onChange = (e) => {
    this.fetchPlaylists(e.target.value);
  };

  render() {
    return (
      <AppContainer>
        <Title>Sapi. Selecciona una categoria para ver sus playlists</Title>
        <Container>
          <Select defaultValue={'default'} onChange={this.onChange}>
            <option value='default' disabled hidden>
              Categorias
            </option>
            {this.state.categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </Select>
          <Playlists>
            {this.state.playlists.map((playlist) => {
              return (
                <Playlist href={playlist.external_urls.spotify} key={playlist.id}>
                  {playlist.name}
                </Playlist>
              );
            })}
          </Playlists>
        </Container>
      </AppContainer>
    );
  }
}

export default App;
