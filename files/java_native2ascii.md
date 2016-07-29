Windows terminal (cmd.exe) uses *code page 852* for instead of *windows-1250*. So to use `native2ascii` in cmd.exe properly you have to specify cp852.

    native2ascii -encoding cp852