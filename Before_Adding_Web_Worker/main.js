// Function to calculate sum of all the numbers from 1 to 10 billion
function calculateSum() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;

        // Update progress every 10 million iterations
        if (i % 10000000 === 0) {
            var progress = Math.round((i / 10000000000) * 100);
            document.getElementById("progress-bar").value = progress;
        }
    }
    return sum;
}



// Function to start the calculation
function startCalculation() {
    let sum = calculateSum();
    console.log(sum);
    document.querySelector(".output").style.display = "block";
    document.querySelector(".output").innerHTML = `Result: ${sum}`;

}

// Function to change the background color
function changeBackGroundColor() {
    // Generate random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.querySelector('.main-container').style.backgroundColor = randomColor;
}