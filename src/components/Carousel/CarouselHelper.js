"use client";
import Carousel from "./Carousel";

export default function CarouselHelper() {
    const slideData = [
        {
            title: "LastPass",
            button: "Visit",
            src: "/MiniProjects/LastPass.png",
            link: "https://lastpass-official.vercel.app/"
        },
        {
            title: "LinkHive",
            button: "Visit",
            src: "/MiniProjects/Link-Hive.png",
            link: "https://linkhive-official.vercel.app/"
        },
        {
            title: "DevDetective",
            button: "Visit",
            src: "/MiniProjects/DevDetective.png",
            link: "https://krishmakadiya-devdetective.netlify.app/"
        },
        {
            title: "Password Generator",
            button: "Visit",
            src: "/MiniProjects/PassGenerator.png",
            link: "https://krishmakadiya-password-generator.netlify.app/"
        },
        {
            title: "TicTacToe",
            button: "Visit",
            src: "/MiniProjects/TicTacToe.png",
            link: "https://krishmakadiya-tictactoe.netlify.app/"
        },
        {
            title: "Weather App",
            button: "Visit",
            src: "/MiniProjects/WeatherApp.png",
            link: "https://krishmakadiya-weather-app.netlify.app/"
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full">
            <Carousel slides={slideData} />
        </div>
    );
}
