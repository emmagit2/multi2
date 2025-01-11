// document.addEventListener("DOMContentLoaded", function () {
//     var form = document.getElementById("contactme");
// console.log(contactme);
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         var formData = new FormData(form);

//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "index.php", true);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     // Successful response from server
//                     var response = JSON.parse(xhr.responseText);
//                     alert(response.message);

//                     // Clear the form
//                     form.reset();
//                 } else {
//                     // Error response from server
//                     alert("Error: " + xhr.statusText);
//                 }
//             }
//         };

//         // Send the FormData object to the server
//         xhr.send(formData);
//     });
// });

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "index.php", true);
  xhttp.send();