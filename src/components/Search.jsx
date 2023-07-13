import React from "react";

class Search extends React.Component {
  state = {
    search: "Matrix",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type);
    });
    
  };
  handleSearch = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="search"
            type="search"
            className="validate"
            value={this.search}
            name="search"
            onChange={(e) => this.handleSearch(e)}
            placeholder="Search..."
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="all"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="movie"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Film</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="series"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Serials</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
