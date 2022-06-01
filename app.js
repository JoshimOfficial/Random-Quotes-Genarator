let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let display_quotes = document.querySelector(".todays_quoets");
let display_quoets_effect = document.querySelector(".display_quoets");

let quotes =["  “Be yourself; everyone else is already taken.” ― Oscar Wilde" , 
                "Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.” ― Marilyn Monroe]", 
                "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
                "“So many books, so little time.” ― Frank Zappa", 
                "“A room without books is like a body without a soul.”― Marcus Tullius Cicero", 
                "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch",
                "“You have gotta dance like theres nobody watching, Love like you will never be hurt,Sing like theres nobody listening,And live like its heaven on earth.” ― William W. Purkey",
                "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss" ,
                "“You only live once, but if you do it right, once is enough.” ― Mae West",
                "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
                "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
                "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”― J.K. Rowling, Harry Potter and the Goblet of Fire",
                "“Dont walk in front of me… I may not follow Dont walk behind me… I may not lead Walk beside me… just be my friend” ― Albert Camus",
                " “If you tell the truth, you don't have to remember anything.” ― Mark Twain",
                "“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .” ― C.S. Lewis, The Four Loves",
                "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou",
                "“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard",
                "“To live is the rarest thing in the world. Most people exist, that is all.” ― Oscar Wilde",
                "“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde"

            ]

let quotes_no = [];

window.addEventListener("onload", default_quotes());

function default_quotes() {
    let random = Math.floor(Math.random()*quotes.length);
    display_quotes.innerText = quotes[random];
}


next.addEventListener("click", ()=>{

    if(quotes_no => 1) {
        display_quotes.style.color = "green";
    }

    let random = Math.floor(Math.random()*quotes.length);
    display_quotes.innerText = quotes[random];

    quotes_no.push(random);
    console.log(quotes_no)


    
    display_quoets_effect.classList.remove("animate__bounceInRight")
    display_quoets_effect.classList.remove("animate__backOutLeft")

    display_quoets_effect.classList.add("animate__tada")

    setTimeout(()=>{
        display_quoets_effect.classList.remove("animate__tada")
        
    },1000)
})
previous.addEventListener("click", ()=>{


    quotes_no.pop();
    display_quoets_effect.classList.add("animate__backOutLeft")
    display_quoets_effect.classList.remove("animate__bounceInRight")

    setTimeout(()=>{
    display_quoets_effect.classList.add("animate__bounceInRight")
    display_quoets_effect.classList.remove("animate__backOutLeft")
        display_quotes.innerText = quotes[quotes_no[quotes_no.length-1]];

        if(quotes_no.length <= 1) {
        
            display_quotes.innerText = "No more previous quotes. Try to click next button";
            display_quotes.style.color = "red";
            display_quotes.style.fontWeight   = "red"
        }
    },500)


   console.log(quotes_no)

})