FROM maven:3.3-jdk-8-onbuild
FROM java:8
EXPOSE 8080
COPY --from=0 /usr/src/app/target/Fallstudioe-0.0.1-SNAPSHOT.jar /opt/Fallstudioe.jar

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD sh -c "/wait && java -jar /opt/Fallstudioe.jar"