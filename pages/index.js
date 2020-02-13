// DOCUMENTATION: http://styletron.org
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../layouts/index.js';
import SearchResults from '../components/searchResults';

import { Block } from '../styles/grid';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 12,
      limit: 12,
      increments: 6,
    };
  }

  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/api/search');
    const json = await res.json();
    return { movies: json.nodes };
  }

  render() {
    const movies = this.props.movies;
    return (
      <Layout>
        <Block>
          <SearchResults movies={this.props.movies} />
        </Block>
      </Layout>
    );
  }
}

export default Index;
