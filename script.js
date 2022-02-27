function addEducation() {
  console.log("entered");

  const div = document.createElement("div");
  // div.innerHTML = "<label>Title</label>";
  // const titleInput = document.createElement("input");
  // div.appendChild(titleInput);
  // div.innerHTML = "<label>School</label>";
  // const schoolInput = document.createElement("input");
  // div.appendChild(schoolInput);
  // div.innerHTML = "<label>Percentage</label>";
  // const percentageInput = document.createElement("input");
  // div.appendChild(percentageInput);

  let title =
    '<div class="formInput"><label>Title</label><input type="text"></div>';

  let school =
    '<div class="formInput"><label>School</label><input type="text"></div>';

  let percentage =
    '<div class="formInput"><label>Percentage</label><input type="text"></div>';

  div.innerHTML = title + school + percentage;
  div.classList.add("educationEntry");
  // div.appendChild(title);

  // div.appendChild(school);
  // div.appendChild(percentage);

  document.getElementById("educationData").appendChild(div);
}
