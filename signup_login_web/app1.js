function movieSelect() {
    var mainMovieDiv = document.getElementById("container").style.display = "block";
    var userProfile = document.getElementById("container2").style.display = "none";
}
function againSignIn() {
    var mainMovieDiv = document.getElementById("container").style.display = "none";
    var userProfile = document.getElementById("container2").style.display = "none";
}

var btn1 = document.getElementById("btn1");
function Movies(movieName) {
    this.movieName = movieName;
}
var one = [];
function firstMovieBtn() {
    var firstMovie = new Movies(btn1.previousSibling.previousSibling.innerHTML);
    one.push(firstMovie);
    var xyz = JSON.stringify(one);
    window.localStorage.setItem("one", xyz);
}

var btn2 = document.getElementById("btn2");
function Movies(movieName) {
    this.movieName = movieName;
}
var two = [];
function secondMovieBtn() {
    var secondMovie = new Movies(btn2.previousSibling.previousSibling.innerHTML);
    two.push(secondMovie);
    var xyz1 = JSON.stringify(two);
    window.localStorage.setItem("two", xyz1);
}

var btn3 = document.getElementById("btn3");
function Movies(movieName) {
    this.movieName = movieName;
}
var three = [];
function thirdMovieBtn() {
    var thirdMovie = new Movies(btn3.previousSibling.previousSibling.innerHTML);
    three.push(thirdMovie);
    var xyz2 = JSON.stringify(three);
    window.localStorage.setItem("three", xyz2);
}

var btn3 = document.getElementById("btn3");
function Movies(movieName) {
    this.movieName = movieName;
}
var four = [];
function fourthMovieBtn() {
    var fourthMovie = new Movies(btn4.previousSibling.previousSibling.innerHTML);
    four.push(fourthMovie);
    var xyz3 = JSON.stringify(four);
    window.localStorage.setItem("four", xyz3);
}