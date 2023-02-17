const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/internet-mania.jpg") {
    myImage.setAttribute("src", "images/forms.png");
  } else {
    myImage.setAttribute("src", "images/internet-mania.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = await document.querySelector("h1");

function setUserName() {
    const myName = prompt("hows' ur name, stranger?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `hi ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `hi ${storedName}`;
  }  

myButton.onclick = () => {
    setUserName();
  };
