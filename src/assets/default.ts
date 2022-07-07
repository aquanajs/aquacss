export default `

/*
    Box sizing stuff
*/
*,
::before,
::after {
    box-sizing: border-box;
}

/*
    Remove the dumb margin
*/
body {
    margin: 0;
}

/*
    Font sizing
*/
h1 {
    font-size: 2rem;
}
h2 {
    font-size: 1.56rem;
}
h3 {
    font-size: 1.12rem;
}
h4 {
    font-size: 0.91rem;
}
h5 {
    font-size: 0.79rem;
}
h6 {
    font-size: 0.62rem;
}

/*
    Some stuff need to be block-level
*/
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

/*
    Other stuff need to be block-level too
*/
img,
svg,
canvas,
embed,
iframe,
video {
    display: block;
}

/*
    Block level stuff with existing ratio can safely ignore height specs
*/
img,
svg,
canvas,
video {
    height: auto;
}

/*
    Whitespace
*/
pre {
    white-space: pre-wrap;
}

/*
    Remove list formatting
*/
nav ul {
    list-style: none;
}

/*
    HR to inherit color
*/
hr {
    color: inherit;
}

`