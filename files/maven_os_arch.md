      <dependency>
        <groupId>org.eclipse.swt</groupId>
        <artifactId>org.eclipse.swt.${swt.platformId}</artifactId>
      </dependency>

      <profiles>

        <!-- ################################################################### -->
        <!-- ## SWT for Windows 32bit -->
        <!-- ################################################################### -->
        <profile>
          <id>win32</id>
          <activation>
            <os>
              <family>windows</family>
              <arch>x86</arch>
            </os>
          </activation>
          <properties>
            <swt.platformId>win32.win32.x86</swt.platformId>
          </properties>
        </profile>
        
        <!-- ################################################################### -->
        <!-- ## SWT for Windows 64bit-->
        <!-- ################################################################### -->
        <profile>
          <id>win64</id>
          <activation>
            <os>
              <family>windows</family>
              <arch>amd64</arch>
            </os>
          </activation>
          <properties>
            <swt.platformId>win32.win32.x86</swt.platformId>
          </properties>
        </profile>
        
        <!-- ################################################################### -->
        <!-- ## SWT for Solaris / x86 -->
        <!-- ################################################################### -->
        <profile>
          <id>solaris-x86</id>
          <activation>
            <os>
              <name>solaris</name>
              <arch>x86</arch>
            </os>
          </activation>
          <properties>
            <swt.platformId>gtk.solaris.x86</swt.platformId>
          </properties>
        </profile>
      </profiles>