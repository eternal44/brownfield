insert into users (email, name) values ('test@test.com', 'test') returning *;

insert into posts (userid, photo, item_name, item_type, comment) values (1, 'link to photo', 'mock item', 'mock', 'this is a mock item') returning *;

insert into votes (voterid, postid, vote) values (1, 1, 1) returning *;