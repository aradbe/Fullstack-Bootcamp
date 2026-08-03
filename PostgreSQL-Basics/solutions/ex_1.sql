DROP TABLE IF EXISTS dolphin;

CREATE TABLE dolphin (
  name VARCHAR(100) PRIMARY KEY,
  color VARCHAR(50) NOT NULL,
  height NUMERIC(4, 2) NOT NULL CHECK (height > 0),
  healthy BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO dolphin (name, color, height) VALUES
  ('Daron', 'gray', 2.40),
  ('Orion', 'blue', 1.75),
  ('Luna', 'green', 2.80),
  ('Simon', 'brown', 1.60),
  ('Nori', 'silver', 3.10);

-- INSERT INTO dolphin (color, height) VALUES ('gray', 2.00);

SELECT * FROM dolphin WHERE height > 2;
