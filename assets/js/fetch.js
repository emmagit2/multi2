let responseData;
let checkdata;

let changeEventCounter = 0;
  let defaultValue = null; 
  const form = document.getElementById("contactme");
  let timeoutId = null;
let lname = document.getElementById("lname");
let fname = document.getElementById("fname");
let css = document.getElementById("cs2");

let cs = document.getElementById("country-codes");
console.log(cs.value);
// function enableLoadingState() {
//   validateButton.disabled = true;
//   buttonText.style.display = "none";
//   loadingSpinner.style.display = "inline-block";
// }
// function disableLoadingState() {
//   validateButton.disabled = false;
//   buttonText.style.display = "inline-block";
//   loadingSpinner.style.display = "none";
// }

function handleData(data) {
  // Access responseData here
  let x;
   const dialingCode = data[0].callingCodes[0];

 function updateSelectedValue(){
  defaultValue = cs.value;
 }
 cs.addEventListener('change', updateSelectedValue);
  updateSelectedValue();
  if(defaultValue == null){
   defaultValue = +98;

  }
  console.log(cs.value);
    checkdatar(checkdata);
  
  // cs.addEventListener("change", function(){
   
  //   const selectedDialingCode = this.value;
 
  //  const join = `${defaultValue} `;
  //  checkdata = join;
 
    
    

  // })
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
 function checkdatar(checkdata){
  let email = document.getElementById('email');
 

  const initialFormData = {
    email: email.value,
    fname: fname,
    lname: lname
  };
 
  if(css.value !== ""){
    let number = `+${checkdata}${css.value}`;
    const apiUrl = `https://api.api-ninjas.com/v1/validatephone?number=${encodeURIComponent(number)}`;
    const apiKey = 'YNfPPUWNlVOdhDKtEcDhCg==8UONHdRSTZriZueG';
    const header = new Headers({
      'X-Api-Key' : apiKey,
      'content-Type': 'application/json',
    });
   fetch(apiUrl,{
    method: 'GET',
    headers: header,
   })
   .then(response => {
    if(!response.ok){
      throw new Error('network response was not ok');
    }
    return response.json();
   })
   .then(result => {
    const isValid = result.is_valid;
    const format = result.format_national;
    const country_code = result.country_code;
    console.log(format, country_code);
    if(isValid){
     if(isValidEmail || fname.value !== "" || lname.name !== ""){
  $.ajax({
    url: 'index.php', // Replace with your form data endpoint
    type: 'POST', // Use POST method to send form data
    data: initialFormData, // Send the initial form data as an object
    dataType: 'json',
    success: function (formDataResponse) {
      // Handle the success response from sending initial form data
      console.log('Initial form data sent successfully:', formDataResponse);
    },
    error:function(formDataError){
      console.error('Error sending initial form data:', formDataError);
    }
  });
     }
    }else{
      alert("Invalid Phone Number");
    }
   })
   .catch(error => {
    console.error('Fetch Error:', error);
    console.log(false);
   
  
  });

   }





 }
 form.addEventListener("submit", function(e){
  e.preventDefault();
  checkdatar(checkdata);
    form.reset();
 });

 

   // Assuming you want the dialing code of the first country in the response

 
  // You can also use responseData in other ways or functions
  // For example, processData(responseData);

$.ajax({
  url: "https://restcountries.com/v2/all",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const $select = $("#country-codes"); // Get the select element

    // Process and populate the select element
    data.forEach(function (country) {
      // Check if the country object has the necessary properties
      if (country.name && country.callingCodes && Array.isArray(country.callingCodes) && country.callingCodes.length > 0) {
        const countryName = country.name;
        var dialingCode = country.callingCodes[0];
       
        // Create an <option> element for each country code
        const $option = $("<option>");
        $option.val(dialingCode); // Set the value to the dialing code
        $option.text(`${countryName} (+${dialingCode})`); // Display country name and dialing code
        responseData = dialingCode;
        // Append the <option> element to the select element
        $select.append($option);
       
      } else {
        console.error("Invalid country data:", country);
      }
    });
  // Assign the responseData here
  responseData = data;
    
  // Call the callback function to handle the data
  handleData(responseData);
  },
  error: function (error) {
    console.error(error);
  },
});

