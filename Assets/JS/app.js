// let questions = {
//     question: ["Which of the following authors was not born in England?", "What is the name of Eragon's dragon in the book series Eragon?", `Which Author wrote the quote "Not all who wander are lost"?`, `In the novel "Lord of the Rings", how many rings of power were given to the race of man?`],
//     answers: ["Arthur Conan Doyle", "Graham Greene", "H G Wells", "Arthur C Clarke"], ["Saphira", "Glaedr", "Thorn", "Arya"], ["J. R. R. Tolkien", "Emily Dickinson", "Ernest Hemingway", "Mark Twain"], ["J. R. R. Tolkien", "Emily Dickinson", "Ernest Hemingway", "Mark Twain"], ["9", "5", "11", "13"],
//     correctAnswer: 0
// }

// const cAns= () => {
//     for(i = 0; i < questions.question.length; i++)
//         console.log(questions.question[i])
//     for(i = 0; i < questions.answers.length; i++)
//         console.log(questions.answers[i])
//     let ans = questions.answers[i]
//     for(i = 0; i < ans.length; i++)
//         console.log(ans[i]);
// }

// cAns()

let questions = {
    question1: {
        question: "Which of the following authors was not born in England? ",
        answers: ["Arthur Conan Doyle", " Graham Greene", " H G Wells", " Arthur C Clarke"],
        correctAnswer: 0
    },
    question2: {
        question: "What is the name of Eragon's dragon in the book series Eragon?",
        answers: ["Saphira", " Glaedr", " Thorn", " Arya"],
        correctAnswer: 0
    },
    question3: {
        question: `Which Author wrote the quote "Not all who wander are lost"?`,
        answers: ["J. R. R. Tolkien", " Emily Dickinson", " Ernest Hemingway", " Mark Twain"],
        correctAnswer: 0
    },
    question4: {
        question: `In the novel, "Lord of the Rings", how many rings of power were given to the race of man?`,
        answers: ["9", " 5", " 11", " 13"],
        correctAnswer: 0
    }
}
// Display Questions and Answers
const disp = _ => {
    let q1 = questions.question1.question
    let q2 = questions.question2.question
    let q3 = questions.question3.question
    let q4 = questions.question4.question
    let a1 = questions.question1.answers
    let a2 = questions.question2.answers
    let a3 = questions.question3.answers
    let a4 = questions.question4.answers
    document.querySelector('#trivia').innerHTML = `
    <p>
    ${q1}
    <br>
    ${a1}
    </p>
    <p>
    ${q2}
    <br>
    ${a2}
    </p>
    <p>
    ${q3}
    <br>
    ${a3}
    </p>
    <p>
    ${q4}
    <br>
    ${a4}
    </p>
    `
}

// let ansElem = document.createElement('p')
// ansElem.className = 'toDoItem'
// ansElem.setAttribute('data-answer', 0)
disp()
console.log(questions);