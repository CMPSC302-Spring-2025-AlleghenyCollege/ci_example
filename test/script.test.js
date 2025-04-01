const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;
let document;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;
});

test("Button click changes text", () => {
    const button = document.getElementById("changeTextBtn");
    const text = document.getElementById("dynamicText");

    button.click();

    expect(text.textContent).toBe("Text Changed!");
});
