

let icon = document.querySelector(".icon");
let close1 = document.querySelector(".close");
let circules = document.querySelector(".circules");

let after_header =document.querySelector(".after_header");
let right_section =document.querySelector(".right_section");
let first =document.querySelector(".first");
let second =document.querySelector(".second");
let third =document.querySelector(".third");
let forth =document.querySelector(".forth");


let span_one =document.querySelector(".span_one");
let span_two =document.querySelector(".span_two");
let span_three =document.querySelector(".span_three");
let span_four =document.querySelector(".span_four");

// hsl(12, 88%, 59%)
span_one.onclick=function(){
        span_one.style.backgroundColor = "hsl(12, 88%, 59%)";
        span_two.style.backgroundColor = "white";
        span_three.style.backgroundColor = "white";
        span_four.style.backgroundColor = "white";
        first.style.display = "block";
        second.style.display = "none";
        third.style.display = "none";
        forth.style.display = "none";
        }

span_two.onclick=function(){
        span_one.style.backgroundColor = "white";
        span_two.style.backgroundColor = "hsl(12, 88%, 59%)";
        span_three.style.backgroundColor = "white";
        span_four.style.backgroundColor = "white";
        first.style.display = "none";
        second.style.display = "block";
        third.style.display = "none";
        forth.style.display = "none";
        }

span_three.onclick=function(){
        span_one.style.backgroundColor = "white";
        span_two.style.backgroundColor = "white";
        span_three.style.backgroundColor = "hsl(12, 88%, 59%)";
        span_four.style.backgroundColor = "white";
        first.style.display = "none";
        second.style.display = "none";
        third.style.display = "block";
        forth.style.display = "none";
        }
span_four.onclick=function(){
        span_one.style.backgroundColor = "white";
        span_two.style.backgroundColor = "white";
        span_three.style.backgroundColor = "white";
        span_four.style.backgroundColor = "hsl(12, 88%, 59%)";
        first.style.display = "none";
        second.style.display = "none";
        third.style.display = "none";
        forth.style.display = "block";
        }



let overalConttainer = document.querySelector(".overalConttainer");


icon.onclick=function(){
        after_header.style.display = "flex";
        icon.style.display = "none";
        right_section.style.display = "none";
        close1.style.display = "flex";
        overalConttainer.style.backgroundColor="rgba(92, 92, 92, 0.1)";

}

close1.onclick=function(){
        after_header.style.display = "none";
        icon.style.display = "flex";
        close1.style.display = "none";
        right_section.style.display = "flex";
        overalConttainer.style.backgroundColor="transparent";

}







let emaiInput = document.querySelector(".emaiInput");
let error = document.querySelector(".error");
let btn = document.querySelector(".btn");


let valid = /\w+@\w+.\w+/i;



error.style.display= "none";

btn.onclick=function(){
        if(emaiInput.value.match(valid))
        {
                console.log(emaiInput.value);
                emaiInput.value ="";
                console.log("valid");
                error.style.display= "none";
        }

        else
        {
                console.log("not valid");
                console.log(emaiInput.value);
                error.style.display= "flex";
        }
}








function displayWindowSize(){
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        
        // Display result inside a div element
        // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
        if (w > 767){
                icon.style.display = "none";


                first.style.display = "block";
                second.style.display = "block";
                third.style.display = "block";
                forth.style.display = "block";

        }
        else{
                icon.style.display = "flex";


                first.style.display = "none";
                second.style.display = "block";
                third.style.display = "none";
                forth.style.display = "none";
                span_one.style.backgroundColor = "white";
                span_two.style.backgroundColor = "hsl(12, 88%, 59%)";
                span_three.style.backgroundColor = "white";
                span_four.style.backgroundColor = "white";
        }
}
        
    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", displayWindowSize);
    
    // Calling the function for the first time
    displayWindowSize();
  




