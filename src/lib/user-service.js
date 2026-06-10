//story5_as_a_user_i_can_register_and_login_via_email

"use strict";

//import { use } from "react";

export async function retrieveLogin(email, password){
    try{
        const response = await fetch(`/api/users?email=${email}&password=${password}`);
        console.log(email);
        console.log(password);
        if(!response.ok){
            throw new Error("Error retrieving data");
        }
        const user = await response.json();
        console.log(user);
        if(user.length > 0) //user logs in
        {
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("id", user[0].id);
            sessionStorage.setItem("avatar", user[0].avatar);
        }
        return user
    }
    catch(error){
        console.error(error);
    }
}

export async function register(email, password, gamerTag){
    try{
        const checkEmail = await fetch(`/api/users?email=${email}`);
        const userExists = await checkEmail.json();
        console.log(userExists);
        if(userExists.length > 0){ //user already exists
            return {id:"exists"};
        } 
        const checkGamerTag = await fetch(`/api/users?gamerTag=${gamerTag}`);
        const gamerTagExists = await checkGamerTag.json();
        if(gamerTagExists.length > 0){
            return {id:"exists"};
        }
        const response = await fetch(`/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, gamerTag, avatar:"/images/bison.png"})
        });
        const user = await response.json();
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("id", user.id);
        sessionStorage.setItem("avatar", user.avatar);
        return user;
    }
    catch(error){
        console.error(error);
    }
}

export async function postProfile(userTag, userAvatar){
    
    const usersFound = await fetch(`/api/users?email=${sessionStorage.getItem("email")}`);

    const users = await usersFound.json();
    const user = users[0];

    user.gamerTag = userTag;
    user.avatar = userAvatar;
    
    const result = await fetch(`/api/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export async function getProfile(email){
    try{
        const response = await fetch(`/api/users?email=${email}`);
        if(!response.ok){
            throw new Error("Error retrieving data");
        }
        const users = await response.json();
        const user = users[0]
        console.log(user);
        if(user) //user logs in
        {
            sessionStorage.setItem("gamerTag", user.gamerTag);
            sessionStorage.setItem("avatar", user.avatar);
        }
             
        return user
    }
    catch(error){
        console.error(error);
    }
}


