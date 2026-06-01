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
// export async function chan(params={}){