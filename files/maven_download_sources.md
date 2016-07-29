### All dependecies
     mvn dependency:resolve -Dclassifier=javadoc
     mvn dependency:resolve -Dclassifier=sources

### Specific dependency
     mvn dependency:sources -DincludeGroupIds=org.apache.tapestry