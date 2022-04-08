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
-- Table structure for table `bagel_data`
--

CREATE TABLE `bagel_data` (
  `id` int(13) NOT NULL,
  `user_id` int(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(300) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bagel_data`
--

INSERT INTO `bagel_data` (`id`, `user_id`, `type`, `description`, `img`, `date_create`) VALUES
(1, 6, 'Sesame Bagel', 'Ipsum sunt sunt aliquip ut in aliquip ad ut nisi magna. Enim occaecat ad deserunt cillum deserunt non.', 'https://via.placeholder.com/400/983/fff/?text=undefined', '2022-02-03 07:23:44'),
(2, 7, 'Sesame Bagel', 'Incididunt enim in ullamco aliquip incididunt. Qui amet cillum ullamco cupidatat ullamco dolore non eu quis qui excepteur.', 'https://via.placeholder.com/400/739/fff/?text=undefined', '2022-01-27 01:48:07'),
(3, 9, 'Sesame Bagel', 'Qui et laboris tempor consequat nulla officia magna laboris ex deserunt deserunt et laboris. Laborum anim et qui irure magna cupidatat incididunt quis reprehenderit id eu officia.', 'https://via.placeholder.com/400/968/fff/?text=undefined', '2022-03-29 10:32:37'),
(4, 5, 'Cheese Bagel', 'Consequat amet reprehenderit nulla eu consectetur. Culpa sint ut laborum irure et et non et pariatur irure.', 'https://via.placeholder.com/400/749/fff/?text=undefined', '2022-02-17 11:02:01'),
(5, 3, 'Sesame Bagel', 'Nisi laboris nisi tempor culpa incididunt ex officia laboris consectetur culpa. Mollit enim officia labore exercitation irure mollit excepteur culpa consequat minim excepteur consectetur eu deserunt.', 'https://via.placeholder.com/400/915/fff/?text=undefined', '2022-03-29 10:10:45'),
(6, 3, 'Cheese Bagel', 'Labore pariatur aliquip sunt proident deserunt Lorem consectetur aute. Deserunt ex exercitation sint excepteur Lorem ex officia proident sunt ipsum proident occaecat eiusmod.', 'https://via.placeholder.com/400/901/fff/?text=undefined', '2022-01-16 07:59:13'),
(7, 6, 'Plain Bagel', 'Nisi qui commodo eu Lorem. Nisi consectetur nostrud esse sint laboris.', 'https://via.placeholder.com/400/729/fff/?text=undefined', '2022-01-15 03:20:00'),
(8, 3, 'Plain Bagel', 'Velit sint esse nulla sunt aute minim. Non ipsum ea laborum ipsum sit consequat amet sit minim cillum veniam laborum consequat.', 'https://via.placeholder.com/400/773/fff/?text=undefined', '2022-02-12 08:58:11'),
(9, 3, 'Plain Bagel', 'Ullamco enim laborum duis adipisicing do irure est id velit reprehenderit aute. Dolore id aliquip laborum consequat elit ea ex anim dolor ullamco ea.', 'https://via.placeholder.com/400/903/fff/?text=undefined', '2022-01-21 09:26:33'),
(10, 3, 'Cheese Bagel', 'Amet ullamco est deserunt ad exercitation consequat fugiat elit nulla esse tempor. Officia nulla reprehenderit id occaecat aliqua nostrud reprehenderit esse.', 'https://via.placeholder.com/400/984/fff/?text=undefined', '2022-03-04 03:31:56'),
(11, 3, 'Plain Bagel', 'Ipsum nulla qui labore culpa. Cillum amet excepteur sint laboris excepteur dolor qui in officia aliqua reprehenderit elit.', 'https://via.placeholder.com/400/997/fff/?text=undefined', '2022-04-04 11:29:07'),
(12, 10, 'Sesame Bagel', 'Eu consectetur mollit sit eiusmod voluptate velit labore dolor ipsum Lorem. Reprehenderit commodo ex ex proident laborum minim.', 'https://via.placeholder.com/400/927/fff/?text=undefined', '2022-02-08 11:54:33'),
(13, 1, 'Cheese Bagel', 'Adipisicing ullamco dolor commodo magna amet pariatur incididunt aute eu. Amet fugiat ea in deserunt anim officia dolor cupidatat ullamco fugiat deserunt velit.', 'https://via.placeholder.com/400/795/fff/?text=undefined', '2022-01-01 06:59:24'),
(14, 10, 'Sesame Bagel', 'Enim nulla consequat dolore nisi velit eu ut deserunt excepteur commodo. Ad ut ex laborum Lorem elit adipisicing exercitation fugiat exercitation.', 'https://via.placeholder.com/400/864/fff/?text=undefined', '2022-01-20 12:43:10'),
(15, 5, 'Cheese Bagel', 'Labore sit exercitation in est nostrud proident sit proident. Ullamco deserunt consectetur excepteur fugiat do ullamco.', 'https://via.placeholder.com/400/931/fff/?text=undefined', '2022-02-23 03:45:52'),
(16, 3, 'Plain Bagel', 'Dolore eu consequat minim ullamco ut. Irure mollit fugiat et consequat irure ex nostrud incididunt non veniam pariatur ea enim ut.', 'https://via.placeholder.com/400/795/fff/?text=undefined', '2022-03-29 05:12:03'),
(17, 3, 'Cheese Bagel', 'Cillum commodo tempor labore mollit. Ullamco eiusmod cillum elit consequat et eu id irure nisi labore amet.', 'https://via.placeholder.com/400/706/fff/?text=undefined', '2022-01-07 12:13:06'),
(18, 5, 'Cheese Bagel', 'Qui irure labore irure dolor exercitation et aliqua est officia ex nulla aliqua excepteur. Ipsum eu ipsum elit do dolore laboris ex dolor et ipsum aute ipsum enim.', 'https://via.placeholder.com/400/707/fff/?text=undefined', '2022-03-25 10:22:16'),
(19, 3, 'Cheese Bagel', 'Velit qui magna adipisicing pariatur anim cillum aute tempor nulla. Occaecat dolore sit aliquip dolore deserunt laborum aliquip Lorem minim Lorem aliqua.', 'https://via.placeholder.com/400/761/fff/?text=undefined', '2022-01-11 05:00:46'),
(20, 8, 'Plain Bagel', 'Ut laborum fugiat Lorem laboris cillum duis occaecat ea est in pariatur. Nostrud non id consectetur fugiat fugiat velit nostrud.', 'https://via.placeholder.com/400/926/fff/?text=undefined', '2022-02-15 10:11:36'),
(21, 6, 'Cheese Bagel', 'Cillum pariatur incididunt mollit laborum esse enim excepteur nulla. Culpa eu ullamco Lorem deserunt nisi ut dolore.', 'https://via.placeholder.com/400/804/fff/?text=undefined', '2022-03-25 09:07:02'),
(22, 1, 'Sesame Bagel', 'Aliqua aute et consequat aliquip nostrud occaecat in culpa adipisicing qui dolor quis et. Aliqua velit id ad ipsum ut mollit qui duis.', 'https://via.placeholder.com/400/930/fff/?text=undefined', '2022-01-01 01:30:17'),
(23, 10, 'Cheese Bagel', 'In nisi velit fugiat ipsum quis amet id cupidatat sit reprehenderit quis exercitation ut sunt. Ad ad fugiat aliquip dolore sint pariatur mollit.', 'https://via.placeholder.com/400/703/fff/?text=undefined', '2022-02-09 08:05:44'),
(24, 3, 'Sesame Bagel', 'Eiusmod elit veniam magna deserunt aliquip duis minim esse tempor. Non labore ipsum duis consequat laborum excepteur duis ad.', 'https://via.placeholder.com/400/789/fff/?text=undefined', '2022-03-06 08:08:34'),
(25, 9, 'Sesame Bagel', 'Aliqua cillum do duis minim est esse officia aliqua ullamco pariatur qui. Qui in proident eu do eu anim consectetur culpa tempor eu ad nisi mollit ea.', 'https://via.placeholder.com/400/820/fff/?text=undefined', '2022-04-01 01:29:51'),
(26, 4, 'Cheese Bagel', 'Duis pariatur elit quis commodo minim tempor officia anim elit. Dolor nisi magna irure cillum fugiat.', 'https://via.placeholder.com/400/737/fff/?text=undefined', '2022-02-04 08:29:24'),
(27, 7, 'Plain Bagel', 'Aliqua nisi et tempor ad officia nulla qui. Minim veniam dolor labore irure excepteur.', 'https://via.placeholder.com/400/978/fff/?text=undefined', '2022-02-27 10:49:26'),
(28, 1, 'Sesame Bagel', 'Ex incididunt pariatur elit ex cupidatat fugiat dolor esse ex proident voluptate consectetur. Duis et esse enim consequat culpa aute fugiat adipisicing labore sit veniam incididunt nostrud veniam.', 'https://via.placeholder.com/400/913/fff/?text=undefined', '2022-03-11 10:40:43'),
(29, 6, 'Sesame Bagel', 'Amet dolor veniam elit laboris sint pariatur proident cillum magna sit esse velit. Labore aute id cupidatat nulla magna pariatur irure duis eu proident occaecat consectetur magna commodo.', 'https://via.placeholder.com/400/798/fff/?text=undefined', '2022-03-16 02:23:12'),
(30, 7, 'Cheese Bagel', 'Ad quis aliquip nostrud et ipsum non ex in enim ea ut. Elit aliqua cillum et cupidatat laborum ex id ut occaecat ex.', 'https://via.placeholder.com/400/923/fff/?text=undefined', '2022-03-01 01:13:28'),
(31, 4, 'Plain Bagel', 'Ex aliquip mollit excepteur mollit enim ipsum excepteur exercitation. Ut quis irure labore consectetur esse anim adipisicing.', 'https://via.placeholder.com/400/930/fff/?text=undefined', '2022-01-12 10:31:46'),
(32, 8, 'Plain Bagel', 'Lorem consectetur anim proident adipisicing do incididunt ex est aute Lorem ullamco Lorem excepteur mollit. Tempor exercitation officia amet sit amet non est ut officia aliquip occaecat.', 'https://via.placeholder.com/400/873/fff/?text=undefined', '2022-04-03 04:33:06'),
(33, 9, 'Sesame Bagel', 'Laborum eiusmod magna laborum aliquip Lorem amet id reprehenderit nostrud fugiat minim ipsum sunt. Minim anim aliquip enim excepteur consequat qui ea mollit laborum reprehenderit cillum eu incididunt consectetur.', 'https://via.placeholder.com/400/949/fff/?text=undefined', '2022-04-08 11:51:24'),
(34, 8, 'Sesame Bagel', 'Eu pariatur tempor non aliquip reprehenderit est officia ullamco voluptate. Sunt consectetur aliquip ut Lorem mollit nisi Lorem ullamco aliqua magna non.', 'https://via.placeholder.com/400/791/fff/?text=undefined', '2022-04-04 05:57:02'),
(35, 3, 'Sesame Bagel', 'Ut dolor Lorem elit minim non incididunt enim laboris ad. Veniam ad enim proident ex cupidatat in exercitation nostrud eiusmod mollit nulla anim reprehenderit amet.', 'https://via.placeholder.com/400/794/fff/?text=undefined', '2022-02-22 08:09:21'),
(36, 3, 'Cheese Bagel', 'Excepteur ea incididunt nostrud aute magna. Proident laboris aute ea sunt do.', 'https://via.placeholder.com/400/851/fff/?text=undefined', '2022-04-03 09:00:37'),
(37, 1, 'Sesame Bagel', 'Officia do quis ex qui consectetur sunt amet Lorem est nulla esse mollit ea. Culpa duis magna excepteur irure labore aliquip sit nulla enim proident consequat ipsum proident.', 'https://via.placeholder.com/400/926/fff/?text=undefined', '2022-04-01 03:55:42'),
(38, 8, 'Plain Bagel', 'Sunt culpa dolor reprehenderit voluptate non sint. Occaecat incididunt qui duis excepteur exercitation.', 'https://via.placeholder.com/400/714/fff/?text=undefined', '2022-02-16 05:14:16'),
(39, 2, 'Cheese Bagel', 'Cupidatat voluptate incididunt aliqua excepteur commodo excepteur commodo consequat in dolore voluptate duis ex. Incididunt in labore ullamco velit.', 'https://via.placeholder.com/400/975/fff/?text=undefined', '2022-01-24 08:25:56'),
(40, 2, 'Sesame Bagel', 'Consectetur est magna qui proident. Aliquip proident tempor duis proident.', 'https://via.placeholder.com/400/946/fff/?text=undefined', '2022-03-13 10:23:15'),
(41, 6, 'Cheese Bagel', 'Velit esse tempor qui cillum. Eiusmod laboris cillum sunt minim aute commodo do qui sit qui magna reprehenderit anim commodo.', 'https://via.placeholder.com/400/749/fff/?text=undefined', '2022-02-22 12:14:34'),
(42, 5, 'Plain Bagel', 'Minim elit officia elit culpa ullamco veniam esse. Pariatur quis consectetur et do velit consequat esse est culpa fugiat nulla.', 'https://via.placeholder.com/400/950/fff/?text=undefined', '2022-02-01 04:36:41'),
(43, 8, 'Plain Bagel', 'Fugiat aliqua est culpa in dolor. Sint reprehenderit labore nulla proident voluptate eu non nisi amet aute laboris.', 'https://via.placeholder.com/400/926/fff/?text=undefined', '2022-01-25 03:24:41'),
(44, 1, 'Plain Bagel', 'Eu laboris ipsum incididunt dolore laborum ipsum cupidatat voluptate. Id proident ad ex irure incididunt dolor irure nisi tempor cupidatat cupidatat labore ad.', 'https://via.placeholder.com/400/942/fff/?text=undefined', '2022-01-22 03:34:18'),
(45, 3, 'Cheese Bagel', 'Ea adipisicing commodo amet elit esse officia incididunt aute minim laboris minim. Magna culpa aliqua nostrud est nulla irure ipsum labore dolore non ex qui.', 'https://via.placeholder.com/400/709/fff/?text=undefined', '2022-01-29 04:19:30'),
(46, 9, 'Plain Bagel', 'Aute laboris incididunt excepteur deserunt deserunt veniam deserunt velit reprehenderit cillum elit mollit duis. Occaecat eu est et fugiat proident laborum id officia magna laboris aute.', 'https://via.placeholder.com/400/838/fff/?text=undefined', '2022-03-26 02:19:02'),
(47, 6, 'Sesame Bagel', 'Elit sit commodo consequat tempor amet fugiat amet voluptate esse. Consequat aute duis id ut occaecat amet.', 'https://via.placeholder.com/400/985/fff/?text=undefined', '2022-03-13 05:19:53'),
(48, 2, 'Plain Bagel', 'Laboris id sint laboris nulla nulla consequat. Est aute voluptate velit anim nulla culpa velit ad laborum non eu et eiusmod irure.', 'https://via.placeholder.com/400/833/fff/?text=undefined', '2022-03-13 01:36:51'),
(49, 9, 'Sesame Bagel', 'Ut officia eu ut et. Aliquip amet pariatur ullamco aliquip.', 'https://via.placeholder.com/400/901/fff/?text=undefined', '2022-03-07 12:58:38'),
(50, 8, 'Cheese Bagel', 'Ipsum commodo velit aute cillum fugiat. Labore tempor ad ad voluptate sit velit ad ullamco.', 'https://via.placeholder.com/400/914/fff/?text=undefined', '2022-02-02 02:32:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bagel_data`
--
ALTER TABLE `bagel_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bagel_data`
--
ALTER TABLE `bagel_data`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
