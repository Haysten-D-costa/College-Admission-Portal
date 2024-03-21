function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function addEducationField() {
  var educationFields = document.getElementById('education_qualification');
  var newField = document.createElement('div');
  newField.innerHTML =
    '<div class="sub-container">'+
      '<select name="degree[]" id="degree" class="ip-field">'+
        '<option value="option1" selected>Degree</option>'+
        '<option value="option2">Option 1</option>'+
        '<option value="option3">Option 2</option>'+
        '<option value="option4">Option 3</option>'+
      '</select>'+
      '<input type="text" name="Specification[]" id="" class="ip-field" placeholder="Name of the Program/Specification">'+
      '<input type="text" name="Institute[]" id="" class="ip-field" placeholder="Name of the Institute">'+
      '<input type="text" name="year[]" id="" class="ip-field" placeholder="Month & Year of Passing">'+
      '<input type="text" name="Aggregate[]" id="" class="ip-field" placeholder="Aggregate % / CGPA / AW *">'+
      '<button type="button" class="cross-button" onclick="removeWorkField(this)">X</button>'+
    '</div>';
  educationFields.appendChild(newField);
}
function removeEducationField(element) {
  var fieldToRemove = element.parentNode.parentNode;
  fieldToRemove.parentNode.removeChild(fieldToRemove);
}
function addWorkField() {
  var WorkField = document.getElementById('work_experience');
  var newField = document.createElement('div');
  newField.innerHTML = 
    '<div class="sub-container">'+
      '<input type="text" name="company[]" id="" class="ip-field" placeholder="Company / Firm Name *">'+
      '<input type="text" name="Employment[]" id="" class="ip-field" placeholder="Employment title">'+
      '<p>From </p><input type="date" name="from_date[]" id="" class="ip-field">'+
      '<p>To </p><input type="date" name="to_date[]" id="" class="ip-field">'+
      '<input type="number" name="duration[]" id="" class="ip-field" placeholder="Duration">'+
      '<button type="button" class="cross-button" onclick="removeWorkField(this)">X</button>'+
    '</div>';
  WorkField.appendChild(newField);

 
}
function removeWorkField(element) {
  var fieldToRemove = element.parentNode.parentNode;
  fieldToRemove.parentNode.removeChild(fieldToRemove);
}
function addEExamField() {
  var EExamField = document.getElementById('EExamField');
  var newField = document.createElement('div');
  newField.innerHTML = 
    '<div class="sub-container">'+
      '<input type="text" name="Exam[]" id="" class="ip-field" placeholder="Examination name">'+
      '<p>Exam date </p>'+
      '<input type="date" name="e_date[]" id="" class="ip-field">'+
      '<input type="text" name="Max_score[]" id="" class="ip-field" placeholder="Maximum score">'+
      '<input type="text" name="score[]" id="" class="ip-field" placeholder="Score obtained">'+
      '<button type="button" class="cross-button" onclick="removeEExamField(this)">X</button>'+
    '</div>';
  EExamField.appendChild(newField);
}
function removeEExamField(element) {
  var fieldToRemove = element.parentNode.parentNode;
  fieldToRemove.parentNode.removeChild(fieldToRemove);
}