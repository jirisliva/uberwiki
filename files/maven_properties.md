properties-maven-plugin - Basic usage
-------------------------------------

      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>properties-maven-plugin</artifactId>
        <version>1.0-alpha-2</version>
        <executions>
          <execution>
            <phase>validate</phase>
            <goals>
              <goal>read-project-properties</goal>
            </goals>
            <configuration>
              <files>
                <file>maven.properties</file>
              </files>
            </configuration>
          </execution>
        </executions>
      </plugin>