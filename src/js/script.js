
const nextBtn = document.getElementById("subBtn");
const nextbutton = document.getElementById("nextbutton");
const emSpan=document.getElementById('emSpan');
const em=document.getElementById('email');

nextBtn.addEventListener('click',()=>{
  event.preventDefault();
  const email=document.getElementById('email');
  const password=document.getElementById('password');
  const fullName=document.getElementById('fullName');
  const username=document.getElementById('username');
  const phone=document.getElementById('phone');
  const street=document.getElementById('street');
  const city=document.getElementById('city');

  const country=document.getElementById('country');
  const pincode=document.getElementById('pin_code');
  const companyName=document.getElementById('companyName')
  const comapanyRegistrationNumber=document.getElementById('companyRegistrationNumber')
  const startupAge=document.getElementById('startupAge');
  const gstinNumber=document.getElementById('gstinNumber');
  const majorStakeHolders=document.getElementById('majorStakeHolders');
  const companyUrl=document.getElementById('companyWebsite')
  const ownershipType=document.getElementById('ownership_type')
  const dillutionDetails=document.getElementById('dillutionDetails');
  const undertaking=document.getElementById('undertaking');
  const termsAndConditions=document.getElementById('termsAndConditions')

}); 
em.addEventListener('change',(event)=>{
  console.log('hello');
  emSpan.innerHTML='';
})