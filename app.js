const innerBox = document.getElementById("inner-box");
const inputs = document.querySelectorAll("input");
const outputCode = document.getElementById("output-code");
const outputButton = document.getElementById("output-button");
const copiedAlert = document.getElementById("copied-alert");
let topLeft = 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;

outputButton.addEventListener("click", copyToClipboard);

for (let input of inputs) {
  input.addEventListener("input", updateOutput);
}

function updateOutput(e) {
  const cornerId = e.target.id;

  switch (cornerId) {
    case "top-left":
      innerBox.style.borderTopLeftRadius = `${e.target.value}px`;
      topLeft = e.target.value;
      break;
    case "top-right":
      innerBox.style.borderTopRightRadius = `${e.target.value}px`;
      topRight = e.target.value;
      break;
    case "bottom-right":
      innerBox.style.borderBottomRightRadius = `${e.target.value}px`;
      bottomRight = e.target.value;
      break;
    default:
      innerBox.style.borderBottomLeftRadius = `${e.target.value}px`;
      bottomLeft = e.target.value;
  }

  outputCode.innerHTML = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
}

function copyToClipboard() {
  let text = outputCode.innerHTML;
  navigator.clipboard.writeText(text);
  console.log(`Content copied to clipboard -- ${text}`);

  copiedAlert.style.opacity = "1";
  setTimeout(() => {
    copiedAlert.style.opacity = "0";
  }, 2000);
}
