// import React, { Component } from "react";

// // import ApiService from "../../service/apiRequest";

// export default class Movies extends Component {
//   // api = new ApiService();

//   state = {
//     title: null,
//     releaseDate: null,
//     overview: null,
//   };

//   // constructor() {
//   //   super();
//   //   this.updateMovie();
//   // }

//   // updateMovie() {
//   //   this.api.getSpecificMovie(411).then((movie) => {
//   //     this.setState({
//   //       title: movie.original_title,
//   //       releaseDate: movie.release_date,
//   //       overview: movie.overview,
//   //     });
//   //   });
//   // }

//   // updateMovie() {
//   //   this.api.getAllMovies().then((arr) => {
//   //     const films = arr.map((film) => {
//   //       return this.setState({
//   //         title: film.original_title,
//   //         releaseDate: film.release_date,
//   //         overview: film.overview,
//   //       });
//   //     });
//   //   });
//   // }

//   render() {
//     const { title, releaseDate, overview } = this.state;

//     return (
//       <ul className="movieContainer">
//         Movies
//         <li className="movieCard">
//           <h3 className="movie-title">{title}</h3>
//           <div className="movie-release">{releaseDate}</div>
//           <div className="movie-overview">{overview}</div>
//         </li>
//       </ul>
//     );
//   }
// }
