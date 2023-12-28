-- MariaDB dump 10.19  Distrib 10.11.4-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: RANKERS
-- ------------------------------------------------------
-- Server version	10.11.4-MariaDB-1~deb12u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `matchday0`
--

DROP TABLE IF EXISTS `matchday0`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday0` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday0_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday0_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday0`
--

LOCK TABLES `matchday0` WRITE;
/*!40000 ALTER TABLE `matchday0` DISABLE KEYS */;
INSERT INTO `matchday0` VALUES
(1,'unow1992@gmail.com','15:00',1,'2023-12-31'),
(2,'unow1992@gmail.com','10:00',1,'2023-12-31');
/*!40000 ALTER TABLE `matchday0` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday1`
--

DROP TABLE IF EXISTS `matchday1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday1_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday1_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `matchday1_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday1`
--

LOCK TABLES `matchday1` WRITE;
/*!40000 ALTER TABLE `matchday1` DISABLE KEYS */;
INSERT INTO `matchday1` VALUES
(1,'unow1992@gmail.com','15:00',1,'2024-01-01'),
(2,'unow1992@gmail.com','15:00',1,'2024-01-01');
/*!40000 ALTER TABLE `matchday1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday2`
--

DROP TABLE IF EXISTS `matchday2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday2_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday2_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday2`
--

LOCK TABLES `matchday2` WRITE;
/*!40000 ALTER TABLE `matchday2` DISABLE KEYS */;
/*!40000 ALTER TABLE `matchday2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday3`
--

DROP TABLE IF EXISTS `matchday3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday3_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday3_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday3`
--

LOCK TABLES `matchday3` WRITE;
/*!40000 ALTER TABLE `matchday3` DISABLE KEYS */;
INSERT INTO `matchday3` VALUES
(1,'unow1992@gmail.com','10:00',1,'2024-01-03'),
(2,'unow1992@gmail.com','10:00',1,'2024-01-03');
/*!40000 ALTER TABLE `matchday3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday4`
--

DROP TABLE IF EXISTS `matchday4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday4_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday4_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday4`
--

LOCK TABLES `matchday4` WRITE;
/*!40000 ALTER TABLE `matchday4` DISABLE KEYS */;
INSERT INTO `matchday4` VALUES
(2,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(3,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(4,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(5,'unow1992@gmail.com','15:00',1,'2023-12-28'),
(6,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(7,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(8,'unow1992@gmail.com','10:00',1,'2023-12-28'),
(9,'unow0517@gmail.com','10:00',2,'2023-12-28'),
(10,'unow0517@gmail.com','15:00',2,'2023-12-28');
/*!40000 ALTER TABLE `matchday4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday5`
--

DROP TABLE IF EXISTS `matchday5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday5` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday5_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday5_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday5`
--

LOCK TABLES `matchday5` WRITE;
/*!40000 ALTER TABLE `matchday5` DISABLE KEYS */;
INSERT INTO `matchday5` VALUES
(3,'unow1992@gmail.com','10:00',1,'2023-12-29'),
(4,'unow0517@gmail.com','10:00',2,'2023-12-29');
/*!40000 ALTER TABLE `matchday5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchday6`
--

DROP TABLE IF EXISTS `matchday6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matchday6` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday6_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday6_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday6`
--

LOCK TABLES `matchday6` WRITE;
/*!40000 ALTER TABLE `matchday6` DISABLE KEYS */;
INSERT INTO `matchday6` VALUES
(1,'unow1992@gmail.com','10:00',1,'2023-12-30');
/*!40000 ALTER TABLE `matchday6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_stats`
--

DROP TABLE IF EXISTS `user_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_stats` (
  `user_id` int(11) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `win` int(11) DEFAULT 0,
  `lose` int(11) DEFAULT 0,
  `rating` int(11) DEFAULT 1000,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_stats_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_stats`
--

LOCK TABLES `user_stats` WRITE;
/*!40000 ALTER TABLE `user_stats` DISABLE KEYS */;
INSERT INTO `user_stats` VALUES
(NULL,'unow1992@naver.com',0,0,1000),
(10,'unow1992@daum.net',0,0,1000);
/*!40000 ALTER TABLE `user_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'unow1992@gmail.com','$2b$10$OrZJYyJktwMQ647fJtCrYOU9S6k4AJzRCGM9gCm5T3LoCSGN2RRjq'),
(2,'unow0517@gmail.com','$2b$10$qCZ4bBBatAiSmNdipY0q0eHVTQCD35ZbpJbUjqUzMw3E7BH9nN92G'),
(3,'unow1234@gmail.com','$2b$10$ddPfnBZB.IDdlx1MTdsKuObJCfZnGn1mVdWJjM5sPL1gvqhRWjEZq'),
(4,'unow12345@gmail.com','$2b$10$AgDfPxzZFNUtWjlquhQYF.Jl72ucRTrxt39wuk2QORd2cxc0NPmpu'),
(5,'unow1992@google.com','$2b$10$MZ3OAO6yYoHsegBKJFiv6.tDut7GTVc.uAmoD4hKC5QuqW9358Xj6'),
(6,'unow01234@gmail.com','$2b$10$T0vkLB9psVmVRiUGOlPFuOssfRDUinLhigMmUzftjRWhr68tGGWC6'),
(7,'unow199222@naver.com','$2b$10$UvTiAfAn1KMMyD4yRugbRukr/L5vYbvm2FqW6xlyN3TrPEgqrp9Wm'),
(8,'unow1992@apple.com','$2b$10$2q7OJI/7ylovmHUz1YpHI.SWbkY50RWlq3seacSAkpLQxvJaN5uuu'),
(9,'unow1992@naver.com','$2b$10$C17mhBp3FYL19fTcAKI.KuBnCMkaa/rvfvDnzlvNilSGF1psHLgP.'),
(10,'unow1992@daum.net','$2b$10$FQAIAdgFHqWpxw4yMfTNnOR3OYezFIjSk7BamtEVM1o14LLdLlFMy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-28 17:41:43
