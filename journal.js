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
    title: "Last day",
    content: "Today is a good day"
} 
];

journal.forEach(function(objContent) {
  alert(objContent.title, objContent.content);
})

let listOfJournal = ['title', 'content'];
for (i = 0; i < listOfJournal.length; i++) {
  if (listOfJournal === 1) {
    alert(journal[0])
  }else if (listOfJournal === 2) {
    journal.push(journal[1]);
  }else{
    alert('There is no content')
  }
}
