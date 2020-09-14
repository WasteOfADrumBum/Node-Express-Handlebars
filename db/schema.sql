/* Create database burgers_db */
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

/* create burgers_db table */
CREATE TABLE burgers (
  /* ID */
  id INT NOT NULL AUTO_INCREMENT,
  /* Name */
  burger_name VARCHAR(200) NOT NULL,
  /* Condition */
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  date TIMESTAMP,
  PRIMARY KEY (id)
);