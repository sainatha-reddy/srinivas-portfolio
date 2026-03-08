const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Resume.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('resume_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(function (error) {
    console.error("Error extracting PDF:", error);
});
