create DATABASE cable;
use cable;
create table customer
(customerId MEDIUMINT NOT NULL AUTO_INCREMENT,
houseNumber char(10) NOT NULL,
customerName varchar(50),
primary key(customerId,houseNumber)
);
create table customerRate
(customerId MEDIUMINT NOT NULL,
houseNumber char(10) NOT NULL,
startDate date,
endDate date,
rate decimal(7,2),
FOREIGN KEY (customerId,houseNumber) REFERENCES customer (customerId,houseNumber) on delete restrict,
primary key (customerId,houseNumber)
);
create table payment
(customerId MEDIUMINT NOT NULL,
houseNumber char(10) NOT NULL,
payAmount decimal(7,2),
payDate date,
FOREIGN KEY (customerId,houseNumber) REFERENCES customer (customerId,houseNumber) on delete restrict
);
