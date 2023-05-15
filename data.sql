use oee;

-- machine table data
insert into machine (id, machineName, maintenanceDate, hasMaintenance) values('CPX25', 'Assembly machine', date('2023-04-21'), true);
insert into machine (id, machineName, maintenanceDate, hasMaintenance) values('CPX26', 'Assembly machine', date('2023-04-21'), true);
insert into machine (id, machineName, maintenanceDate, hasMaintenance) values('CPX27', 'Assembly machine', date('2023-04-21'), true);

-- interruptions data
insert into interruptions (id, interruptionName, colorCode) values ('ITR10', 'Machine Overheat', '#08d45a');
insert into interruptions (id, interruptionName, colorCode) values ('ITR11', 'Stucking gears', '#ce0fdb');
insert into interruptions (id, interruptionName, colorCode) values ('ITR12', 'Broken part', '#08c4d1');

-- shift data
insert into shift (id, availability, performance, quality, productAmount, duration, productperminute) values ('SHF25', 67, 80, 94, 12032, time('3:25:3'), 32.6);
insert into shift (id, availability, performance, quality, productAmount, duration, productperminute) values ('SHF26', 75, 90, 55, 18032, time('2:12:56'), 12.5);
insert into shift (id, availability, performance, quality, productAmount, duration, productperminute) values ('SHF27', 32, 67, 77, 21000, time('1:46:45'), 23.5);

-- user settings data
insert into usersettings (machineSubscription) values ('CPX25');
insert into usersettings (machineSubscription) values ('CPX27');

-- machine interruptions data
insert into machineinterruptions (machineID, interruption, shiftID, duration) values ('CPX25', 'ITR10', 'SHF25', time('00:30:00'));
insert into machineinterruptions (machineID, interruption, shiftID, duration) values ('CPX25', 'ITR11', 'SHF26', time('00:45:00'));



-- Checking query machine
select * from machine;

-- Checking query interruptions
select * from interruptions;