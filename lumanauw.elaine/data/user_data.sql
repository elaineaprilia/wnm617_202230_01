CREATE TABLE IF NOT EXISTS `data` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO user_data VALUES
(1,'Vang','user1','user1@gmail.com','md5(pass)','https://via.placeholder.com/400/732/fff/?text=user1','2022-02-12 03:07:14'),
(2,'Brianna','user2','user2@gmail.com','md5(pass)','https://via.placeholder.com/400/890/fff/?text=user2','2022-01-23 03:18:04'),
(3,'Isabella','user3','user3@gmail.com','md5(pass)','https://via.placeholder.com/400/885/fff/?text=user3','2022-01-18 12:27:00'),
(4,'Burch','user4','user4@gmail.com','md5(pass)','https://via.placeholder.com/400/739/fff/?text=user4','2022-02-16 06:26:36'),
(5,'Samantha','user5','user5@gmail.com','md5(pass)','https://via.placeholder.com/400/926/fff/?text=user5','2022-02-08 10:53:03'),
(6,'Miranda','user6','user6@gmail.com','md5(pass)','https://via.placeholder.com/400/960/fff/?text=user6','2022-04-03 07:45:36'),
(7,'Harriett','user7','user7@gmail.com','md5(pass)','https://via.placeholder.com/400/815/fff/?text=user7','2022-03-28 04:23:35'),
(8,'Justice','user8','user8@gmail.com','md5(pass)','https://via.placeholder.com/400/981/fff/?text=user8','2022-01-11 09:48:47'),
(9,'Austin','user9','user9@gmail.com','md5(pass)','https://via.placeholder.com/400/713/fff/?text=user9','2022-04-07 05:02:53'),
(10,'Candice','user10','user10@gmail.com','md5(pass)','https://via.placeholder.com/400/765/fff/?text=user10','2022-03-18 01:21:35');