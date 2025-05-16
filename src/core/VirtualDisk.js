import { Folder } from "./Folder.js";
import { File } from "./File.js";

export class VirtualDisk {
  constructor() {
    this.root = new Folder("/");
    this.current = this.root;
    this.path = ["/"];
  }

  mkdir(name) {
    const folder = new Folder(name);
    this.current.add(folder);
  }

  touch(name, content = "") {
    const file = new File(name, content);
    this.current.add(file);
  }

  ls() {
    return this.current.list();
  }

  cd(name) {
    if (name === "..") {
      if (this.path.length > 1) {
        this.path.pop();
        this.current = this._navigate(this.path);
      }
    } else {
      const folder = this.current.get(name);
      if (folder?.type === "folder") {
        this.current = folder;
        this.path.push(name);
      } else {
        throw new Error("Folder not found");
      }
    }
  }

  cat(name) {
    const file = this.current.get(name);
    if (file?.type === "file") {
      return file.content;
    } else {
      throw new Error("File not found");
    }
  }

  pwd() {
    return this.path.join("/") || "/";
  }

  _navigate(path) {
    let curr = this.root;
    for (let i = 1; i < path.length; i++) {
      curr = curr.get(path[i]);
    }
    return curr;
  }

  serialize() {
    function serializeFolder(folder) {
      const result = {
        name: folder.name,
        type: "folder",
        children: [],
      };
      for (const child of Object.values(folder.children)) {
        if (child.type === "folder") {
          result.children.push(serializeFolder(child));
        } else {
          result.children.push({
            name: child.name,
            type: "file",
            content: child.content,
          });
        }
      }
      return result;
    }

    return serializeFolder(this.root);
  }

  deserialize(data) {
    function createFromData(nodeData) {
      if (nodeData.type === "folder") {
        const folder = new Folder(nodeData.name);
        for (const child of nodeData.children) {
          folder.add(createFromData(child));
        }
        return folder;
      } else {
        return new File(nodeData.name, nodeData.content);
      }
    }

    this.root = createFromData(data);
    this.current = this.root;
  }

  printTree(folder = this.root, prefix = "") {
    const entries = Object.values(folder.children);
    const lastIndex = entries.length - 1;

    entries.forEach((entry, index) => {
      const isLast = index === lastIndex;
      const connector = isLast ? "└── " : "├── ";

      if (entry.type === "folder") {
        console.log(`${prefix}${connector}${entry.name}/`);
        const nextPrefix = prefix + (isLast ? "    " : "│   ");
        this.printTree(entry, nextPrefix);
      } else {
        console.log(`${prefix}${connector}${entry.name}`);
      }
    });
  }
}
