/*
 Filename:    question-service.js
 Student:     Samuel Cyrenne
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Questions Service
              Contains methods that make a RESTful fetch request to the /products route on the api server
              JSON-SERVER Documentation: https://github.com/typicode/json-server#routes

 * @param params   p
 * @returns
 */
export async function getQuestion(params={}){

    console.log("data function called");

    const result = await fetch(`/api/questions`);

    console.log(result);

    //if result does not have an OK status then return an empty array
    if (!result.ok) {
        console.log("result not okay");
        return []
    }

    //parse the JSON from the result into a JS array of Product objects - wait for parsing to complete then return
    const dataFromAPI= await result.json();
    //console.log(dataFromAPI);
    console.log(dataFromAPI);

    //grab a random question
    let facts = dataFromAPI[0].facts;
    let randChoice = Math.floor(Math.random()*facts.length);
   
    let randQuestion = Math.floor(Math.random() * facts[randChoice].questions.length);
    let pickedQuestion = facts[randChoice].questions[randQuestion];
    console.log("ONE QUESTION:");
    console.log(pickedQuestion);


   
    // return dataFromAPI;
    return pickedQuestion;
}