/*
 Filename:    product-service.js
 Student:     
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Products Service
              Contains methods that make various RESTful fetch requests to the /products route on the api server
              translates/adapts the params into a URL query string to the api server
              JSON-SERVER Documentation: https://github.com/typicode/json-server#routes
*/


/**
 * getProducts function makes GET HTTPRequest to /products route on the api
 * allows for paging, sorting and text searches via params object
 * @param params   paging:{page:1,limit:999}, sortOrder:{fields:'id'}, textSearch:''
 * @returns {Product[]}
 */
export async function getScores(params={}){

    //transform the params.textSearch in a URL query string so that API server does a text search on title and size of product
    const searchQuery =  params.textSearch?.length ? `gameTitle:eq=${params.textSearch}` : '';

    //transform the params.sortOrder in a URL query string so thar API server sorts the items by the fields and direction
    const sortQuery =  params.sortOrder ? `_sort=${params.sortOrder ?? 'score'}` : '';

    //transform the params.paging in a URL query string so API server returns a subset of items based on the page num and the limit per page
    const pagingQuery =  params.paging ? `_page=${params.paging.page ?? '1'}&_per_page=${params.paging.limit ??'999'}` : '';

    //join the various query strings into a full URL and fetch - wait for result
    const result = await fetch(`/api/scores?${searchQuery}&${sortQuery}&${pagingQuery}`);

    //if result does not have an OK status then return an empty array
    if (!result.ok) { return [] }

    //parse the JSON from the result into a JS array of Product objects - wait for parsing to complete then return
    const dataFromAPI= await result.json();

    // when using pagingQuery the products are in the "data" attribute, otherwise dataFromAPI is the product array
    return dataFromAPI.data || dataFromAPI
}