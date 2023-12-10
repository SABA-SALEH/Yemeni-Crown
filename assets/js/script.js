// Login Script inspired by Codepal https://codepal.ai/live-webpage-generator/query/eAwuGTHS/html-css-javascript-login-button-->

        function openLoginPopup() {
            $('#loginPopup').fadeIn();
        }
 
        function closeLoginPopup() {
            $('#loginPopup').fadeOut();
            document.getElementById("loginPopup").style.display = "none";
        }
 
        $(document).ready(function() {
            $('#loginForm').submit(function(e) {
                e.preventDefault();
                alert('Login successful! Redirecting to Home page.');
                window.location.href = "index.html";
            });
        });

   