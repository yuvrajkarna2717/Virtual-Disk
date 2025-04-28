
---
# Virtual Disk

**Virtual Disk** is a simple virtual storage system written in C++.  
It simulates a virtual hard drive by allowing you to create, store, and retrieve files inside a single large file, mimicking how real-world virtual storage systems (like VMs and cloud disks) work.

---

## ✨ Features

- Create a virtual disk file of any size (e.g., 100MB)
- Write files into the virtual disk
- Read files from the virtual disk
- Simple in-memory file indexing
- Command Line Interface (CLI) to interact with the disk
- Modular C++ codebase for easy extension

---

## 🛠️ Tech Stack

- **Language**: C++
- **File Handling**: `fstream`, `ifstream`, `ofstream`
- **Build System**: Makefile (or g++ manual build)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/virtual-disk.git
cd virtual-disk
```

---

### 2. Build the project

Using g++:

```bash
g++ src/*.cpp -o build/virtualdisk
```

Or using Makefile:

```bash
make all
```

---

### 3. Run

```bash
./build/virtualdisk
```

You'll enter the **Virtual Disk CLI** where you can create disks, write files, and read files.

---

## 📚 Available Commands

| Command | Description |
|:--------|:------------|
| `create_disk <disk_name> <size_in_MB>` | Creates a new virtual disk file |
| `write_file <disk_name> <filename>` | Writes a file with given content to the disk |
| `read_file <disk_name> <filename>` | Reads and displays a file's content from the disk |
| `list_files` | Lists all files stored in the virtual disk |
| `exit` | Exits the CLI |

---

## 📦 Example Usage

```bash
> create_disk mydisk.vd 100
> write_file mydisk.vd hello.txt
> read_file mydisk.vd hello.txt
> list_files
```

---

## 📈 Future Enhancements

- [ ] Support for folders and subdirectories
- [ ] Deletion of files and space reclaiming
- [ ] Save/load file index to/from disk
- [ ] Encryption of file contents
- [ ] Compression to optimize storage
- [ ] Multi-disk management
- [ ] Journaling and crash recovery

---

## 🤔 Why Virtual Disk?

Building a virtual disk teaches you:
- How real-world file systems (like FAT32, ext4) are built
- Low-level file I/O in C++
- Indexing, memory management, and storage optimization
- How cloud storage and VMs manage virtual hard drives

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Contact

- GitHub: [@yuvrajkarna2717](https://github.com/yuvrajkarna2717)
- LinkedIn: [Yuvraj Karna](https://linkedin.com/in/yuvrajkarna27)

---
