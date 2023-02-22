// Create a new Web Worker
var myWorker = new Worker("worker.js");


// Function to handle messages received from the Web Worker
myWorker.onmessage = function (event) {
    // If the message is a progress update
    if (event.data.type === "progress") {
        // Update the progress bar
        document.getElementById("progress-bar").value = event.data.value;
        document.getElementById("progress-value").innerHTML = `${event.data.value}%`;
    }
    // If the message is the final result
    else if (event.data.type === "result") {
        console.log(event.data.value);
        // Update the result on the page
        document.querySelector(".progress").style.display = "none";
        document.querySelector(".output").style.display = "block";
        document.querySelector(".result").innerHTML = `Result: ${event.data.value}`;
        document.querySelector(".sumBtn").disabled = false;
    }
};

// Function to start the calculation
function startCalculation() {
    // Display the progress-bar
    document.querySelector(".progress").style.display = "block";

    // Disable the output section
    document.querySelector(".output").style.display = "none";

    // Disable the start button
    document.querySelector(".sumBtn").disabled = true;

    // Send a message to the Web Worker to start the calculation
    myWorker.postMessage("start");
}

// Function to change the background color
function changeBackGroundColor() {
    // Generate random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.querySelector('.main-container').style.backgroundColor = randomColor;
}