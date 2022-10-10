FROM tomcat:8.0-alpine

ADD bookstore-example-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/
COPY pom.xml /usr/local/tomcat/webapps/
COPY src /usr/local/tomcat/webapps/src
COPY frontend /usr/local/tomcat/webapps/frontend

EXPOSE 8080

CMD ["catalina.sh", "run"]
