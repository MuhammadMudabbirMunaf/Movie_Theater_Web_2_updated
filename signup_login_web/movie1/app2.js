function movieOneShow() {
    var cont = document.getElementById("container").style.display = "block";
    var cont2 = document.getElementById("container2").style.display = "none";
}
function bookSeat() {
    var cont2 = document.getElementById("container2").style.display = "block";
    var cont = document.getElementById("container").style.display = "none";
}

var gettingId = document.getElementById("textOne");

function Seats (movieName, seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8, seat9, seat10
    , seat11, seat12, seat13, seat14, seat15, seat16, seat17, seat18, seat19, seat20
    , seat21, seat22, seat23, seat24, seat25, seat26, seat27, seat28, seat29, seat30
    , seat31, seat32, seat33, seat34, seat35, seat36, seat37, seat38, seat39, seat40
    , seat41, seat42, seat43, seat44, seat45, seat46, seat47, seat48) 
    {
        this.movieName = movieName;
        this.seat1 = seat1;
        this.seat2 = seat2;
        this.seat3 = seat3;
        this.seat4 = seat4;
        this.seat5 = seat5;
        this.seat6 = seat6;
        this.seat7 = seat7;
        this.seat8 = seat8;
        this.seat9 = seat9;
        this.seat10 = seat10;
        this.seat11 = seat11;
        this.seat12 = seat12;
        this.seat13 = seat13;
        this.seat14 = seat14;
        this.seat15 = seat15;
        this.seat16 = seat16;
        this.seat17 = seat17;
        this.seat18 = seat18;
        this.seat19 = seat19;
        this.seat20 = seat20;
        this.seat21 = seat21;
        this.seat22 = seat22;
        this.seat23 = seat23;
        this.seat24 = seat24;
        this.seat25 = seat25;
        this.seat26 = seat26;
        this.seat27 = seat27;
        this.seat28 = seat28;
        this.seat29 = seat29;
        this.seat30 = seat30;
        this.seat31 = seat31;
        this.seat32 = seat32;
        this.seat33 = seat33;
        this.seat34 = seat34;
        this.seat35 = seat35;
        this.seat36 = seat36;
        this.seat37 = seat37;
        this.seat38 = seat38;
        this.seat39 = seat39;
        this.seat40 = seat40;
        this.seat41 = seat41;
        this.seat42 = seat42;
        this.seat43 = seat43;
        this.seat44 = seat44;
        this.seat45 = seat45;
        this.seat46 = seat46;
        this.seat47 = seat47;
        this.seat48 = seat48;
}

let seats = new Seats (gettingId.textContent, "empty", "empty", "empty", "empty", "empty", 
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", 
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", 
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", 
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", 
"empty", "empty", "empty");

let seatArr = [];

let seatId = ["rBtns1", "rBtns2", "rBtns3", "rBtns4", "rBtns5", "rBtns6", "rBtns7", "rBtns8", "rBtns9", 
"rBtns10", "rBtns11", "rBtns12", "rBtns13", "rBtns14", "rBtns15", "rBtns16", "rBtns17", "rBtns18", "rBtns19", 
"rBtns20", "rBtns21", "rBtns22", "rBtns23", "rBtns24", "rBtns25", "rBtns26", "rBtns27", "rBtns28", "rBtns29", 
"rBtns30","rBtns31", "rBtns32", "rBtns33", "rBtns34", "rBtns35", "rBtns36", "rBtns37", "rBtns38", "rBtns39", 
"rBtns40","rBtns41", "rBtns42", "rBtns43", "rBtns44", "rBtns45", "rBtns46", "rBtns47", "rBtns48"]

for (var i = 0; i < seatId.length; i++) {
    var a = seatId[i];
    var b = document.getElementById(a);
    if (b.style.backgroundColor === "blue") {
        b.style.backgroundColor = "yellow";
        seatArr.push(seats);
        var settingItems = window.localStorage.setItem("reservingSeats for " + gettingId.textContent, JSON.stringify(seatArr));
    }
    if (b.style.backgroundColor === "yellow") {
        b.style.backgroundColor = "blue";
    }
}

