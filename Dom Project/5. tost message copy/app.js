// steps

// global variable
let div = null;

// Step 1 - Create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div != null){
      div.remove();
      div = null;
    }
    generateTostMessage(`${output.value} copied`);
  });
}

// Step 2 - Random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateTostMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "tost-message tost-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("tost-message-slide-in");
    div.classList.add("tost-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

// step 3 - collect all necessary references

// step 4 - handle the change button the click event

// step 5 - handle the copy button the click event

// step 6 - activate tost maessage

// step 7 - create dynamic tost message

// step 7 - clear tost message
