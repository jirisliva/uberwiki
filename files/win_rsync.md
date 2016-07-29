# How to backup with rsync on Windows
* Download rsync for Windows from [rsync.net](http://www.rsync.net/resources/howto/windows_rsync.html).
* Or install Cygwin from [www.cygwin.com/](http://www.cygwin.com/).
* Example of basic command to mirror folders to another disk:

`rsync -vaxE --chmod=ugo=rwX --delete --ignore-errors /cygdrive/c/source1 /cygdrive/c/source2 /cygdrive/d/target`

* With Cygwin you can run rsync with lower process priority like:

`nice -n 100 rsync ...`