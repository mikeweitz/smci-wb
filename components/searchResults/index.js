import React, { Component } from 'react';

import { GridResults } from '../../styles/grid';
import * as S from './styled-elements';
import Image from './image';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 12,
      limit: 12,
      increments: 6,
    };
  }

  loadMore = () => {
    const { limit, increments } = this.state;
    this.setState({
      limit: limit + increments,
    });
  };

  renderResult = movie => {
    const {
      nid,
      field_display_title,
      type,
      field_title_thumbnail,
    } = movie.node;
    return (
      <div key={`movie_${nid}`}>
        <Image
          src={field_title_thumbnail.src}
          alt={field_title_thumbnail.alt}
        />
        <S.Cat>{type}</S.Cat>
        <S.Name>{field_display_title}</S.Name>
      </div>
    );
  };

  render() {
    const { limit } = this.state;
    const results = [...this.props.movies];
    const disableLoad = limit >= this.props.movies.length;
    if (limit < results.length) {
      results.length = limit;
    }
    return [
      <GridResults key="searchResults">
        {results.map(movie => this.renderResult(movie))}
      </GridResults>,
      <S.Load
        key="loadButton"
        disabled={disableLoad && `disabled`}
        onClick={this.loadMore}
      >
        Load more
      </S.Load>,
    ];
  }
}

export default SearchResults;
