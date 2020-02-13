import React, { Component } from 'react';

import { Block } from '../../styles/grid';
import * as S from './styled-elements';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      showFilters: true,
      showMenu: true,
      sorting: 'Popularity',
    };
    this.navItems = [
      { label: 'All' },
      { label: 'Movies', icon: '/static/icons/movies.svg' },
      { label: 'TV Shows', icon: '/static/icons/television.svg' },
      { label: 'Games & Apps', icon: '/static/icons/games.svg' },
      { label: 'Blog', icon: '/static/icons/blog.svg' },
      { label: 'Other' },
    ];
  }

  setActive = i => {
    this.setState({ activeIndex: i });
  };

  toggleFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const navItems = this.navItems;
    const { activeIndex, showMenu, showFilters, sorting } = this.state;
    return (
      <S.Header>
        <S.MenuButton onClick={this.toggleMenu} $open={showMenu} />
        <Block>
          <S.HeaderGrid>
            <S.Title>
              <S.H1>Search Results</S.H1>
            </S.Title>
            <S.NavList $show={showMenu}>
              {navItems.map((nav, i) => {
                const hasIcon = typeof nav.icon !== 'undefined';
                return (
                  <S.NavListItem
                    key={`navItem_${i}`}
                    $active={activeIndex === i}
                    onClick={() => {
                      this.setActive(i);
                    }}
                    $hasIcon={hasIcon}
                  >
                    {nav.icon && <S.Icon src={nav.icon} alt={nav.label} />}
                    <S.Label $hasIcon={hasIcon}>{nav.label}</S.Label>
                  </S.NavListItem>
                );
              })}
              <S.NavListItem $noPad>
                <S.Display>
                  <img src="/static/icons/display-grid.svg" />
                </S.Display>
              </S.NavListItem>
              <S.NavListItem $noPad>
                <S.Display>
                  <img src="/static/icons/display-list.svg" />
                </S.Display>
              </S.NavListItem>
            </S.NavList>
          </S.HeaderGrid>
        </Block>
        <Block>
          <S.FilterControls>
            <S.ToggleFilters onClick={this.toggleFilters}>
              Filter
            </S.ToggleFilters>
            <S.SortedBy>
              <S.SortLabel>Sorted by:</S.SortLabel> {sorting}
            </S.SortedBy>
          </S.FilterControls>
          {showFilters && (
            <S.FilterGroup>
              <S.Filters>
                <S.Filter>Release</S.Filter>
                <S.Filter>Genre</S.Filter>
                <S.Filter>Rating</S.Filter>
              </S.Filters>
              <S.FilterActions>
                <S.Button>Clear Filters</S.Button>
                <S.Button>Apply Filters</S.Button>
                <S.Close onClick={this.toggleFilters}>
                  <img src="/static/icons/close.svg"></img>
                </S.Close>
              </S.FilterActions>
            </S.FilterGroup>
          )}
        </Block>
      </S.Header>
    );
  }
}

export default Header;
