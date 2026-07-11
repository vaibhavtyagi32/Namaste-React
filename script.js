const heading = React.createElement(
    "h1",
    { id:"heading" },
    "Hello world from react!!!");
console.log(heading);
const heading1=React.createElement(
    "div",
    {"id":"parent"},
    [React.createElement(
        "h1",
        {"id":"heading"},
        "Nested Syntax"
    ),React.createElement(
        "h2",
        {"id":"heading"},
        "Nested Syntax2"
)]
)
// Heading is a react element which is at the end of the day is a normal javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);