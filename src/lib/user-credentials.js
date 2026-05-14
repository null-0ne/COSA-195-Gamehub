//story5_as_a_user_i_can_register_and_login_via_email

"use strict";

//import { use } from "react";

export async function retrieveLogin(email, password){
    try{
        const response = await fetch("../../db-seed-data.json");
        if(!response.ok){
            throw new Error("Error retrieving data");
        }
        const data = await response.json();
        
        for(let user of data.users){
            if(user.email === email && user.password === password){
                return user;
            }
            else{
                return null;
            }
        }
        /**
         * for(let i = 0; i < data.user.length(); i++){
            let currentUser = data.user[i];
            if(currentUser.email === email && currentUser.password === password){
                return currentUser;
            }
            else{
                return null;
            }
        }
         */
        
    }
    catch(error){
        console.error(error);
    }
}