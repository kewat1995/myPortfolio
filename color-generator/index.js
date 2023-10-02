const generateBtn = document.getElementById("generateBtn");

const randomNumbercode = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex.length);

    hexcolor += hex[random];

    // console.log(random)
  }
  return hexcolor;
};

const colorPlatteGenerator = () => {
  const colorPlatte = [];
  for (let i = 0; i < 4; i++) {
    colorPlatte.push(randomNumbercode());
  }
  return colorPlatte;
};

const rendercolorGenerator = () => {
  const colorContainer = document.querySelector(".colors-container");
  colorContainer.innerHTML = "";
  const colorPlatte = colorPlatteGenerator();
  colorPlatte.forEach((color, i) => {
    const element = document.createElement("div");
    element.id = `color${i + 1}`;
    element.style.background = color;
    element.className = "colorBox";
    
    const colorTag = document.createElement("p");
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorTag.innerHTML = color;
    element.appendChild(colorTag);
    colorContainer.appendChild(element);
  });

  const copyClipBoard = (id) => {
    const el = document.getElementById(id);
    navigator.clipboard
      .writeText(el.innerText)
      .then(() => {alert("copy to clipBoard")})
      .catch(() => {alert("could not copy")});

    // console.log(el);
  };

  const colorTags = document.querySelectorAll(".colorTag");

  colorTags.forEach((colorTag, i) => {
    colorTag.addEventListener("click", () => copyClipBoard(`color${i + 1}Tag`));
  });
  // console.log('colorTags',colorTags)
};

generateBtn.addEventListener("click", rendercolorGenerator);
