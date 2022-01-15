--test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	email varchar(100),
	birthday DATE
)



--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, email, birthday) values (1, 'Travis', 'tlesieur0@moonfruit.com', '2021-05-04');
insert into employee (id, name, email, birthday) values (2, 'Gun', 'ghenzley1@oaic.gov.au', '2021-03-05');
insert into employee (id, name, email, birthday) values (3, 'Prentiss', 'ptrude2@pinterest.com', '2021-10-09');
insert into employee (id, name, email, birthday) values (4, 'Nonna', 'nkettoe3@ca.gov', '2021-03-16');
insert into employee (id, name, email, birthday) values (5, 'Mersey', 'mrudinger4@independent.co.uk', '2021-05-26');
insert into employee (id, name, email, birthday) values (6, 'Renado', 'rmcneish5@cbc.ca', '2021-11-02');
insert into employee (id, name, email, birthday) values (7, 'Belva', 'bgoodsir6@domainmarket.com', '2021-09-12');
insert into employee (id, name, email, birthday) values (8, 'Rebecca', 'rrawcliffe7@digg.com', '2021-07-15');
insert into employee (id, name, email, birthday) values (9, 'Helli', 'hlappine8@booking.com', '2021-04-01');
insert into employee (id, name, email, birthday) values (10, 'Alonso', 'agittoes9@cisco.com', '2021-04-09');
insert into employee (id, name, email, birthday) values (11, 'Wernher', 'wsturtona@domainmarket.com', '2021-09-02');
insert into employee (id, name, email, birthday) values (12, 'Wat', 'wlittefairb@instagram.com', '2021-02-17');
insert into employee (id, name, email, birthday) values (13, 'Idalina', 'ibackwellc@spiegel.de', '2021-12-02');
insert into employee (id, name, email, birthday) values (14, 'Corney', 'cfarragherd@mediafire.com', '2021-06-12');
insert into employee (id, name, email, birthday) values (15, 'Archie', 'amosese@tmall.com', '2021-03-09');
insert into employee (id, name, email, birthday) values (16, 'Jehu', 'jpullingerf@noaa.gov', '2021-11-28');
insert into employee (id, name, email, birthday) values (17, 'Consolata', 'cgoldstrawg@eepurl.com', '2021-11-14');
insert into employee (id, name, email, birthday) values (18, 'Benni', 'bglencroscheh@time.com', '2021-04-05');
insert into employee (id, name, email, birthday) values (19, 'Vernice', 'vwallasi@addthis.com', '2021-10-22');
insert into employee (id, name, email, birthday) values (20, 'Cornelia', 'ckemberyj@sun.com', '2021-08-07');
insert into employee (id, name, email, birthday) values (21, 'Agata', 'acotteek@homestead.com', '2021-05-17');
insert into employee (id, name, email, birthday) values (22, 'Vi', 'vdewsburyl@simplemachines.org', '2021-06-06');
insert into employee (id, name, email, birthday) values (23, 'Lil', 'lhardypigginm@netscape.com', '2021-09-02');
insert into employee (id, name, email, birthday) values (24, 'Kellina', 'kwallsworthn@nifty.com', '2021-10-05');
insert into employee (id, name, email, birthday) values (25, 'Ingeberg', 'igerckeno@topsy.com', '2021-12-19');
insert into employee (id, name, email, birthday) values (26, 'Fonsie', 'finnottp@vinaora.com', '2021-10-24');
insert into employee (id, name, email, birthday) values (27, 'Marleen', 'mwickendenq@webs.com', '2021-06-18');
insert into employee (id, name, email, birthday) values (28, 'Jeana', 'jstrattonr@aboutads.info', '2021-03-04');
insert into employee (id, name, email, birthday) values (29, 'Sandra', 'searengeys@mit.edu', '2021-09-14');
insert into employee (id, name, email, birthday) values (30, 'Quillan', 'qlillimant@google.com.hk', '2021-08-06');
insert into employee (id, name, email, birthday) values (31, 'Arron', 'aeustisu@ted.com', '2021-05-27');
insert into employee (id, name, email, birthday) values (32, 'Jess', 'jsimenonv@xing.com', '2021-10-01');
insert into employee (id, name, email, birthday) values (33, 'Shelia', 'sduigedw@loc.gov', '2021-10-30');
insert into employee (id, name, email, birthday) values (34, 'Neda', 'nwewellx@geocities.com', '2021-02-16');
insert into employee (id, name, email, birthday) values (35, 'Gerardo', 'gbooley@gravatar.com', '2021-10-02');
insert into employee (id, name, email, birthday) values (36, 'Brew', 'bbleesz@yahoo.co.jp', '2021-11-20');
insert into employee (id, name, email, birthday) values (37, 'Becka', 'bmickleborough10@weather.com', '2021-11-30');
insert into employee (id, name, email, birthday) values (38, 'Jilleen', 'jriediger11@cdc.gov', '2021-07-03');
insert into employee (id, name, email, birthday) values (39, 'Town', 'tprop12@about.com', '2021-05-29');
insert into employee (id, name, email, birthday) values (40, 'Michaelina', 'mbestar13@adobe.com', '2021-05-12');
insert into employee (id, name, email, birthday) values (41, 'Sanders', 'slongthorn14@washington.edu', '2021-09-05');
insert into employee (id, name, email, birthday) values (42, 'Tiffany', 'thalesworth15@indiegogo.com', '2021-03-29');
insert into employee (id, name, email, birthday) values (43, 'Rudd', 'rpattillo16@msn.com', '2021-06-28');
insert into employee (id, name, email, birthday) values (44, 'Clementia', 'cmacsweeney17@youtube.com', '2021-04-08');
insert into employee (id, name, email, birthday) values (45, 'Romy', 'rkildale18@google.nl', '2021-06-08');
insert into employee (id, name, email, birthday) values (46, 'Benjamin', 'bossenna19@github.io', '2021-04-28');
insert into employee (id, name, email, birthday) values (47, 'Minne', 'mdovidian1a@bing.com', '2021-04-26');
insert into employee (id, name, email, birthday) values (48, 'Kathrine', 'kcockerham1b@pcworld.com', '2021-11-11');
insert into employee (id, name, email, birthday) values (49, 'Wernher', 'wbarney1c@adobe.com', '2021-05-18');
insert into employee (id, name, email, birthday) values (50, 'Claude', 'cloreit1d@paypal.com', '2021-02-25');




--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee
SET email = 'lacy@mail.com',
	birthday = '1994-09-15'	
WHERE name = 'Lacy';

UPDATE employee
SET name = 'Gürcan',
	email = 'gurcan@mail.com'
WHERE birthday = '2021-08-20';


UPDATE employee
SET name = 'Ricardo',
	birthday = '1894-11-25'
WHERE email = 'hskinley4@mail.ru';


UPDATE employee
SET email = 'ricardo@mail.com',
	birthday = '2023-03-22'
WHERE name = 'Ricardo';


UPDATE employee
SET name = 'Akkara',
	email = 'akkara@mail.com',
	birthday = '2033-03-03'
WHERE id = 50;




--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee
WHERE id = 3;


DELETE FROM employee
WHERE name = 'Edi';


DELETE FROM employee
WHERE email = 'ricardo@mail.com';


DELETE FROM employee
WHERE birthday = '1994-09-15';


DELETE FROM employee
WHERE id = 50;