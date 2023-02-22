# Simple Javascript application to demonstrate the working of a Web-Worker

## What are Web Worker?

Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null) or fetch (with no such restrictions). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

Reference: [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## Project Overview

In this project, I have two buttons:

1. **Calculate Sum:** This button calculates the sum of all the numbers from 1 to 10 billion. Quite a long-running function.
2. **Change Background:** This button can change the background of this app with a random color.

When you run the index.html file present inside the **Before_Adding_Web_Worker** directory, you would find that once you click the `CALCULATE SUM` button, it blocks all other activities on the webpage. Until the calculation ends, all other activities like clicking the `CHANGE BACKGROUND` button clicks are blocked.
This happens since, Javascript is a single threaded language, and hence until the first operation ends, the next one cannot execute.

We can use web workers to get over this restriction so that we can offload a labor-intensive and lengthy process to run in the backend without interfering with UI actions.

The code that uses web worker and offloads labor-intensive processes to them so they can run concurrently with other website activities is located in the directory **After Adding Web Worker**.
