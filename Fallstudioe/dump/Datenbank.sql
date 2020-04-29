drop schema if exists stundenplan2;

create schema stundenplan2;

use stundenplan2;

create table status (
	sta_bezeichnung varchar(50),
	sta_id int not null,
	primary key (sta_id)
);

create table zeitraum (
	zei_id int not null auto_increment,
	zei_beginn time,
	zei_ende time,
	primary key(zei_id)
);

create table nutzer (
	nut_id int not null auto_increment,
	nut_vorname varchar(50),
	nut_nachname varchar(50),
	nut_status_id int not null,
	nut_email varchar(50),
	nut_passwort varchar(50),
	
	primary key(nut_id),
	foreign key(nut_status_id) references status (sta_id)
);

create table vorlesung (
	vor_id int not null auto_increment,
	vor_titel varchar(50),
	vor_datum date,
	vor_zeit_id int not null,
	vor_nut_id int not null,
	
	primary key(vor_id),
	foreign key(vor_zeit_id) references zeitraum (zei_id),
	foreign key(vor_nut_id) references nutzer (nut_id)
);

insert into status (sta_bezeichnung , sta_id) values
("Administrator", 1),
("Dozent", 2);

insert into zeitraum (zei_beginn, zei_ende ) values
("09:00:00", "12:15:00"),
("13:15:00", "16:30");

insert into nutzer (nut_vorname, nut_nachname , nut_status_id , nut_email , nut_passwort) values
("Sebastian", "Richter", 1, "Sebastian.Richter@dhbw-stuttgart.de", "1234"),
("Raymond", "Bimazibute", 2, "Raymond.Bimazibute@dhbw-stuttgart.de", "1234");

insert into vorlesung(vor_titel, vor_datum, vor_zeit_id, vor_nut_id) values
("Wirtschaftsinformatik", "2020-05-11", 1, 1),
("Fort. Systementwicklung", "2020-05-11", 2, 2);