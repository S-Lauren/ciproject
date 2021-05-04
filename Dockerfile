FROM postgres
ENV POSTGRES_PASSWORD PG_PASSWORD
ENV POSTGRES_DB PG_DB
COPY ./migrations/dbInit.sql /docker-entrypoint-initdb.d/