//story5_as_a_user_i_can_register_and_login_via_email

"use strict";

//import { use } from "react";

export async function retrieveLogin(email, password){
    try{
        const response = await fetch(`../../db-seed-data.json?${email}&${password}`);
        if(!response.ok){
            //return[];
            //throw new Error("File doesn't exist");
        }
        const data = await response.json();
        return data.users;
        
        
    }
    catch(error){
        console.error(error);
    }
}