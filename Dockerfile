FROM tomcat:9-jdk11-openjdk-slim

COPY src ./usr/local/bin/
COPY frontend ./usr/local/bin/

COPY package.json package-lock.json* webpack.config.js* webpack.generated.js* ./usr/local/bin/

COPY pom.xml ./usr/local/bin/

COPY bookstore-example-1.0-SNAPSHOT.war ./usr/local/bin/
EXPOSE 8080

CMD ["catalina.sh", "run"]

