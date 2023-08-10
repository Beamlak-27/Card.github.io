const quotes = [
    {
        saying: "FRIENDS is an American sitcom created by David Crane and Marta Kauffman."},
    {
        saying: "Ross:  Unagi is a total state of awareness! "
    },
    {
        saying: "Rachel: Everyone is getting married or pregnant or promoted and I'm getting a coffee! And it's not even for me."
    },
    {
        saying: "Joey: That's a great story. Can I eat it?"
    },
    {
        saying: "Monica: Welcome to the real world! It's sucks. You gonna love it."
    },
    {
        saying: "Phoebe: She's your lobster. It's a known fact that lobsters fall in love and mate for life. You can actually see old lobster couples walking around their tank, holding clows. "
    },
    {
        saying: " Chandler: I'm not great at the advice. Can I interest you in a sarcastic comment?"
    }
   
];

const quoteContainer = document.getElementById('quote-container');
const quoteImg = document.getElementById('quote-img');
const quoteText = document.getElementById('quote');

function generateRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[quoteIndex];

    quoteText.textContent = randomQuote.saying;
    quoteImg.src = `images/image${quoteIndex +1}.png`;
}

const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
