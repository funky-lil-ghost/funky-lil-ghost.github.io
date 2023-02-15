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
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("hows' ur name, stranger?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}, what r u here for. hm. explain yoursleff mister`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} what r u here for. hm. explain yoursleff mister`;
  }  

  myButton.onclick = () => {
    setUserName();
  };
