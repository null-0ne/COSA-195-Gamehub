/*
 Filename:    question-service.js
 Student:     
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Questions Service
              Contains methods that make a RESTful fetch request to the /products route on the api server
              JSON-SERVER Documentation: https://github.com/typicode/json-server#routes

 * @param params   p
 * @returns 
 */
export async function getQuetion(params={}){ 



    const result = await fetch(`/api/questions`);

    console.log(result);

    //if result does not have an OK status then return an empty array
    if (!result.ok) { return [] }

    //parse the JSON from the result into a JS array of Product objects - wait for parsing to complete then return
    const dataFromAPI= await result.json();

    // when using pagingQuery the products are in the "data" attribute, otherwise dataFromAPI is the product array
    return dataFromAPI.data || dataFromAPI
}