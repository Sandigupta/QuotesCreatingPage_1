// variables
let button= document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");

const quotes=[{
    quote:'"A person should not be too honest. Straight trees are cut first and honest people are screwed first."',
    person:'Vishnu Gupta'
},
{
    quote:'"One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives."',
    person:'Subhas Chandra Bose'
},
{
    quote:'"I am a man, and all that affects mankind concerns me."',
    person:'Bhagat Singh'
},
{
    quote:'"Arise, awake, and stop not until the goal is reached."',
    person:'Swami Vivekananda'
},
{
    quote:' "Mans bondage is caused by desire, and his freedom is caused by knowledge."',
    person:'Adi Shankaracharya'
},
{
    quote:'"Just as a single sun illuminates the entire world, so does the indwelling soul illuminate the entire body."',
    person:'Aryabhata'
},
{
    quote:'"Before you start some work, always ask yourself three questions: Why am I doing it? What the results might be? And will I be successful? Only when you think deeply and find satisfactory answers to these questions, go ahead."',
    person:'Acharya Chanakya (Kautilya)'
},
{
    quote:'"You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions."',
    person:'Bhagavad Gita'
},
{
    quote:'"In happiness and suffering, in joy and grief, we should regard all creatures as we regard our own self."',
    person:'Mahavira'
}
];

button.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})