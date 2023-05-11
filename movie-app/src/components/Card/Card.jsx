import React, { Component } from "react";
import { format } from "date-fns";
import { Image } from "antd";

import Genre from "../Genre/Genre";
import Stars from "../Stars/Stars";

import noImage from "./noposter.jpg";
import "./Card.css";

export default class Card extends Component {
  _imgPath = "https://image.tmdb.org/t/p/w500";
  posterPath = (poster_path, availabilityPoster) =>
    poster_path === null ? noImage : availabilityPoster;

  mainText = (text) => text.split(" ").slice(0, 29).join(" ");

  releaseData = (release_date) => {
    if (release_date) {
      return format(new Date(release_date), "PPP");
    }
    return "Release date unknown";
  };

  reitingColor = (vote_average) => {
    if (vote_average <= 3) {
      return { borderColor: "#E90000" };
    }
    if (vote_average <= 5) {
      return { borderColor: "#E97E00" };
    }
    if (vote_average <= 7) {
      return { borderColor: "#E9D100" };
    }
    return { borderColor: "#66E900" };
  };

  render() {
    const {
      id,
      poster_path,
      title,
      genre_ids,
      release_date,
      overview,
      rating,
      vote_average,
    } = this.props;
    const availabilityPoster = `${this._imgPath}${poster_path}`;
    return (
      <li className="card-container">
        <div className="card">
          <Image
            className="poster"
            src={this.posterPath(poster_path, availabilityPoster)}
            alt="poster"
          />
          <div className="movie-info">
            <h2 className="title">{title}</h2>
            <div className="reiting" style={this.reitingColor(vote_average)}>
              <span>{Math.round(vote_average)}</span>
            </div>
            <div className="data-of-release">
              {this.releaseData(release_date)}
              {/* {format(new Date(release_date), "PPP")} */}
            </div>

            <ul className="category-list">
              <Genre genre_ids={genre_ids} key={id} />
            </ul>
            <div className="overview">{this.mainText(overview)}..</div>
            <Stars id={id} rating={rating} />
          </div>
        </div>
      </li>
    );
  }
}
