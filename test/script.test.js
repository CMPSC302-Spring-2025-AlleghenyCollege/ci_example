const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

// Read HTML content
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
// Read JavaScript content
const js = fs.readFileSync(path.resolve(__dirname, "../script.js"), "utf8");

let dom;
let document;

beforeEach(() => {
    // Create a new JSDOM instance with the HTML content
    dom = new JSDOM(html, {
        runScripts: "dangerously",
        resources: "usable",
        url: "http://localhost"
    });
    document = dom.window.document;
    
    // Execute the script in the context of the JSDOM window
    const scriptElement = document.createElement("script");
    scriptElement.textContent = js;
    document.body.appendChild(scriptElement);
    
    // Ensure DOMContentLoaded has fired
    const event = new dom.window.Event('DOMContentLoaded');
    dom.window.document.dispatchEvent(event);
});

test("Button click changes text", () => {
    const button = document.getElementById("changeTextBtn");
    const text = document.getElementById("dynamicText");
    
    // Verify initial state
    expect(text.textContent).toBe("Original Text");
    
    // Click the button
    button.click();
    
    // Check if the text changed as expected
    expect(text.textContent).toBe("Changed Text!");
});
