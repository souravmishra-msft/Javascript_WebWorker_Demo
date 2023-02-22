// Function to calculate sum of all the numbers from 1 to 10 billion
function calculateSum() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;

        // Update progress every 10 million iterations
        if (i % 10000000 === 0) {
            var progress = Math.round((i / 10000000000) * 100);
            self.postMessage({ type: "progress", value: progress });
        }
    }
    return sum;
}

// Listen for new POST messages (from other scripts)
self.onmessage = (e) => {

    let sum = calculateSum();
    console.log(sum);

    // Send message back to the main script
    self.postMessage({ type: "result", value: sum });
}