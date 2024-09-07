/* Nav */

let btn=document.querySelector('#btn1');

let btn1=document.querySelector('#btn2');

let btn3=document.querySelector('#btn3');

function btnevent(){
    btn.style.color="#ff004f";
    btn.style.background="white";
    btn.style.cursor="pointer";
}

function btn_mouseout(){

    btn.style.color="white";
    btn.style.background="#ff004f";
}

function btnevent2(){
    btn1.style.color="#ff004f";
    btn1.style.background="white";
    btn1.style.cursor="pointer";
}

function btn_mouseout2(){
    btn1.style.color="white";
    btn1.style.background="#ff004f";
}
/* About */
function btnevent3(){
    btn3.style.color="#ff004f";
    btn3.style.background="white";
    btn3.style.cursor="pointer";
}

function btn_mouseout3(){
    btn3.style.color="white";
    btn3.style.background="#ff004f";
}

btn.addEventListener('mouseover',btnevent);
btn.addEventListener('mouseout',btn_mouseout);

btn1.addEventListener('mouseover',btnevent2);
btn1.addEventListener('mouseout',btn_mouseout2);

btn3.addEventListener('mouseover',btnevent3);
btn3.addEventListener('mouseout',btn_mouseout3);


// Skill Bar



function pythonBar() {
    var i = 0;
  
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
       
      }
    }
  }
}


function HtmlBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function CssBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 78) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


function JSBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar4");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


function CppBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar6");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function ReactBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar5");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function LinuxBar() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar7");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function myInit(){ 
    pythonBar();
    HtmlBar();
    CssBar();
    JSBar();
    CppBar();
    ReactBar();
    LinuxBar();
 
  }

window.addEventListener("load", myInit, true); 



