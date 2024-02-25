alert("WORK IN PROGRESS")

let greetingMsg = new Date();

let myText = document.getElementById("about-text");





document.getElementById("greet").style.marginBottom = "2.1rem";

if (greetingMsg.getHours() < 12) {

  document.getElementById("greet").innerText = "GOOD MORNING ,";
  document.getElementById("greet").style.color = "#69ccf3";

}

if (greetingMsg.getHours() > 11) {

  document.getElementById("greet").innerText = "GOOD AFTERNOON ,";
  document.getElementById("greet").style.color = "#f99369";

}

if (greetingMsg.getHours() > 16) {

  document.getElementById("greet").innerText = "GOOD EVENING ,";
  document.getElementById("greet").style.color = "#c93f63";


}



function myDetails() {

  let perInfo = document.getElementById("personalinfo");



  if (perInfo.innerText == "Education") {

    perInfo.innerText = "Personal Info";

    myText.style.color = "var(--textcl)";
    myText.style.marginTop = "2.1rem";

    myText.innerHTML = `BCA [ Bachelor's Of Computer Application ] 
  <br> Bhola Bhai Patel Colleage Of Computer Studies , Gandhinagar. 
  <br>( March 2022 ) 
  <br><br><br> Front - End Web Development Course <br> TOPS Technologies , Ahmedabad. 
  <br> ( Pursuing )`;

  }

  else {

    perInfo.innerText = "Education";

    myText.style.color = "var(--textcl)";
    myText.style.marginTop = "2.1rem";

    myText.innerHTML = `Age : 22 
    <br><br> Mobile No : +91 9558172253 
    <br><br> City : Kalol , Gujarat. `;

  }


}




