FROM ubuntu:22.04

WORKDIR /app

RUN apt update && apt install -y wget unzip

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.38.0/pocketbase_0.38.0_linux_amd64.zip

RUN unzip pocketbase_0.38.0_linux_amd64.zip

RUN chmod +x pocketbase

COPY pb_data ./pb_data
COPY pb_migrations ./pb_migrations

EXPOSE 10000

CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
