const links = [
    'https://www.youtube.com/watch?v=P-F7v8d7Vzc',
    'https://www.youtube.com/watch?v=8i6-PgW-uX0',
    'https://www.youtube.com/watch?v=JIc5vXcD4yY',
    'https://www.youtube.com/watch?v=-TWnAO7vBns',
    'https://www.youtube.com/watch?v=uOw58cc6GQc',
    'https://www.youtube.com/watch?v=jGkBFIw5iMk',

];

const randomLink = () => {
    let randomPick = Math.floor(Math.random() * (links.length));
    document.getElementById("displayLink").innerHTML = '<a href="'+randomLink+'" target="_blank">'+randomLink+'</a>
};
