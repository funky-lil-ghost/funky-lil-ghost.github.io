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

function wait_for_heading () {

  if ((document.querySelector("h1")).length) {
    let myHeading = document.querySelector("h1");

    if (!localStorage.getItem("name")) {
      setUserName();
    } else {
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `hi ${storedName}`;
    }

  } else {
    setTimeout(wait_for_heading, 300); // try again in 300 milliseconds
  }
}

wait_for_heading();


function setUserName() {
    const myName = prompt("hows' ur name, stranger?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `hi ${myName}`;
    }
  }

myButton.onclick = () => {
    setUserName();
  };
