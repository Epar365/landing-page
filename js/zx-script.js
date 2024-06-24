// window.addEventListener("scroll", function() {
//     var header = document.getElementById("zx-header");
//     var headerRow = header.querySelector(".zx-head-r1");
//     if (window.pageYOffset > 0) {
//         headerRow.style.padding = "0.5rem 0"; // Adjust the padding as needed
//     } else {
//         headerRow.style.padding = "1rem 0"; // Adjust the padding as needed
//     }
// });


var tabButtons = document.querySelectorAll(".zx-tablinks");

for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function (e) {
       
        var tabName = this.dataset.tab;
        
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".zx-tabcontent");
        var allTabButtons = document.querySelectorAll(".zx-tablinks");

        for (var j = 0; j < allTabContent.length; j++) {
            allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
            allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "block";
        this.classList.add("active");

        
    });
}

document.querySelector(".zx-tablinks").click();