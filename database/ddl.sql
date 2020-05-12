/*Comments Here*/
CREATE TABLE authors (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(100)
);

/*Comments Here*/
CREATE TABLE post (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR(40),
	body VARCHAR(1000),
	publish_date DATE,
	aurthor_id INTEGER REFERENCES author(id)
);

/*Comments Here*/
CREATE TABLE commenting (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	body VARCHAR(1200),
	publish_date DATE,
	aurthor_id INTEGER REFERENCES author(id),
	post_id INTEGER REFERENCES post(id)
);


--DROP TABLE authors;