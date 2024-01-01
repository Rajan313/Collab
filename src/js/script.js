const nextBtn = document.getElementById('subBtn');
// const nextbutton = document.getElementById("nextbutton");
// const emSpan = document.getElementById("emSpan");
// const em = document.getElementById("email");

// nextBtn.addEventListener("click", () => {
//   event.preventDefault();

//   const companyName = document.getElementById("companyName");
//   const comapanyRegistrationNumber = document.getElementById(
//     "companyRegistrationNumber"
//   );
//   const startupAge = document.getElementById("startupAge");
//   const gstinNumber = document.getElementById("gstinNumber");
//   const majorStakeHolders = document.getElementById("majorStakeHolders");
//   const companyUrl = document.getElementById("companyWebsite");
//   const ownershipType = document.getElementById("ownership_type");
//   const dillutionDetails = document.getElementById("dillutionDetails");
//   const undertaking = document.getElementById("undertaking");
//   const termsAndConditions = document.getElementById("termsAndConditions");
// });
// em.addEventListener("change", (event) => {
//   console.log("hello");
//   emSpan.innerHTML = "";
// });
// nextBtn.addEventListener('click', () => {

//Index page function which redirect to other pages

function openSelectedPage() {
  var userType = document.querySelector('input[name="userType"]:checked');
  if (userType) {
    var url;
    switch (userType.value) {
      case '1':
        url = 'src/Entrepreneur_registration.html';
        break;
      case '2':
        url = 'src/Freelancer_registration.html';
        break;
      case '3':
        url = 'src/Investor_Registration.html';
        break;
      default:
        url = 'index.html';
    }
    window.location.href = url;
  } else {
    alert('Please select a user type before submitting.');
  }
}
function freelancer_validation() {
  
  if(login_validation()&& personal_communication()&&  Freelancer_remaining()){
    window.alert("Form Submitted Sucessfully");
  }
}
function entrepreneur_validation() {
 
 
  if(login_validation()&& personal_communication()&&  Entrepreneur_remaining()){
    window.alert("Form Submitted Sucessfully");
  }
}
function investor_validation() {
  if(login_validation()&& personal_communication()&& Investor_remaining()){
    window.alert("Form Submitted Sucessfully");
  }
}

function login_validation() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    window.alert('Invalid email address');
    
  }

  // Password validation
  var passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password.value) && password.value.length < 8) {
    window.alert(
      'Password must be at least 8 characters and include at least one special character'
    );
    
  }
  return true;
  //alert('Form submitted successfully!');
}
function personal_communication() {
  //const fullName = document.getElementById('fullName');
  //const username = document.getElementById('username');
  const phone = document.getElementById('phone');
  //const street = document.getElementById('street');
  //const city = document.getElementById('city');
  //const country = document.getElementById('country');
  //const pincode = document.getElementById('pin_code');

  var mobileRegex = /^\+91\d{10}$/;
  if (!mobileRegex.test(phone.value)) {
    window.alert(
      'Mobile number must be of ten digits with the starting country code +91'
    );
    return;
  }

  return true;
}

function Entrepreneur_remaining() {
  const companyName = document.getElementById('companyName');
  const comapanyRegistrationNumber = document.getElementById(
    'companyRegistrationNumber'
  );
  const dateofreg = document.getElementById('dateofRegistration');
  const startupAge = document.getElementById('startupAge');
  const gstinNumber = document.getElementById('gstinNumber');
  const majorStakeHolders = document.getElementById('majorStakeHolders');
  const companyUrl = document.getElementById('companyWebsite');
  const ownershipType = document.getElementById('ownership_type');
  const dilutionDetails = document.getElementById('dilutionDetails');
  const undertaking = document.getElementById('undertaking');
  const termsAndConditions = document.getElementById('termsAndConditions');

  if(companyName.value.trim()==="")
  {
    window.alert("Enter Company Name");
  }
   if(comapanyRegistrationNumber.value.trim()==="")
   {
    window.alert("Enter Registration Number");
   }
   if(!isDateBeforeToday(dateofreg)){
       window.alert("Date should be before current Date");
   }
   if(gstnumber.value.trim!==""){
    window.alert("GSTIN number can't be empty");
   }
   const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
   if (!gstinRegex.test(gstnumber.value)&&gstnumber.value.trim!=="") {
  
    window.alert("Invalid GSTIN");
   
   }
   if(companyUrl.value.trim()==="")
  {
    window.alert("Enter the Correct URL");
  }




  if(undertaking.checked){
    window.alert("Please Agree to Undertaking");
  }
  if(termsAndConditions.checked){
   window.alert("Please Agree to Terms and Condition");
 }

 return true;
}


