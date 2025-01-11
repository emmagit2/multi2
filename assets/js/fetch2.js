let cs2 = document.getElementById("cs2");
let formvar = document.getElementById('contactme');
let defaultValue = +98; 
console.log(formvar.email);
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formvar.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function checkResponse(response){
    // Parse the response as JSON
    let x = JSON.parse(response)
//  let  x = response.valid;
    // Check for a specific result  API returns a field named 'resonspe')
    if (x === true) {
      console.log('Phone number is valid');
      // Call another function or perform further actions here
      handleValidResponse(x);
    } else if (x === false) {
      console.log('Phone number is invalid');
      // Call another function or perform further actions here
      handleInvalidResponse(x);
    } else {
      console.log('Unknown result');
    }
}
// Function to handle a valid response
function handleValidResponse() {
  // Your code to handle a valid response
  if (ValidateEmail(email)) {
    // Email is valid, you can submit the form or perform further actions here.
  console.log("Email is valid. Form can be submitted.");
          // if(!formvar.)

}
  console.log('Handling valid response');



}

// Function to handle an invalid response
function handleInvalidResponse() {
  // Your code to handle an invalid response
  console.log('Handling invalid response');
}


function gethead(x){
  if(cs2.value !== ""){
    var join = `+${defaultValue}${cs2.value}`;
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://neutrinoapi-phone-validate.p.rapidapi.com/phone-validate',
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '5f92af8cfemsh9b663342c266782p1f60cajsn3d58444b249a',
        'X-RapidAPI-Host': 'neutrinoapi-phone-validate.p.rapidapi.com'
      },
      data: {
        number: join
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      checkResponse(response);
      
    });
  }
}

formvar.addEventListener('submit', (e) => {
e.preventDefault();
   gethead(defaultValue);
  

})


function handleData(data) {
  let cs = document.getElementById("countrySelect");
 
  console.log(cs);                                                                                              
    // Access responseData here
    let x;
     const dialingCode = data[0].callingCodes[0];
console.log(dialingCode);
   function updateSelectedValue(){
    defaultValue = cs.value;
    console.log(cs.value);
    x = defaultValue;
    gethead(x);
   }
   cs.addEventListener('change', updateSelectedValue);
    updateSelectedValue();
    if(defaultValue == null){
     defaultValue = +98;
  
    }
  
    
    // cs.addEventListener("change", function(){
     
    //   const selectedDialingCode = this.value;
   
    //  const join = `${defaultValue} `;
    //  checkdata = join;
   
      
      
  
    // })
  }
  
    $.ajax({
        url: "https://restcountries.com/v2/all",
        method: "GET",
        dataType: "json",
        success: function (data) {
          const $select = $("#countrySelect"); // Get the select element
      
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
      