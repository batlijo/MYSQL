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
