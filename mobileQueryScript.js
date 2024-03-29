// This Function will show the website not available pop-up to the user
function webNotAvailable(){
    document.getElementById("unavailable-div").style.display = "block";
    setTimeout(hideWebNotAvailable, 3000);
}

// Thus Function should hide the pop-up from the user
function hideWebNotAvailable(){
    document.getElementById("unavailable-div").style.display = "none";
}

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    window.location.href = "mobileVersion.html";
}

$(document).ready(function () {
    $(document).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".up-arrow").css("display", "none");
        }
        else {
            $(".up-arrow").css("display", "block");
        }
    });
});

$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});