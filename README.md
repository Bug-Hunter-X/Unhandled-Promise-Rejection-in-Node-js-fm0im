# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections can cause unexpected application crashes or behavior.  This example shows a scenario where an unhandled promise rejection occurs and how to properly handle it to prevent unexpected crashes.

## Bug Description
The `bug.js` file contains a simple Node.js HTTP server.  However, it lacks proper error handling for asynchronous operations, leading to an unhandled promise rejection when errors occur. 

## Solution
The `bugSolution.js` file demonstrates how to properly handle promise rejections by using `.catch()` to handle errors gracefully.  This prevents the application from crashing due to unhandled exceptions.

## How to run

1. Clone the repo
2. Navigate to the directory
3. Run `node bug.js` to see the unhandled promise rejection
4. Run `node bugSolution.js` to see the fixed version