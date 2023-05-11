// Create a variable label and assign it the value "senecacollege". Create another variable tld and assign it "ca". Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".

// Create a variable isSeneca and assign it a boolean value (true or false) depending on whether or not domainName is equal to "senecacollege.ca". HINT: use === and don’t write true or false directly.

// Create a variable isNotSeneca and assign it the inverse boolean value of isSeneca. HINT: if isSeneca is true, isNotSeneca should be false.

// Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.

// Convert byte1 to a String using .toString(), and console.log() the result. What happens if you use toString(2) or toString(16) instead?

// Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".". For example: "192.168.2.1".

// Create a variable ipInt and assign it the integer value of bit-shifting (<<) and adding your byteN variables. HINT: your ipInt will contain 32 bits, the first byte needs to be shifted 24 bit positions (<< 24) so it occupies 32-25, the second shifted 16, the third 8.

// Create a variable ipBinary that contains the binary representation of the ipInt value. HINT: use .toString(2) to display the number with 1 and 0 only.

// Create a variable statusCode, and assign it the value for the “I’m a teapot” HTTP status code. HINT: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Write an If statement that checks to see if your statusCode is a 4xx client error. HINT: use the <, >, >=, and/or <= operators to test the value

// Write a switch statement that checks your statusCode for all possible 1xx information responses. In each case, you should console.log() the response text associated with the status code, or "unknown information response" if the status code is not known.

// Write a function is2xx(status) which takes a status code status (e.g., 200) and returns true if the status code is a valid 2xx code.
