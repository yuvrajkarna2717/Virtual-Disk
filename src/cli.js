import readline from "readline";
import fs from "fs";
const SAVE_PATH = "disk.json";
import { VirtualDisk } from "./core/VirtualDisk.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "disk> ",
});

const disk = new VirtualDisk();

// Save current disk to JSON
function saveDisk(disk) {
  const data = disk.serialize(); // method you'll define
  fs.writeFileSync(SAVE_PATH, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Disk saved.");
}

// Load disk from JSON
function loadDisk(disk) {
  if (!fs.existsSync(SAVE_PATH)) return;
  const raw = fs.readFileSync(SAVE_PATH, "utf-8");
  const data = JSON.parse(raw);
  disk.deserialize(data); // method you'll define
  console.log("✅ Disk loaded.");
}


console.log("💾 Virtual Disk CLI");
rl.prompt();

rl.on("line", (line) => {
  const [cmd, ...args] = line.trim().split(" ");
  try {
    switch (cmd) {
      case "mkdir":
        disk.mkdir(args[0]);
        break;
      case "touch":
        disk.touch(args[0], args.slice(1).join(" "));
        break;
      case "cd":
        disk.cd(args[0]);
        break;
      case "ls":
        console.log(disk.ls());
        break;
      case "cat":
        console.log(disk.cat(args[0]));
        break;
      case "pwd":
        console.log(disk.pwd());
        break;
      case "tree":
        disk.printTree();
        break;
      case "save":
        saveDisk(disk);
        break;
      case "load":
        loadDisk(disk);
        break;
      case "exit":
        rl.close();
        return;
      default:
        console.log("❓ Unknown command");
    }
  } catch (err) {
    console.log("⚠️", err.message);
  }
  rl.prompt();
}).on("close", () => {
  console.log("👋 Exiting Virtual Disk");
  process.exit(0);
});
