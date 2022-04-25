"use strict"

//Global Array for choices
const rps  = ["rock", "paper", "scissors"];

//Computer play function
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}