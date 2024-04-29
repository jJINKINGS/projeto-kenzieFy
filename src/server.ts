import { app } from "./app";
import { jwtConfig } from "./configs";

jwtConfig();

const PORT = 3000;

app.listen(PORT, () => console.log(`Application is running on port: ${PORT}.`));