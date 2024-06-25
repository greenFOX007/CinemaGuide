import history from "@/assets/img/genresImg/history.jpg";
import horror from "@/assets/img/genresImg/horror.webp";
import scifi from "@/assets/img/genresImg/scifi.webp";
import standUp from "@/assets/img/genresImg/standup.webp";
import fantasy from "@/assets/img/genresImg/fantasy.jpg";
import mystery from "@/assets/img/genresImg/mistery.webp";
import family from "@/assets/img/genresImg/family.jpg";
import comedy from "@/assets/img/genresImg/comedy.jpg";
import romance from "@/assets/img/genresImg/romance.webp";
import music from "@/assets/img/genresImg/music.jpg";
import drama from "@/assets/img/genresImg/drama.jpg";
import crime from "@/assets/img/genresImg/drama.jpg";
import tvMovie from "@/assets/img/genresImg/tv-movie.jpg";
import documentary from "@/assets/img/genresImg/documentary.jpg";
import action from "@/assets/img/genresImg/action.jpg";
import thriller from "@/assets/img/genresImg/thriller.jpg";
import western from "@/assets/img/genresImg/western.webp";
import animation from "@/assets/img/genresImg/animation.jpg";
import war from "@/assets/img/genresImg/war.jpg";
import adventure from "@/assets/img/genresImg/adventure.jpg";
import { StaticImageData } from "next/image";

export interface IGenres {
  name: string;
  rusName: string;
  poster: StaticImageData;
}

export type GenresList = Array<IGenres>;

export const genresList: GenresList = [
  {
    name: "history",
    rusName: "Исторические",
    poster: history,
  },
  {
    name: "horror",
    rusName: "Ужасы",
    poster: horror,
  },
  {
    name: "scifi",
    rusName: "Sci-fi",
    poster: scifi,
  },
  {
    name: "stand-up",
    rusName: "Стендап",
    poster: standUp,
  },
  {
    name: "fantasy",
    rusName: "Фантастические",
    poster: fantasy,
  },
  {
    name: "drama",
    rusName: "Драма",
    poster: drama,
  },
  {
    name: "mystery",
    rusName: "Мистика",
    poster: mystery,
  },
  {
    name: "family",
    rusName: "Семейные",
    poster: family,
  },
  {
    name: "comedy",
    rusName: "Комедия",
    poster: comedy,
  },
  {
    name: "romance",
    rusName: "Романтика",
    poster: romance,
  },
  {
    name: "music",
    rusName: "Музыкальные",
    poster: music,
  },
  {
    name: "crime",
    rusName: "Криминальные",
    poster: crime,
  },
  {
    name: "tv-movie",
    rusName: "Телевизионные",
    poster: tvMovie,
  },
  {
    name: "documentary",
    rusName: "Документальные",
    poster: documentary,
  },

  {
    name: "action",
    rusName: "Экшн",
    poster: action,
  },
  {
    name: "thriller",
    rusName: "Триллеры",
    poster: thriller,
  },
  {
    name: "western",
    rusName: "Вестерны",
    poster: western,
  },
  {
    name: "animation",
    rusName: "Мультфильмы",
    poster: animation,
  },
  {
    name: "war",
    rusName: "Военные",
    poster: war,
  },
  {
    name: "adventure",
    rusName: "Преключения",
    poster: adventure,
  },
];
