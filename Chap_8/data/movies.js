const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: ["Sci-Fi", "Action"],
    rating: 8.8,
    description:
      "A skilled thief is given a chance at redemption if he can successfully infiltrate a target's dreams.",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2,
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: ["Action", "Crime"],
    rating: 9.0,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
  },
  {
    id: 5,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.",
  },
];

// Exporting the movie data for use in other scripts
if (typeof module !== "undefined") {
  module.exports = movies;
}
