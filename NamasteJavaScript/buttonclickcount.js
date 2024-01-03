//interview question count how many times button is clicked

//function eventCount()
// {
//     console.log("Function called");
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click",function xyz() {
//         console.log("Button Clicked", ++count);
//     });
    
// }

// eventCount();

// buttonclickcount.js

function eventCount() {
    let count = 0;
    const clickMeButton = document.getElementById("clickMe");

    if (clickMeButton) {
        // Define the named function for the event listener
        function xyz() {
            console.log("Button Clicked", ++count);

            // Remove the event listener after a certain condition
            if (count >= 3) {
                clickMeButton.removeEventListener("click", xyz);
                console.log("Event listener removed.");
            }
        }

        // Add the event listener
        clickMeButton.addEventListener("click", xyz);
    } else {
        console.error("Element with ID 'clickMe' not found.");
    }
}

eventCount();
