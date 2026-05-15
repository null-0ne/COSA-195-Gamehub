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
        console.log(userExists)
        if(userExists.length > 0){ //user already exists
            errorMessage.innerText = "That user already exists";
        }
        const response = await fetch(`/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}) //need to add id
        });
    }
    catch(error){
        console.error(error);
    }
}

export function registerValidation(email, password , confirmPassword){
    let emailRegex = /^[^/s@]+@saskpolytech.ca$/;
    if(emailRegex.test(email)){
        if(password.length > 7){
            if(password === confirmPassword){
                return true;
            } else{
                errorMessage.innerText = "Passwords do not match";
                return false;
            }
        } else{
            errorMessage.innerText = "Password must be at least 8 characters";
            return false;
        }
    } else {
        errorMessage.innerText = "Invalid email, must be a @saskpolytech.ca email";
        return false;
    }
}

