DROP TABLE IF EXISTS patient;
DROP TABLE IF EXISTS disease;
DROP TABLE IF EXISTS symptoms;
DROP TABLE IF EXISTS gender;
DROP TABLE IF EXISTS ethnicity;

CREATE TABLE ethnicity (
  id INTEGER PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE gender (
  id INTEGER PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE symptoms (
  family INTEGER PRIMARY KEY,
  fever BOOLEAN NOT NULL,
  blue_whelts BOOLEAN NOT NULL,
  low_bp BOOLEAN NOT NULL
);

CREATE TABLE disease (
  name VARCHAR(20) PRIMARY KEY,
  survival_rate REAL NOT NULL CHECK (survival_rate BETWEEN 0 AND 1)
);

CREATE TABLE patient (
  id SERIAL PRIMARY KEY,
  ethnicity INTEGER NOT NULL REFERENCES ethnicity(id),
  gender INTEGER NOT NULL REFERENCES gender(id),
  symptoms_family INTEGER NOT NULL REFERENCES symptoms(family),
  disease VARCHAR(20) REFERENCES disease(name)
);
