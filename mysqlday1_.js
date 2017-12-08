/*
it's about the what, not the how
its a database installed in a server...to do anything you have to be connected to a server
what is an instance: multiple database servers
pretty much everything in mysql is a commmand
you want to do things with as little space as possible, because that costs $$

command line:
create demo database
use demo
[you are now in the demo database]
google mysql cli tool
databases have tables and rows

create table person (
--> name varchar (100) not null,

command to persist data is : insert
ie. insert into person (name, age) values ("Whitney", 8);
^this will insert a row of data to your table

return only the data your going to use

my temporary password
root@localhost: WuDdY3r_Pu7

Instructions

Now it is your turn to set up a localhost connection! This may seem as if it will be an easy task, but there are some common errors and hurdles that might stand in your way as you work to create your first ever MySQL connection.

Start out by opening up MySQL Workbench and hitting the (+) button next to the text which reads "MySQL Connections". Sequel Pro will also have a (+) on the bottom left for new connections.

Enter the following credentials into the on-screen prompt...

Connection Name: Local Instance MySQL

Connection Method: Standard (TCP/IP)

Hostname: localhost

Port: 3306

Username: <Your MySQL Username> (Defaults to "root")

Password: <Your MySQL Password> (Defaults to empty)

Keep the Default Schema field empty

Hit "Test Connection" and, if the connection is successful, hit okay and double-click on the newly created field under the "MySQL Connections" text on the home page

If the connection fails, raise your hand and one of us will come around to help you out. Until we come by, however, take this time to go online and see if there is anything online which might tell you what went wrong. Do not worry if you cannot find anything though, we will make sure to figure this out.
If your connection was successful and you have nothing else to do, feel free to help those around you in creating their connections.

BONUS: Look into how you can create and use databases using SQL commands

BONUS: Look into the reasons why MySQL uses port 3306 as its default

--
WILL DEMO walk through
CREATE DATABASE animal_db;
USE animal_db;
CREATE TABLE people (
            --> name VARCHAR(30) NOT NULL,
            --> has_pet BOOLEAN not null,
            --> pet_name varchar(30),
            --> per_age INTEGER(10)
            --> );

to figure out table structure and what it looks like you type:
describe people;

instructions:
For the table favorite_foods...

Create the column "food" which can take in a 50 character string and cannot be NULL
Create the column "score" which can take in an integer
For the table favorite_songs...

Create the column "song" which can take in a 100 character string and cannot be NULL
Create the column "artist" which can take in a 50 character string
Create the column "score" which can take in an integer
For the table favorite_movies...

Create the column "film" which can take in a string and cannot be NULL
Create the column "five_times" which can take in a boolean
create the column "score" which can take in an integer

AUTOINCREMENT is a property you can implement when you insert data,
PRIMARY KEY is building indexes to search your data through your database

creates new rows containing data in all named columns
INSERT INTO people (name, has_pet, pet_name)
VALUES ("Sally", TRUE, "Stevie",)

--
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter"; --this is a condition























*/
