export class Folder {
  constructor(name) {
    this.name = name;
    this.type = "folder";
    this.children = {}; // name: File | Folder
  }

  add(item) {
    if (this.children[item.name]) {
      throw new Error("Item already exists");
    }
    this.children[item.name] = item;
  }

  remove(name) {
    delete this.children[name];
  }

  get(name) {
    return this.children[name];
  }

  list() {
    return Object.keys(this.children);
  }
}
