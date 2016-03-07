CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  name VARCHAR(100)
);

CREATE TABLE Posts (
  id INTEGER PRIMARY KEY,
  userID INTEGER,
  photo VARCHAR(200),
  item_name VARCHAR(100),
  item_type VARCHAR(200),
  comment VARCHAR(500),

  FOREIGN KEY (userID) REFERENCES Users(id)
);

CREATE TABLE Votes (
  id INTEGER PRIMARY KEY,
  voterID INTEGER,
  postID INTEGER,
  vote BOOLEAN,

  FOREIGN KEY (voterID) REFERENCES Users(id),
  FOREIGN KEY (postID) REFERENCES Posts(id)
);
