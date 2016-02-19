CREATE DATABASE truu;

USE truu;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(200) NOT NULL,
  name varchar(20),
  PRIMARY KEY (ID)
);

CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  item_name varchar(40) NOT NULL,
  item_type varchar(40) NOT NULL,
  /* how do we connect a photo on s3 to a specific item */
  PRIMARY KEY (ID)
);

CREATE TABLE votes (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  postid int NOT NULL,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
