-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 08:11 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teams_meetings`
--
CREATE DATABASE IF NOT EXISTS `teams_meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `teams_meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `DevelopmentTeams`
--

CREATE TABLE `DevelopmentTeams` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `DevelopmentTeams`
--

INSERT INTO `DevelopmentTeams` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('e8135c59-fcbd-11ef-a910-0242ac110002', 'UI Team', '2025-03-09 08:09:31', '2025-03-09 08:09:31'),
('e8136280-fcbd-11ef-a910-0242ac110002', 'Mobile Team', '2025-03-09 08:09:31', '2025-03-09 08:09:31'),
('e813666c-fcbd-11ef-a910-0242ac110002', 'React Team', '2025-03-09 08:09:31', '2025-03-09 08:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `Meetings`
--

CREATE TABLE `Meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `groupId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `startDatetime` datetime NOT NULL,
  `endDatetime` datetime NOT NULL,
  `meetingDescription` text COLLATE utf8mb4_general_ci,
  `meetingRoom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Meetings`
--

INSERT INTO `Meetings` (`id`, `groupId`, `startDatetime`, `endDatetime`, `meetingDescription`, `meetingRoom`, `createdAt`, `updatedAt`) VALUES
('19775607-fcbe-11ef-a910-0242ac110002', 'e8135c59-fcbd-11ef-a910-0242ac110002', '2025-03-20 10:10:40', '2025-03-20 10:10:40', 'new project ', '', '2025-03-09 08:10:11', '2025-03-09 08:10:11'),
('197760a0-fcbe-11ef-a910-0242ac110002', 'e813666c-fcbd-11ef-a910-0242ac110002', '2025-03-11 10:10:40', '2025-03-11 12:10:40', 'new year ', '', '2025-03-09 08:10:11', '2025-03-09 08:10:11'),
('197768ca-fcbe-11ef-a910-0242ac110002', 'e8136280-fcbd-11ef-a910-0242ac110002', '2025-03-12 10:10:40', '2025-03-12 12:10:40', 'new project ', '', '2025-03-09 08:10:11', '2025-03-09 08:10:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DevelopmentTeams`
--
ALTER TABLE `DevelopmentTeams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Meetings`
--
ALTER TABLE `Meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupId` (`groupId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Meetings`
--
ALTER TABLE `Meetings`
  ADD CONSTRAINT `Meetings_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `DevelopmentTeams` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
