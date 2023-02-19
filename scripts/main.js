
let myHeading = document.querySelector("h1");

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


let myButton = document.querySelector("button");

  myButton.onclick = () => {
    setUserName();
  };
