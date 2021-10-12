create database song CHARACTER SET utf8 COLLATE utf8_general_ci;

use song

create Table Artist (
  id_artist int not null primary key,
  name varchar(200) not null
)

create table Music (
  id_music int not null primary key,
  id_artist int not null,
  name varchar(200) not null,
  CONSTRAINT fk_music_artist FOREIGN KEY (id_artist) REFERENCES Artist(id_artist)
)

insert into Artist VALUES
  (1, 'Beatles'), 
  (2, 'Madonna'), 
  (3, 'Michael Jackson'), 
  (4, 'Bruno Mars'), 
  (5, 'NSinc'), 
  (6, 'Justin Bieber');

insert into Music VALUES 
  (1, 1, 'music 1'),
  (2, 2, 'music 2'),
  (3, 3, 'music 3'),
  (4, 2, 'music 4'),
  (5, 2, 'music 5'),
  (6, 3, 'music 6'),
  (7, 3, 'music 7'),
  (8, 1, 'music 8'),
  (9, 1, 'music 9'),
  (10, 2, 'music 10'),
  (11, 3, 'music 11'),
  (12, 1, 'music 12'),
  (13, 3, 'music 13'),
  (14, 2, 'music 14')


