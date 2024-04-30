"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app_2 = require("./app");
const PORT = 3000;
app_1.app.listen(PORT, () => {
    console.log(`Application is running on port: ${PORT}.`);
    (0, app_2.initApp)();
});
