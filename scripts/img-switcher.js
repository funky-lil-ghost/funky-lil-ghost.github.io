const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/internet-mania.jpg") {
    myImage.setAttribute("src", "images/forms.png");
  } else {
    myImage.setAttribute("src", "images/internet-mania.jpg");
  }
};