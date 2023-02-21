const songName = "Bohemian Rhapsody";
const youtubeLink = "https://www.youtube.com/watch?v=fJ9rUzIMcZQ";

const div = document.createElement("div");
const text = document.createTextNode(`My current favourite song is ${songName}`);
const link = document.createElement("a");
link.setAttribute("href", youtubeLink);
link.appendChild(text);
div.appendChild(link);

document.body.appendChild(div);
