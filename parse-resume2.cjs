const { PdfReader } = require("pdfreader");
const fs = require('fs');

let out = "";
new PdfReader().parseFileItems("Resume.pdf", (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) {
        fs.writeFileSync('resume_text.txt', out);
        console.log("Extraction complete.");
    }
    else if (item.text) out += item.text + "\n";
});
