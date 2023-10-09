DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS sales_detail;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(20) NOT NULL, 
  lastName VARCHAR(20) NOT NULL, 
  email VARCHAR(50) NOT NULL UNIQUE, 
  password VARCHAR(100) NOT NULL,
  img_avatar VARCHAR(200) 
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY, 
  subject VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL, 
  description VARCHAR(150) NOT NULL, 
  level VARCHAR(30) NOT NULL,
  schedule VARCHAR(20) NOT NULL, 
  price INT NOT NULL,
  img VARCHAR(200) NOT NULL,  
  id_user INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id) ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id)  ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id)  ON DELETE CASCADE NOT NULL,
  rating INT NOT NULL, 
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id)  ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
  comment VARCHAR(100) NOT NULL, 
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id) ON DELETE CASCADE NOT NULL , 
  total INT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE sales_detail (
  id SERIAL PRIMARY KEY, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
  id_sales INT REFERENCES sales(id) ON DELETE CASCADE NOT NULL,
  amount INT NOT NULL,
  price INT NOT NULL
);



INSERT INTO users (name, lastname, email, password) VALUES
( 'Jose', 'Veliz', 'joseveliz@example.com', '1234'),
( 'Monica', 'Martin', 'monicamartin@example.com', '1234'),
( 'Juana', 'Vera', 'jvera@example.com', '1234'),
( 'Viviana', 'Lopez', 'vivilopez@example.com', '1234'),
( 'Raul', 'Gonzalez', 'raulgonza@example.com', '1234'),
( 'Lorena', 'Gracia', 'lorenagracia@example.com', '1234'),
( 'Pablo', 'Pedreros', 'pablope@example.com', '1234'),
( 'Camilo', 'Opazo', 'camilo.opazo@example.com', '1234'),
( 'Aurora', 'López', 'aurora.lopez@example.com', '1234'),
( 'Mario', 'Vega', 'mariovega@example.com', '1234'),
( 'Rodrigo', 'Rivera', 'rodrigo.rivera@example.com', '1234'),
( 'Camilo', 'Hernandez', 'camilo.hernandez@example.com', '1234'),
( 'Wilson', 'Denzel', 'wilsondenzel@example.com', '1234'),
( 'Ismael', 'Isla', 'ismael.isla@example.com', '1234'),
( 'Yuri', 'Vlad', 'yuri.vlad@example.com', '1234'),
( 'Uriel', 'Gonzalez', 'uriel.gonzalez@example.com', '1234'),
( 'Karla', 'Araya', 'karlaaraya@example.com', '1234'),
( 'Dimitri', 'Valdes', 'dimitri.valdes@example.com', '1234'),
( 'Silvia', 'Rivas', 'silvia.rivas@example.com', '1234'),
( 'Carmelo', 'fuentes', 'carmelo.fuentes@example.com', '1234');

INSERT INTO products (name,description,price,schedule,img, id_user) VALUES
// INSERTAR INFO PRODUCTOS Y CLASES DE ENTRENAMIENTO CANINO//

INSERT INTO favorites (id_user, id_classes) VALUES
// insertar info//

INSERT INTO ratings (id_user, id_classes, rating) VALUES
// INSERTAR INFO//

INSERT INTO comments (id_user, id_classes, comment) VALUES
// INSERTAR INFO //
INSERT INTO sales ( id_user, total) VALUES
// INSERTAR INFO //

INSERT INTO sales_detail (id_classes, id_sales, amount, price) VALUES
// INSERTAR INFO//




