let GREETMSG = new Date();

document.getElementById("greet").style.marginBottom = "2.1rem";

let METEXT = document.getElementById("about-text");



if (GREETMSG.getHours() < 12) {
  document.getElementById("greet").innerText = "GOOD MORNING ,";
  document.getElementById("greet").style.color = "#69ccf3";
}

if (GREETMSG.getHours() > 11) {
  document.getElementById("greet").innerText = "GOOD AFTERNOON ,";
  document.getElementById("greet").style.color = "#f99369";
}

if (GREETMSG.getHours() > 16) {
  document.getElementById("greet").innerText = "GOOD EVENING ,";
  document.getElementById("greet").style.color = "#c93f63";

}


function EDU() {

  METEXT.innerHTML = `BCA [ Bachelor's Of Computer Application ] 
  <br> Bhola Bhai Patel Colleage Of Computer Studies , Gandhinagar. 
  <br>( March 2022 ) 
  <br><br><hr><br> Front - End Web Development Course <br> TOPS Technologies , Ahmedabad. 
  <br> ( Pursuing )`;

}

function PERINFO() {

  METEXT.innerHTML = `Age : 22 
  <br><br> Mobile No : +91 9558172253 
  <br><br> City : Kalol , Gujarat. `;

}





