const htmlHelpers = require('./../src/utils/html');

const fs = require("fs");
const path = require("path");


describe("it test html helpers", () => {


    describe('it test code injection', () => {


        it('should replace placeholder with replace value', () => {

             const htmlPath = path.join(__dirname, '..', "src", "html-templates", "main.html");
             const layout = fs.readFileSync(htmlPath, "utf-8");

             const expected = fs.readFileSync(path.join(__dirname, 'stubs', 'code-injection.stub'), 'utf-8');

             const actual = htmlHelpers.injectCode(layout, '{{ code_injection }}', 'durian is good')

             expect(actual).toBe(expected);
        })


    })


})