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
            sessionStorage.setItem("id", user[0].id);
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
        const userExists = await checkEmail.json();
        console.log(userExists);
        if(userExists.length > 0){ //user already exists
            return {id:"exists"};
        }
        const response = await fetch(`/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
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

export async function postProfile(userTag, userAvatar){
    
    const result = await fetch(`/api/users?email=${sessionStorage.getItem("email")}`, {
    method: "POST",
    body: JSON.stringify({
        
        user: {
            email: sessionStorage.getItem("email"),
            gamerTag: userTag,
            avatar: userAvatar
        },
    }),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
