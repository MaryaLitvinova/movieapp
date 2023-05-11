import React, { Component } from "react";

import "./Genre.css";
import { Consumer } from "../GenresContext/genresContext";

export default class Genre extends Component {
  render() {
    const { genre_ids } = this.props;
    return (
      <Consumer>
        {(category) => {
          if (category) {
            const res = genre_ids.map((item) => {
              const results = category.find(
                (objItem) => objItem.id === item && true
              );
              return results.name;
            });
            const resGenre = res.map((genre, id) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className="category-item" key={id}>
                  {genre}
                </li>
              );
            });
            return resGenre;
          }
        }}
      </Consumer>
    );
  }
}