function Freelancer_remaining() {
  const jobTitle = document.getElementById('jobTitle');
  const skills = document.getElementById('skills');
  const portfolio = document.getElementById('portfolio');
  const linkdln = document.getElementById('linkdln');
  const experience = document.getElementById('experience');
  const workHours = Number(document.getElementById('workHours').value);
  const bankName = document.getElementById('bank_name');
  const accountNumber = document.getElementById('account_number');
  const IFSC = document.getElementById('IFSC_code');
  const undertaking = document.getElementById("undertaking");
  const terms = document.getElementById('terms');
   
  if(skills.value.trim()==="")
  {
    window.alert("Enter Skill");

  }
  if(portfolio.value.trim()===""||linkdln.value.trim()==="")
  {
    window.alert("Enter the Link");
  }
    if(workHours>6)
    {
      window.alert("Work Hours should be more then 6hr ");
    }
  
     if(bankName.value.trim()===""||accountNumber.value.trim()==="")
     {
       window.alert("Enter Bank Details");
     }
     
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
   if (!ifscRegex.test(ifscCode)) {
    window.alert("Invalid IFSC code");
   }

  if(undertaking.checked){
    window.alert("Please Agree to Undertaking");
  }
  if(terms.checked){
   window.alert("Please Agree to Terms and Condition");
 }

 return true;
}
function Investor_remaining() {
   const companyName = document.getElementById('companyName');
  const gstnumber = document.getElementById('gstNumber');
  const registratinDetails = document.getElementById('registrationDetails');
  const legalLicense = document.getElementById('legalLicense');
  const minInvestment = Number(document.getElementById('minInvestment').value);
  const maxInvestment = Number(document.getElementById('maxInvestment').value);
  const undertaking = document.getElementById('undertaking');
  const termsAndConditions = document.getElementById('termsAndConditions');
   

  if(companyName.value.trim()==="")
  {
    window.alert("Enter Company Name");
  }
   if(gstnumber.value.trim!==""){
    window.alert("GSTIN number can't be empty");
   }
   const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
   if (!gstinRegex.test(gstnumber.value)&&gstnumber.value.trim!=="") {
  
    window.alert("Invalid GSTIN");
   
   }

   if(legalLicense.value.trim()==="")
   {
     window.alert("Enter License Number");
   }
 
 
   if (minInvestment <= 100000) {
    
      window.alert("Minimum Investment should be Rs 1,00,000");
   
   }
  
   if(maxInvestment<minInvestment)
   {
    window.alert("Maximum Investment is less than Minimum Investment");
   }

  
   if(undertaking.checked){
     window.alert("Please Agree to Undertaking");
   }
   if(termsAndConditions.checked){
    window.alert("Please Agree to Terms and Condition");
  }

  return true;

}

function isDateBeforeToday(inputDate) {
  // Create a new Date object for the input date
  const inputDateObject = new Date(inputDate);

  // Create a new Date object for the current date
  const currentDateObject = new Date();

  // Check if the input date is a valid date and is before the current date
  return (
      inputDateObject.toString() !== "Invalid Date" &&
      inputDateObject < currentDateObject
  );
}