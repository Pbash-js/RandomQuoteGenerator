const App = () => {

  const randomColor = () => {
    return "rgba(" + Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",0.6)";
  };

  const [color, setColor] = React.useState(randomColor());


  const [arrQuotes, setArrQuotes] = React.useState([]);

  const [quote, setQuote] = React.useState({ quote: "A great man once said...", author: "...some great words" });

  const changeColor = () => {
    setColor(randomColor());
  };

  const [height, setHeight] = React.useState(window.innerHeight / 2);

  React.useEffect(async () => {



    try {
      let result = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");

      let quotes = await result.json();

      setArrQuotes(quotes.quotes);

    } catch {
      "Error";
    }
  }, []);





  const newQuote = async () => {
    changeColor();

    setQuote(await arrQuotes[Math.floor(Math.random() * 102)]);

    setHeight(document.getElementById("text").offsetHeight + document.getElementById("author").offsetHeight + document.getElementById("interaction-area").offsetHeight + 80);


  };


  const styles = {
    app: {
      backgroundColor: color,
      height: "100vh" },


    button: {
      backgroundColor: color },

    quoteBox: {
      height: height } };



  return /*#__PURE__*/(
    React.createElement("div", { style: styles.app, id: "app" }, /*#__PURE__*/
    React.createElement("div", { id: "quote-box", style: styles.quoteBox }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, quote.quote), /*#__PURE__*/
    React.createElement("div", { id: "author" }, quote.author), /*#__PURE__*/
    React.createElement("div", { id: "interaction-area" }, /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", style: styles.button, href: "twitter.com/intent/tweet", target: "_blank" }, /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("div", { id: "instagram", style: styles.button }, /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/

    React.createElement("button", { id: "new-quote", className: "btn btn-default", style: styles.button, onClick: newQuote }, "New")))));




};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app-container"));