function whenSelected1() {
    var a1 = document.getElementById("rBtns1").style.backgroundColor = "yellow";
}
function whenSelected2() {
    var a2 = document.getElementById("rBtns2").style.backgroundColor = "yellow";
}
function whenSelected3() {
    var a3 = document.getElementById("rBtns3").style.backgroundColor = "yellow";
}
function whenSelected4() {
    var a4 = document.getElementById("rBtns4").style.backgroundColor = "yellow";
}
function whenSelected5() {
    var a5 = document.getElementById("rBtns5").style.backgroundColor = "yellow";
}
function whenSelected6() {
    var a6 = document.getElementById("rBtns6").style.backgroundColor = "yellow";
}
function whenSelected7() {
    var a7 = document.getElementById("rBtns7").style.backgroundColor = "yellow";
}
function whenSelected8() {
    var a8 = document.getElementById("rBtns8").style.backgroundColor = "yellow";
}
function whenSelected9() {
    var a9 = document.getElementById("rBtns9").style.backgroundColor = "yellow";
}
function whenSelected10() {
    var a10 = document.getElementById("rBtns10").style.backgroundColor = "yellow";
}
function whenSelected11() {
    var a11 = document.getElementById("rBtns11").style.backgroundColor = "yellow";
}
function whenSelected12() {
    var a12 = document.getElementById("rBtns12").style.backgroundColor = "yellow";
}
function whenSelected13() {
    var a13 = document.getElementById("rBtns13").style.backgroundColor = "yellow";
}
function whenSelected14() {
    var a14 = document.getElementById("rBtns14").style.backgroundColor = "yellow";
}
function whenSelected15() {
    var a15 = document.getElementById("rBtns15").style.backgroundColor = "yellow";
}
function whenSelected16() {
    var a16 = document.getElementById("rBtns16").style.backgroundColor = "yellow";
}
function whenSelected17() {
    var a17 = document.getElementById("rBtns17").style.backgroundColor = "yellow";
}
function whenSelected18() {
    var a18 = document.getElementById("rBtns18").style.backgroundColor = "yellow";
}
function whenSelected19() {
    var a19 = document.getElementById("rBtns19").style.backgroundColor = "yellow";
}
function whenSelected20() {
    var a20 = document.getElementById("rBtns20").style.backgroundColor = "yellow";
}
function whenSelected21() {
    var a21 = document.getElementById("rBtns21").style.backgroundColor = "yellow";
}
function whenSelected22() {
    var a22 = document.getElementById("rBtns22").style.backgroundColor = "yellow";
}
function whenSelected23() {
    var a23 = document.getElementById("rBtns23").style.backgroundColor = "yellow";
}
function whenSelected24() {
    var a24 = document.getElementById("rBtns24").style.backgroundColor = "yellow";
}
function whenSelected25() {
    var a25 = document.getElementById("rBtns25").style.backgroundColor = "yellow";
}
function whenSelected26() {
    var a26 = document.getElementById("rBtns26").style.backgroundColor = "yellow";
}
function whenSelected27() {
    var a27 = document.getElementById("rBtns27").style.backgroundColor = "yellow";
}
function whenSelected28() {
    var a28 = document.getElementById("rBtns28").style.backgroundColor = "yellow";
}
function whenSelected29() {
    var a29 = document.getElementById("rBtns29").style.backgroundColor = "yellow";
}
function whenSelected30() {
    var a30 = document.getElementById("rBtns30").style.backgroundColor = "yellow";
}
function whenSelected31() {
    var a31 = document.getElementById("rBtns31").style.backgroundColor = "yellow";
}
function whenSelected32() {
    var a32 = document.getElementById("rBtns32").style.backgroundColor = "yellow";
}
function whenSelected33() {
    var a33 = document.getElementById("rBtns33").style.backgroundColor = "yellow";
}
function whenSelected34() {
    var a34 = document.getElementById("rBtns34").style.backgroundColor = "yellow";
}
function whenSelected35() {
    var a35 = document.getElementById("rBtns35").style.backgroundColor = "yellow";
}
function whenSelected36() {
    var a36 = document.getElementById("rBtns36").style.backgroundColor = "yellow";
}
function whenSelected37() {
    var a37 = document.getElementById("rBtns37").style.backgroundColor = "yellow";
}
function whenSelected38() {
    var a38 = document.getElementById("rBtns38").style.backgroundColor = "yellow";
}
function whenSelected39() {
    var a39 = document.getElementById("rBtns39").style.backgroundColor = "yellow";
}
function whenSelected40() {
    var a40 = document.getElementById("rBtns40").style.backgroundColor = "yellow";
}
function whenSelected41() {
    var a41 = document.getElementById("rBtns41").style.backgroundColor = "yellow";
}
function whenSelected42() {
    var a42 = document.getElementById("rBtns42").style.backgroundColor = "yellow";
}
function whenSelected43() {
    var a43 = document.getElementById("rBtns43").style.backgroundColor = "yellow";
}
function whenSelected44() {
    var a44 = document.getElementById("rBtns44").style.backgroundColor = "yellow";
}
function whenSelected45() {
    var a45 = document.getElementById("rBtns45").style.backgroundColor = "yellow";
}
function whenSelected46() {
    var a46 = document.getElementById("rBtns46").style.backgroundColor = "yellow";
}
function whenSelected47() {
    var a47 = document.getElementById("rBtns47").style.backgroundColor = "yellow";
}
function whenSelected48() {
    var a48 = document.getElementById("rBtns48").style.backgroundColor = "yellow";
}