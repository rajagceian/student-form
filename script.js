const stdInfo = document.querySelector('#std-info');

const nameInput = document.getElementById('name');
const regnoInput = document.getElementById('reg_no');
const rollnoInput = document.getElementById('roll_no');
const branchInput = document.getElementById('branch');
const gender = document.getElementById('gender');
const semesterInput = document.getElementById("semester");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById('mobile');
const resetBtn = document.querySelector('#reset');

const remarkName = document.getElementById('remark-name');
const remarkRegno = document.getElementById('remark-regno');
const remarkRollno = document.getElementById('remark-rollno');
const remarkBranch = document.getElementById('remark-branch');
const remarkGender = document.getElementById('remark-gender');
const remarkMobileNo = document.getElementById('remark-mobile');
const remarkSem = document.getElementById('remark-sem');

const remarkEmail = document.getElementById('remark-email');

stdInfo.addEventListener('submit', function (e) {
  // Convert inputs to uppercase and trim
  nameInput.value = nameInput.value.trim().toUpperCase();
  regnoInput.value = regnoInput.value.trim().toUpperCase();
  rollnoInput.value = rollnoInput.value.trim().toUpperCase();
  branchInput.value = branchInput.value.trim().toUpperCase();
  emailInput.value = emailInput.value.trim();

  let valid = true;

  // Validation
  if (nameInput.value === '') {
    nameInput.classList.add('js-remark');
    remarkName.textContent = 'Please enter name!';
    valid = false;
  }
  if (regnoInput.value === '') {
    regnoInput.classList.add('js-remark');
    remarkRegno.textContent = 'Please enter registration number!';
    valid = false;
  }
  if (rollnoInput.value === '') {
    rollnoInput.classList.add('js-remark');
    remarkRollno.textContent = 'Please enter roll number!';
    valid = false;
  }
  if (branchInput.value === '') {
    branchInput.classList.add('js-remark');
    remarkBranch.textContent = 'Please enter branch!';
    valid = false;
  }
  if (gender.value === '') {
    gender.classList.add('js-remark');
    remarkGender.textContent = 'Please select gender!';
    valid = false;
  }
  if (semesterInput.value === '' || semesterInput.value <= 0) {
    semesterInput.classList.add('js-remark');;
    remarkSem.textContent = 'Please enter a valid semester!';
    valid = false;
  }
  if(mobileInput.value === ''){
    mobileInput.classList.add('js-remark');
    remarkMobileNo.textContent = 'Please enter Mobile no.!';
    valid = false;
  }
  if (emailInput.value === '') {
    emailInput.classList.add('js-remark');
    remarkEmail.textContent = 'Please enter email!';
    valid = false;
  }

  // If any validation failed, prevent submission
  if (!valid) {
    e.preventDefault();
  }
});

nameInput.addEventListener('keydown',()=>{
    nameInput.classList.remove('js-remark');
    remarkName.textContent = '';
});
regnoInput.addEventListener('keydown',()=>{
    regnoInput.classList.remove('js-remark');
    remarkRegno.textContent = '';
});
rollnoInput.addEventListener('keydown',()=>{
    rollnoInput.classList.remove('js-remark');
    remarkRollno.textContent = '';
});
branchInput.addEventListener('keydown',()=>{
    branchInput.classList.remove('js-remark');
    remarkBranch.textContent = '';
});
gender.addEventListener('mouseover',()=>{
    gender.style.cursor='pointer';
    gender.classList.remove('js-remark');
    remarkGender.textContent = '';
});
semesterInput.addEventListener('keydown',()=>{
    semesterInput.classList.remove('js-remark');
    remarkSem.textContent = '';
});
mobileInput.addEventListener('keydown',()=>{
    mobileInput.classList.remove('js-remark');
    remarkMobileNo.textContent='';
});
emailInput.addEventListener('keydown',()=>{
    emailInput.classList.remove('js-remark');
    remarkEmail.textContent = '';
});

resetBtn.addEventListener('click',()=>{
    nameInput.value='';
    regnoInput.value='';
    rollnoInput.value='';
    branchInput.value='';
    gender.value='';
    semesterInput.value='';
    emailInput.value='';
    document.getElementById('query').value='';
});