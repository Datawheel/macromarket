BEGIN;

DROP TABLE IF EXISTS country CASCADE;
CREATE TABLE country  (
  id CHARACTER VARYING(3) PRIMARY KEY,
  image CHARACTER VARYING(255),
  name CHARACTER VARYING(255)
);
INSERT INTO country (id, image, name) VALUES ('USA','usa-image.jpg', 'United States of America' );
INSERT INTO country (id, image, name) VALUES ('CHL','chile-image.jpg', 'Chile' );
INSERT INTO country (id, image, name) VALUES ('CHN','china-image.jpg', 'China' );

DROP TABLE IF EXISTS company CASCADE;
CREATE TABLE company (
id serial PRIMARY KEY,
name CHARACTER VARYING(255),
country CHARACTER VARYING(3) REFERENCES country (id),
address text,
phone_number text,
website CHARACTER VARYING(255),
profile_image CHARACTER VARYING(255),
cover_image CHARACTER VARYING(255),
description text,
transporter BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO company (id, name, country, address, phone_number,
   website, profile_image, cover_image, description, transporter) VALUES ('12345', 'Alimentos y Frutos S.A', 'CHL', 'Lo Echevers 250, Quilicura Santiago, Chile','(56-2) 2 367 80 00', 'www.minutoverde.cl/en/', 'profile.jpg', 'cover.jpg', 'ALIFRUT is a company located in Chile, open to the world and with clear
comparative advantages in the area of vegetables and fruits.', true);

INSERT INTO company (id, name, country, address, phone_number,
   website, profile_image, cover_image, description, transporter) VALUES ('45678', 'Cono Sur', 'CHN', 'Av. Nueva Tajamar 481 Torre Norte Bejing, China', '(503) 329 8721', 'www.conosur.com', 'profile.jpg', 'cover.jpg', 'Our main goal is to create expressive and innovative wines from
one of the world’s southernmost wine regions.', false);

INSERT INTO company (id, name, country, address, phone_number,
   website, profile_image, cover_image, description, transporter) VALUES ('56789', 'CCNI', 'USA', 'Avda. Andrés Bello 2687, Piso 18 Boston, USA', '(503) 244 3472', 'www.ccni.cl','profile.jpg', 'cover.jpg', 'On April 1, 2014, CSAVs first in-house agency began operations in Chile
with the aim of establishing a direct commercial, documentary and financial
relationship with each of the clients throughout the country.', true );

DROP TABLE IF EXISTS product CASCADE;
CREATE TABLE product (
  id CHARACTER VARYING(10) PRIMARY KEY,
  name CHARACTER VARYING(255),
  description text
);

INSERT INTO product (id, name, description) VALUES ('2204', 'Wine', 'Wine is the 93rd most traded product.');
INSERT INTO product (id, name, description) VALUES ('8471', 'Computers', 'Computers are the 6th most traded product.');
INSERT INTO product (id, name, description) VALUES ('0806', 'Grapes', 'Grapes are the 315th most traded product.');
INSERT INTO product (id, name, description) VALUES ('0808', 'Apples and Pears', 'Apples and Pears are the 308th most traded product.');
INSERT INTO product (id, name, description) VALUES ('7108', 'Gold', 'Gold is the 9th most traded product.');

CREATE TYPE trade_flow AS ENUM ('export', 'import');

DROP TABLE IF EXISTS trade CASCADE;
CREATE TABLE trade (
  company_id integer REFERENCES company (id),
  product_id CHARACTER VARYING(10) REFERENCES product (id),
  country_id CHARACTER VARYING(3) REFERENCES country (id),
  trade_flow trade_flow default 'export'
);

INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('12345', '0808', 'CHL','export');
INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('12345', '0806', 'CHL','export');
INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('45678', '2204', 'CHN', 'export');
INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('45678', '0806', 'CHN', 'import');
INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('56789', '8471', 'USA', 'export' );
INSERT INTO trade (company_id, product_id, country_id, trade_flow) VALUES ('56789', '7108', 'USA', 'import' );

DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
  email CHARACTER VARYING(255) PRIMARY KEY,
  name  CHARACTER VARYING(255),
  password  CHARACTER VARYING(255),
  country_id CHARACTER VARYING(3) REFERENCES country (id),
  company_id integer REFERENCES company (id),
  image CHARACTER VARYING(255)
);

INSERT INTO "user" (email, name, password, country_id, company_name, image) VALUES ('kantor.sa@husky.neu.edu','Sabrina Kantor', 'password', 'CHL', '12345', 'prof-pic.jpg');
INSERT INTO "user" (email, name, password, country_id, company_name, image) VALUES ('melissa@gmail','Melissa Kantor', 'pw', 'CHN', '45678', 'prof-pic.jpg');
INSERT INTO "user" (email, name, password, country_id, company_name, image) VALUES ('sam@gmail','Sam Kantor', 'password123', 'USA', '56789', 'prof-pic.jpg');
COMMIT;
