import path from "path";

export function DemoHandler(){
    const absPath = path.resolve("../demo-text.txt");
    console.log(absPath);
}
