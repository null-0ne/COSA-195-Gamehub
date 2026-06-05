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

    //transform the params.paging in a URL query string so API server returns a subset of items based on the page num and the limit per page
    const pagingQuery =  params.paging ? `_page=${params.paging.page ?? '1'}&_per_page=${params.paging.limit ??'999'}` : '';

    const result = await fetch(`/api/questions${pagingQuery}`);

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

   
   
    let randQuestion = dataFromAPI[Math.floor(Math.random()*dataFromAPI.length)];
   
   
    console.log("ONE QUESTION:");
    console.log(randQuestion);


   
    // return dataFromAPI;
    return randQuestion;
}