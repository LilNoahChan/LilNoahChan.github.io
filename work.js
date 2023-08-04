function updateCaptionOnHover() {
    let schoolImage = document.getElementById("schoolImage");
    let caption = document.getElementById("caption");

    schoolImage.addEventListener("mouseover", function () {
        caption.innerHTML = "Image of school!";
    });

    schoolImage.addEventListener("mouseout", function () {
        caption.innerHTML = '<img src="https://www.svgrepo.com/show/59066/location-point.svg" id="pinpoint">Staten Island Tech |<a href="https://www.siths.org" target="_blank"> School Website!</a>';
    });
}

updateCaptionOnHover();

function showAlertOnClick() {
    let heading = document.querySelector(".child h1");
    heading.addEventListener("click", function () {
        alert("This is the work and school history of ASC Particpant, Noah Chan!");
    });
}

showAlertOnClick();