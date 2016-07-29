How to configure Windows command line (cmd.exe) aliases / macros
-------------------------------------------------------

1. Create a file with aliases, e.g. `c:\bin\aliases`:

    	ls=dir /ONE $*
        cd=cd /d $*
        python=python -ic "" 
        ps=tasklist $*
        kill=taskkill /IM $*
        mvnx=mvn -DskipTests -Dmaven.test.skip=true -DgenerateReports=false -Dmaven.javadoc.skip=true $*

2. Create a file with all the stuff you want to run when cmd.exe is started, including loading the aliases with doskey e.g. `c:\bin\cmd_autoruns.cmd`:

	    @echo off
	    doskey /macrofile=c:\bin\aliases

3. Create and run once a batch file (e.g. `set_cmd_autorun.cmd`) which will set the Command Processor Autorun key to our `cmd_autoruns.cmd`:

	    reg add "hkcu\software\microsoft\command processor" /v Autorun /t reg_sz /d c:\bin\cmd_autoruns.cmd


