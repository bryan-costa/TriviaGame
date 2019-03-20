let res = []
console.log(res);

fetch(`https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple`)
    .then(r => r.json())
    .then(r => {
        // r.results[]
        console.log(r.results);
        return r.results.push(res)
    }

        // let results = r.results
        // results.forEach(e => {
        //     console.log(e)
        //     let { question } = results[`${e}`].question
        //         document.querySelector('#trivia').innerHTML = `${[question]}`
        // });
        // console.log(results);
        // r.results.forEach(i => {
            // let { question, correct_answer, incorrect_answers } = r.results[i]
        // document.querySelector('#trivia').innerHTML = `${r.results[r].question}`
        )
    .catch(e => console.error(e))
    // }) 

for (i = 0; i < res.length; i++) {
    // let { i } = r.results
    console.log(i)
}
