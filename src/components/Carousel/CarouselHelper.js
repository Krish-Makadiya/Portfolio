"use client";
import Carousel from "./Carousel";

export default function CarouselHelper() {
    const slideData = [
        {
            title: "LastPass",
            button: "Visit",
            src: "/MiniProjects/LastPass.PNG",
        },
        {
            title: "LinkHive",
            button: "Visit",
            src: "/MiniProjects/Link-Hive.PNG",
        },

        {
            title: "DevDetective",
            button: "Visit",
            src: "/MiniProjects/DevDetective.PNG",
        },
        {
            title: "Password Generator",
            button: "Visit",
            src: "/MiniProjects/PassGenerator.PNG",
        },
        {
            title: "TikTakToe",
            button: "Visit",
            src: "/MiniProjects/TicTacToe.PNG",
        },
        {
            title: "Weather App",
            button: "Visit",
            src: "/MiniProjects/WeatherApp.PNG",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full">
            <Carousel slides={slideData} />
        </div>
    );
}
