
const links = document.querySelectorAll('.link');
const modal = document.getElementById('modal_show');
const modalContent = document.getElementById('modal_contnt');
// Function to handle link clicks and open the modal with content


        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
           var linkHref = this.getAttribute('href'); // 'this' refers to the clicked link


                // Make an AJAX request to the server
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        // Display the response from the server in the modal content
                        modal.style.display = "block";
                        modalContent.innerHTML = xhr.responseText;
                    }
                };
                xhr.open('GET', linkHref, true);
                xhr.send();
            });
        }