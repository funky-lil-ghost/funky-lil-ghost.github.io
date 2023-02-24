
setTimeout(insertNav, 1000)

function insertNav() {
  let myHeading = document.querySelector("h1");
  let myButton = document.querySelector("button.changeuser");
  myButton.onclick = () => {
    setUserName();
  };

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
}



