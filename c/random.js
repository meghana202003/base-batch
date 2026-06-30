const quotes = [
{
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
},
{
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
},
{
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
},
{
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
},
{
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
},
{
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
}
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);

    quote.textContent = `"${quotes[random].quote}"`;
    author.textContent = `— ${quotes[random].author}`;
});

// Show one quote on page load
btn.click();