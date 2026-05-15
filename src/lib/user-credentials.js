//story5_as_a_user_i_can_register_and_login_via_email

"use strict";

//import { use } from "react";

export async function retrieveLogin(email, password){
    try{
        const response = await fetch(`/api/users?email=${email}&password=${password}`);
        if(!response.ok){
            throw new Error("Error retrieving data");
        }
        const user = await response.json();
        console.log(user);
        if(user.length > 0) //user logs in
        {
            sessionStorage.setItem("email", email);
            //sessionStorage.setItem("id", user[0].id);
        }
        return user
    }
    catch(error){
        console.error(error);
    }
}

export async function register(email, password){
    try{
        const checkEmail = await fetch(`/api/users?email=${email}`);
        if(!checkEmail.ok){
            throw new Error("Error retrieving data");
        }
        const userExists = await checkEmail.json();
        
        if(userExists.length > 0){ //user already exists
            errorMessage.innerText = "That user already exists";
            return;
        }
        const response = await fetch(`/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}) //need to add id
        });
        const user = await response.json();
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("id", user.id);
        return user;
    }
    catch(error){
        console.error(error);
    }
}

export function registerValidation(email, password , confirmPassword){
    
    let emailRegex = /^[a-zA-z0-9._%+-]+@saskpolytech\.ca$/

    if(!emailRegex.test(email)){
        errorMessage.innerText = "Invalid email, must be a @saskpolytech.ca email";
    } else{
        if(password.length < 8){
            errorMessage.innerText = "Password must be at least 8 characters";
        } else {
            if(confirmPassword !== password){
                errorMessage.innerText = "Passwords must match";
            } else {
                errorMessage.innerText = "";
                return true;
            }
        }
    }
}

