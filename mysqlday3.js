// QUIZ

//workbench code
DROP DATABASE IF EXISTS quiz1;
create database quiz1;
use quiz1;

create table variables (
ID int not null auto_increment,
title varchar (100),
name varchar(100) NOT NULL,
primary key(ID)
);

// this is to create the databse using node
const connectObject = {
  host: "localhost",
  port: 3306,
  user: " ",
  password: " ",
  database: "quiz1"
}

const mySql = require("mysql")
const conn = mySql.createConnection(connectObject)


connection.connect(function(error){
  if (error){
    throw error
  }

  console.log("Connected as ID: ${connection.threadID}")
})

/*

Indexes: a way to query info faster and more efficiently, allows us
to see if 2 things are equal...they speed up performance at the cost of space
B+ Tree: Avoid Repeating data
Dense Indexx: Pointer to every record eg key-->record
Sparse Index: Pointer to every block eg key-->block[ a block is something on your os]
Bitmap: uses bitwise ops eg and|or|not|xor
Reverse Index: reverses the order; good for sequences that increment by 1
because the way os store data

adding an index into workbench
*/

alter table top5000 add index (artist)


/* THIS IS PRACTICE AND USEFUL INFO FROM PGEXERCISES]


QUESTION:
How can you produce a list of facilities that charge a fee to members,
and that fee is less than 1/50th of the monthly maintenance cost?
Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.

ANSWER:
select * from cd.facilities where membercost > 0;

QUESTION:
How can you produce a list of all facilities with the word 'Tennis' in their name?

ANSWER:
select *
	from cd.facilities
	where
		name like '%Tennis%';

QUESTION:
How can you produce a list of facilities,
with each labelled as 'cheap' or 'expensive' depending
on if their monthly maintenance cost is more than $100?
Return the name and monthly maintenance of the facilities in question.

ANSWER: select name,
	case when (monthlymaintenance > 100) then
		'expensive'
	else
		'cheap'
	end as cost
	from cd.facilities;

  QUESTION:
  How can you produce a list of members who joined after the start of September 2012?
  Return the memid, surname, firstname, and joindate of the members in question.

  ANSWER:
  select memid, surname, firstname, joindate
	from cd.members
	where joindate >= '2012-09-01';  

*/
