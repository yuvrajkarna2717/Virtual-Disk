export class File {
  constructor(name, content = "") {
    this.name = name;
    this.content = content;
    this.type = "file";
    this.size = content.length;
  }
}
