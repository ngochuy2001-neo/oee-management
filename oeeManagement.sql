create database oee;

-- drop database oee;

use oee;

create table machine(
	id varchar(255) primary key,
    machineName varchar(255),
    maintenanceDate date,
    hasMaintenance bool
);

create table shift (
	id varchar(255) primary key,
    availability int,
    performance int, 
	quality int,
    productAmount bigint,
    duration time,
    productperminute real
);

create table interruptions(
	id varchar(255) primary key,
    interruptionName varchar(255),
    colorCode varchar(255)
);

create table machineInterruptions(
	id int primary key auto_increment,
    machineID varchar(255),
    interruption varchar(255),
    shiftID varchar(255),
    duration varchar(255),
    foreign key (machineID) references machine(id),
    foreign key (interruption) references interruptions(id),
    foreign key (shiftID) references shift(id)
);

create table userSettings(
	id int primary key auto_increment,
    machineSubscription varchar(255),
    foreign key (machineSubscription) references machine(id)
);

create table shiftProductionData(
	id varchar(255) primary key,
    shiftID varchar(255),
    shiftTimeStamp time,
    production bigint,
    foreign key (shiftID) references shift(id)
);

create table shiftDetails(
	id int primary key auto_increment,
    shiftID varchar(255),
    machineWork varchar(255),
    availability int,
    performance int,
    quality int,
    productAmount int,
    duration time,
    productperminute real,
    foreign key (shiftID) references shift(id),
    foreign key (machineWork) references machine(id)
);