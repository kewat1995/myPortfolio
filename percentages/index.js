const calculateForm = document.getElementById("calculate-form");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
  const maxMarks = 400;
  event.preventDefault();

  const formData = new FormData(calculateForm);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });
// console.log(data)
  let totalMarks = data.maths + data.physics + data.hindi + data.english;
  let percentage = (totalMarks / maxMarks) * 100;
  resultEl.innerHTML = `The markes is obtained ${totalMarks} and maximum marks is ${maxMarks}. The percentage is ${percentage}`;
};

