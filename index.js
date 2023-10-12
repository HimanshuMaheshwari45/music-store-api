import chalk from "chalk";

import { DemoHandler as FSDemoHandler, DemoHandler2 } from "./demo/demo-fs.js"
import { DemoHandler as PathDemoHandler } from "./demo/demo-path.js";
import "./demo/demo-http.js";
import "./demo/demo-os.js";

console.log(chalk.bgBlue("Hello World!!!"));

// FSDemoHandler();
// DemoHandler2();
// PathDemoHandler();