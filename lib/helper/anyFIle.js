"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tsConfigString() {
    const lista = ["item1", "item2"];
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  ${lista.map((item) => {
        return `<li>${item}</li>`;
    }).join()}
</body>
</html>`;
}
exports.tsConfigString = tsConfigString;
//# sourceMappingURL=anyFIle.js.map