-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 08, 2022 at 09:06 PM
-- Server version: 10.5.15-MariaDB-cll-lve
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bursadap_elaine_wnm617`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(300) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `name`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Vang', 'user1', 'user1@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/732/fff/?text=user1', '2022-02-12 03:07:14'),
(2, 'Brianna', 'user2', 'user2@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/890/fff/?text=user2', '2022-01-23 03:18:04'),
(3, 'Isabella', 'user3', 'user3@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/885/fff/?text=user3', '2022-01-18 12:27:00'),
(4, 'Burch', 'user4', 'user4@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/739/fff/?text=user4', '2022-02-16 06:26:36'),
(5, 'Samantha', 'user5', 'user5@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/926/fff/?text=user5', '2022-02-08 10:53:03'),
(6, 'Miranda', 'user6', 'user6@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/960/fff/?text=user6', '2022-04-03 07:45:36'),
(7, 'Harriett', 'user7', 'user7@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/815/fff/?text=user7', '2022-03-28 04:23:35'),
(8, 'Justice', 'user8', 'user8@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/981/fff/?text=user8', '2022-01-11 09:48:47'),
(9, 'Austin', 'user9', 'user9@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/713/fff/?text=user9', '2022-04-07 05:02:53'),
(10, 'Candice', 'user10', 'user10@gmail.com', 'md5(pass)', 'https://via.placeholder.com/400/765/fff/?text=user10', '2022-03-18 01:21:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
