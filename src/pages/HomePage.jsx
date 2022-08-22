import React from "react";
import "./HomePage.css";
// Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const HomePage = () => {
  return (
    <div
      className="main-box"
      style={{
        backgroundImage:
          "url(https://cutewallpaper.org/22/hd-wallpapers-filmmaking/140914725.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1>
          {" "}
          <img
            style={{ marginLeft: "510px" }}
            src="https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/8/6/3/8356368/208367085540.jpg"
            alt=""
          />
        </h1>
      </div>
      <div className="box-1"></div>
      <div
        className="box-2"
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          marginBottom: "2px",
        }}
      >
        <iframe
          width="684"
          height="385"
          src="https://www.youtube.com/embed/ZBRSsfYB2cA"
          title="OPPENHEIMER - Trailer 1 [HD]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          width="684"
          height="385"
          src="https://www.youtube.com/embed/CHNyum77syA"
          title="СТРАЖИ ГАЛАКТИКИ: ЧАСТЬ 3 (2023) Русский трейлер | Крис Пратт (Официальный обзор и фан-концепт)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
