import { HoverEffect } from "../CardHover/CardHover";

export function CardHoverHelper() {
    return (
        <div className="w-full mx-auto">
            
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "HTML",
        image: "/Skills/html.png",
    },
    {
        title: "CSS",
        image: "/Skills/css.png",
    },
    {
        title: "Javascript",
        image: "/Skills/js.png",
    },
    {
        title: "Typescript",
        image: "/Skills/ts.png",
    },
    {
        title: "Tailwind CSS",
        image: "/Skills/tailwind.png",
    },
    {
        title: "React JS",
        image: "/Skills/react.png",
    },
    {
        title: "Next JS",
        image: "/Skills/nextjs.png",
    },
    {
        title: "Node JS",
        image: "/Skills/nodejs.png",
    },
    {
        title: "Express JS",
        image: "/Skills/express.png",
    },
    {
        title: "MongoDB",
        image: "/Skills/mongodb.png",
    },
    {
        title: "C++",
        image: "/Skills/cpp.png",
    },
    {
        title: "C",
        image: "/Skills/c.png",
    },
    {
        title: "Python",
        image: "/Skills/python.png",
    },
    {
        title: "npm",
        image: "/Skills/npm.png",
    },
    {
        title: "Postman",
        image: "/Skills/postman.png",
    },
    {
        title: "Firebase",
        image: "/Skills/firebase.png",
    },
    {
        title: "Git",
        image: "/Skills/git.png",
    },
    {
        title: "Github",
        image: "/Skills/github.png",
    },
    {
        title: "Socket.io",
        image: "/Skills/socketio.png",
    },
    {
        title: "Redis",
        image: "/Skills/redis.png",
    },
    {
        title: "VS Code",
        image: "/Skills/vscode.png",
    },
    
    
];
