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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday0_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday0_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday0`
--

LOCK TABLES `matchday0` WRITE;
/*!40000 ALTER TABLE `matchday0` DISABLE KEYS */;
INSERT INTO `matchday0` VALUES
(3,'unow1@gmail.com','10:00',21,'2024-01-07',1000),
(4,'unow1@gmail.com','15:00',21,'2024-01-07',1000),
(5,'unow2@gmail.com','10:00',22,'2024-01-07',1000),
(6,'unow2@gmail.com','15:00',22,'2024-01-07',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday1_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday1_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `matchday1_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday1`
--

LOCK TABLES `matchday1` WRITE;
/*!40000 ALTER TABLE `matchday1` DISABLE KEYS */;
INSERT INTO `matchday1` VALUES
(3,'unow1@gmail.com','10:00',21,'2024-01-08',1000),
(4,'unow1@gmail.com','15:00',21,'2024-01-08',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday2_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday2_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday2`
--

LOCK TABLES `matchday2` WRITE;
/*!40000 ALTER TABLE `matchday2` DISABLE KEYS */;
INSERT INTO `matchday2` VALUES
(14,'unow1@gmail.com','10:00',21,'2024-01-09',1000),
(15,'unow1@gmail.com','15:00',21,'2024-01-09',1000),
(16,'unow2@gmail.com','10:00',22,'2024-01-09',1000),
(17,'unow2@gmail.com','15:00',22,'2024-01-09',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday3_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday3_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday3`
--

LOCK TABLES `matchday3` WRITE;
/*!40000 ALTER TABLE `matchday3` DISABLE KEYS */;
INSERT INTO `matchday3` VALUES
(6,'unow1@gmail.com','10:00',21,'2024-01-03',1000),
(7,'unow1@gmail.com','15:00',21,'2024-01-03',1000),
(8,'unow2@gmail.com','10:00',22,'2024-01-03',1000),
(9,'unow2@gmail.com','15:00',22,'2024-01-03',1000),
(10,'unow2@gmail.com','15:00',22,'2024-01-03',1000),
(11,'unow2@gmail.com','10:00',22,'2024-01-03',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday4_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday4_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday4`
--

LOCK TABLES `matchday4` WRITE;
/*!40000 ALTER TABLE `matchday4` DISABLE KEYS */;
INSERT INTO `matchday4` VALUES
(11,'unow1@gmail.com','10:00',21,'2024-01-04',1000),
(12,'unow1@gmail.com','15:00',21,'2024-01-04',1000),
(13,'unow2@gmail.com','10:00',22,'2024-01-04',1000),
(14,'unow2@gmail.com','15:00',22,'2024-01-04',1000),
(15,'unow2@gmail.com','10:00',22,'2024-01-04',1000),
(16,'unow2@gmail.com','10:00',22,'2024-01-04',1000),
(17,'unow2@gmail.com','10:00',22,'2024-01-04',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday5_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday5_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday5`
--

LOCK TABLES `matchday5` WRITE;
/*!40000 ALTER TABLE `matchday5` DISABLE KEYS */;
INSERT INTO `matchday5` VALUES
(5,'unow1@gmail.com','10:00',21,'2024-01-05',1000),
(6,'unow1@gmail.com','15:00',21,'2024-01-05',1000),
(7,'unow2@gmail.com','10:00',22,'2024-01-05',1000),
(8,'unow2@gmail.com','15:00',22,'2024-01-05',1000);
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
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `matchday6_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `matchday6_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday6`
--

LOCK TABLES `matchday6` WRITE;
/*!40000 ALTER TABLE `matchday6` DISABLE KEYS */;
INSERT INTO `matchday6` VALUES
(2,'unow1@gmail.com','10:00',21,'2024-01-06',1000),
(3,'unow1@gmail.com','15:00',21,'2024-01-06',1000),
(4,'unow2@gmail.com','10:00',22,'2024-01-06',1000),
(5,'unow2@gmail.com','15:00',22,'2024-01-06',1000);
/*!40000 ALTER TABLE `matchday6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `uuid` varchar(36) DEFAULT NULL,
  `user1_id` int(11) DEFAULT NULL,
  `user1_email` varchar(150) DEFAULT NULL,
  `user1_rating` int(11) DEFAULT NULL,
  `user2_id` int(11) DEFAULT NULL,
  `user2_email` varchar(150) DEFAULT NULL,
  `user2_rating` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
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
(21,'unow1@gmail.com',0,0,1000),
(22,'unow2@gmail.com',0,0,1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(21,'unow1@gmail.com','$2b$10$AxRRytQ4SO/eEHilDQiBjOXp4nsHuirD2dbj/tZzrl14xU8hRNXiq'),
(22,'unow2@gmail.com','$2b$10$IZAmEDgbSSFv.Y4MCpU/LOcGYrGlFsuBiM3gdY8h0xtqBJL0z/TPi');
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

-- Dump completed on 2024-01-03 18:42:13
