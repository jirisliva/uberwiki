[Wiki Quick Guide](how-to.md)
-----------------------------

[Books](books.md)
-----
* [Clean Code, EN](books/Clean_Code_-_A_Handbook_of_Agile_Software_Craftsmanship_\(Prentice_Hall,_Aug_2008\).pdf)
* [Čistý kód/Clean Code, CZ Scan](books/Clean_Code_\(cz\)_Scan.pdf)

Jira Versions
-------------
* [Versions Summary](http://jira2.ids.de/browse/CC/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)
* SVN branches vs. 
  * HEAD (trunk) - *04.22.02.00*

Tasks Stories
-------------
* [ProFrame Converter](tasks/proframe-converter-notes.md)  
* [Gasum](gasum.md)
* [Formulas with archive values](webproframe_archive_values.md)
* [WebProFrame Applet Signing](webproframe_applet_sign.md)
* [User Domains](task_user_domains.md)
* GCA
  * [GCA CC-Api Issues](gca/gca_ccapi_issues.md)
  * [GCA Testing Info](gca/gca_testing.md)
  * [GCA Production Issues](gca/gca_production_issue.md)
* [Is possible to have all signatures of same file same?](sign_without_random.md)
* [Checking access rights to process images using interfaces provided by Nikolas](gca/gca_process_images_access_rights.md)

Test Environment
----------------
* [ProFrame Converter Test Environment](proframe_converter_test_env.md)

Known Issues 
------------
Problems which could be nice to improve or fix. Not officially reported in Jira.

* [ProBild Converter Issues](probildconverter_issues.md)
* [WebProFrame Issues](webproframe_issues.md)

Where to get builds
-------------------
* [IDS build servers](build_servers.md)
* [Jenkins Links](jenkins_links.md)
* Lumir's PC - `\\hermine\public`

Servers
-------
* [SVN repositories](svn_repositories.md)
* [Servers](Servers.md)
* [hosts](hosts.md)
* [WI database connection](wi_database.md)

WebProFrame and MMI/HL Server
-----------------------------
* [HL Server/MMI update](hl_update.md)
* [WebProFrame N4G Testing Images](webproframe_testing_images.md)
* [MMI configuration hints](mmi_hints.md)
* [MMI/HL Server hints](mmi_usage_hints.md)
* [MMI Testing variables and datapoints (hldev-4, acos_nes_klein)](datapoints.md) 
* [HL-IDE](hl_ide.md)
* [Signal Datapoints - Bitset Values](ccapi_signal_values.md)
* [WebProFrame Applet's German Messages](webproframe_applet_german_messages.md)
* [Easy cleaning all WebProFrame Applet caches](webproframe_applet_clean_cache.md)
* [CC API errors/when data point value is wrong](ccapi_log.md)

Environment
-----------
* [How to setup WebInterface and database](webinterface_installation.md)
* [How to setup ProFrame JUnit tests](proframe_tests.md)
* [How to setup autotests environment](autotests.md)

Formulascripts
--------------
* [How to create formulascript nodes in CCApi tree](howto_create_formulascript_nodes.md)

ScriptSets
----------
* [IObScriptSet Parameters](webproframe_iobscriptset_parameters.md)

ProBild Converter
------------------
* [How to test converter running mode](probild_converter_running_mode.md)
* [How to run converter in CCApi debug mode](probild_converter_debug.md)

WebProFrame Applet
------------------
* [How to test Applet error handling](webproframe_applet_errors_testing.md)

ACOS ES
--------
* [How to](acos_es.md)

Jira & Code Reviews
-------------------
* [Jira Hints](jira_hints.md)
* [IDS Wiki abount Code Reviews](https://172.31.0.17:8443/display/GBE/Code-Reviews)
* [Crucible Hints](crucible_hints.md)

Maven 
-----
* [Maven & JUnit](maven_junit.md)
* [How to load properties from file](maven_properties.md)
* [How to download project sources](maven_download_sources.md)
* [How to define depenendecies by platform](maven_os_arch.md)

Java Hints
----------
* [Java Coding Style](java_coding_style.md)
* [ImageIO, write PNG](java_image_io_png.md)
* [Common Programming Hints for IDS projects](ids_programming_hints.md)
* [How to create ascii cs-native string with native2acsii](java_native2ascii.md)
* [Java Doc](java_doc.md)
* [Thread Pools](java_thread_pools.md)
* [Functional Java 8](java8_functional.md)

TDS
---
* [TDS Wi-Fi passwords](tds_wifi.md)

Eclipse
-------
* [Eclipse Configuration Hints](eclipse_hints.md)

Sublime Text
------------
* [User Settings](sublimetext_user_settings.md)

Windows
-------
* [Command line aliases](win_cmd_aliases.md)
* [Symbolic link to Folder](win_symlinks.md)
* [Backup with rsync](win_rsync.md)


Code Backup
-----------
* [WebActionTagProcessor](webactiontagprocessor.md)
* [ProbildImageHandlerActionTest](probildimagehandleractionTest.md)

IDS useful pages
---------------------

* [IDS buils tools settings](https://svn-8.ids.de/repos/ids_commons/ids_commons/develop/build-tools/)
* https://wiki.ids.de/display/LT/Proframe+Script+Sets
* http://in.ids.de/index.php?id=199 (Not accessible from Ostrava)

Enjoy with Groovy
-----------------
* [Groovy Hints](groovy_hints.md)

Testing builds
--------------
* https://svn-6.ids.de/repos/acos_et/acos_es/develop/trunk/infrastructure/manual_update_package/readme.txt

* How to create a 042200-setup do:
1. remote desktop on \\vm-lsbuild-05 / user=IDS\Integrat
2. update of the file d:/hlnt042200/webinterface.zip
3. Starting the icon "startbash" on the desktop
4. start in the bash console the following commands
- a ". set42200"
IMPORTANT: The "point" before "set42200". This set Environment globaly
- b "dailybuild_only_setup.bsh"
Triggering setup-generation - finally, a result-mail is sent
5. The new HL-setup is then in the directory
d:\hlnt042200\autobuild\Media\SILENT\Disk Images\Disk1\
6. WARNING!
Currently takes the setup creation up to 1.5 hours.
I'm working on an optimization of this process.
Every day at 18:00 starts our daily build.
Here also, the setup will be deleted and your work must be set - if necessary in consultation with me.
