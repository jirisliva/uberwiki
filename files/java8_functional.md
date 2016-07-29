## How to avoid null-check

### Classic

      File input = getFile("hello.txt");
      if (input != null) {
        input.open();
        ..
      }

      File getFile(String fileName) {
        if (bla bla) {
          return new File(fileName);
        }
        return null;
      }


### Java 8

    resolveFile("hello.txt", (File file) -> {
      input.open()
      ..
    });

    resolveFile(String fileName, Consumer<File> consumer) {
      if (bla bla) {
        consumer.accept(new File(fileName));
      }
    }





---------------------------------------
#### Swift (Apple)

    if let input = getFile("hello") {
      input.open()
    }

    func getFile(fileName: String) -> File? {
      if bla bla {
        return new File(fileName)
      }
      return nil
    }