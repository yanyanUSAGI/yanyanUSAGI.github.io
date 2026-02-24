// toggle between showing and hiding the dropdown content when button is clicked
            function myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            }

            // Close the dropdown if the user clicks outside of it
            window.onclick = function(event) {
              if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
              }
            }
            
            
        function showBrowserSize() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            document.getElementById("sizeInfo").innerHTML = "Width: " + w + "<br>Height: " + h;
        }