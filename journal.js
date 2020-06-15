//Ask the user to enter their choices
const choiceContent = Number(prompt('Welcome to my Onja journal! \n Choose (1)for all the entries.\n  Choose (2) for adding a new entry \n  Choose (3) to quit'));

// Create an array
const journal = [
  {
    title: "First blog letter",
    content: "The weather is good"
  },
  {
    title: "Another day at Onja",
    content: "It is beautifull day."
  },
  {
    title: "Today is a good day",
    content: "Today is a good day"
}
];


let listOfJournal = ["title", "content"];
  if (listOfJournal === 1){
    listOfJournal.push(`${title[0]} ${content[0]}`);
  }else if(listOfJournal === 2){
    alert(`${title[1]} ${content[1]}`);
  }else{
    alert(`There is no list`);
  }