const quotes = [
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Mostly it is loss which teaches us about the worth of things.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "A man can be himself only so long as he is alone.",
        author: "Schopenhauer's Quotesn"
    },
    {
        quote: "the two enemies of human happiness are pain and boredom.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "We forfeit three-quarters of ourselves in order to be like other people.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "Everyon takes the limits of his own vision for the limits of the world.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "Wealth is lik esea-water; the more we drink, the thirstier we become; and the same is true of fame.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "If a man does not love solitude, he will not love freedom; for it is only when he is alone that he is really free.",
        author: "Schopenhauer's Quotes"
    },
    {
        quote: "All truth passes through three stages. First, it is ridiculed. Seconde, it is violently opposed. Third, it is a accepted as being self-evident.",
        author: "Schopenhauer's Quotes"
    }
]

const quote = document.querySelector(".quote span:first-child")
const author = document.querySelector(".quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author