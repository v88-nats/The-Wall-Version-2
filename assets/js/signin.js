$(document).ready(function() {
    $("body").on("submit", "#signin_form", function(event) {
        event.preventDefault();
        const inputs = $("input");
        validateForm(inputs);

        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        if (email === "nnardo@village88.com" && password === "123456") {
            window.location.assign("index.html");
        } else {
            alert("Please enter a valid email and password!");
        }
    });
});
