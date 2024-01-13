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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday0`
--

LOCK TABLES `matchday0` WRITE;
/*!40000 ALTER TABLE `matchday0` DISABLE KEYS */;
INSERT INTO `matchday0` VALUES
(10,'hello@gmail.com','15:00',27,'2024-01-07',1000),
(11,'hello@gmail.com','10:00',27,'2024-01-07',1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday1`
--

LOCK TABLES `matchday1` WRITE;
/*!40000 ALTER TABLE `matchday1` DISABLE KEYS */;
INSERT INTO `matchday1` VALUES
(9,'hello@gmail.com','15:00',27,'2024-01-08',1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday2`
--

LOCK TABLES `matchday2` WRITE;
/*!40000 ALTER TABLE `matchday2` DISABLE KEYS */;
INSERT INTO `matchday2` VALUES
(22,'hello@gmail.com','10:00',27,'2024-01-09',1000),
(23,'hello@gmail.com','15:00',27,'2024-01-09',1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday3`
--

LOCK TABLES `matchday3` WRITE;
/*!40000 ALTER TABLE `matchday3` DISABLE KEYS */;
INSERT INTO `matchday3` VALUES
(12,'nicu@gmail.com','15:00',25,'2024-01-10',1000),
(13,'hello@gmail.com','10:00',27,'2024-01-10',1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday4`
--

LOCK TABLES `matchday4` WRITE;
/*!40000 ALTER TABLE `matchday4` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday5`
--

LOCK TABLES `matchday5` WRITE;
/*!40000 ALTER TABLE `matchday5` DISABLE KEYS */;
INSERT INTO `matchday5` VALUES
(19,'hello@gmail.com','10:00',27,'2024-01-05',1000),
(20,'hello@gmail.com','15:00',27,'2024-01-05',1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchday6`
--

LOCK TABLES `matchday6` WRITE;
/*!40000 ALTER TABLE `matchday6` DISABLE KEYS */;
INSERT INTO `matchday6` VALUES
(7,'nicu@gmail.com','15:00',25,'2024-01-06',1000),
(9,'hello@gmail.com','10:00',27,'2024-01-06',1000);
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
INSERT INTO `matches` VALUES
('2af2ea25-ab3a-11ee-965a-080027970166',12,'nicu@gmail.com',1000,11,'stefan@gmail.com',1000,'2024-01-05','10:00'),
('28685d0f-ab3d-11ee-965a-080027970166',9,'4242@gmail.com',1000,13,'nicu@gmail.com',1000,'2024-01-05','10:00'),
('dc7a0b95-ab42-11ee-965a-080027970166',10,'unow1@gmail.com',1000,15,'nicu@gmail.com',1000,'2024-01-05','10:00'),
('988a1dc9-abd1-11ee-b50b-080027970166',16,'nicu@gmail.com',1000,17,'abcde@google.com',1000,'2024-01-05','10:00'),
('d3ff6fd8-abd1-11ee-b50b-080027970166',19,'abcde@google.com',1000,18,'nicu@gmail.com',1000,'2024-01-09','10:00'),
('d4d156cd-abd1-11ee-b50b-080027970166',7,'nicu@gmail.com',1000,9,'abcde@google.com',1000,'2024-01-07','10:00'),
('08a815e2-abd2-11ee-b50b-080027970166',29,'nicu@gmail.com',1000,31,'abcde@google.com',1000,'2024-01-04','10:00'),
('1ee01418-abd2-11ee-b50b-080027970166',8,'abcde@google.com',1000,7,'nicu@gmail.com',1000,'2024-01-06','15:00'),
('afc4500c-abd2-11ee-b50b-080027970166',20,'abcde@google.com',1000,21,'hello@gmail.com',1000,'2024-01-09','10:00'),
('155111a8-abd3-11ee-b50b-080027970166',7,'nicu@gmail.com',1000,9,'hello@gmail.com',1000,'2024-01-08','15:00'),
('0001fe90-ace0-11ee-9656-080027970166',12,'unow1992@gmail.com',1000,11,'hello@gmail.com',1000,'2024-01-08','10:00');
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `results` (
  `uuid` varchar(36) DEFAULT NULL,
  `input_user_email` varchar(150) DEFAULT NULL,
  `winner_id` int(11) DEFAULT NULL,
  `winner_email` varchar(150) DEFAULT NULL,
  `winner_score1` int(11) DEFAULT 0,
  `winner_score2` int(11) DEFAULT 0,
  `winner_score3` int(11) DEFAULT 0,
  `loser_id` int(11) DEFAULT NULL,
  `loser_email` varchar(150) DEFAULT NULL,
  `loser_score1` int(11) DEFAULT 0,
  `loser_score2` int(11) DEFAULT 0,
  `loser_score3` int(11) DEFAULT 0,
  `date` date DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES
('64784eb0-b13d-11ee-95bc-080027970166','hello@gmail.com',27,'hello@gmail.com',11,1,11,28,'unow1992@gmail.com',1,11,1,'2024-01-08','10:00'),
('b547a9fb-b13d-11ee-95bc-080027970166','hello@gmail.com',25,'nicu@gmail.com',11,1,11,27,'hello@gmail.com',1,11,1,'2024-01-08','15:00'),
('8cd74be4-b15a-11ee-9653-080027970166','nicu@gmail.com',25,'nicu@gmail.com',11,1,11,27,'hello@gmail.com',1,11,1,'2024-01-08','15:00');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
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
(22,'unow2@gmail.com',0,0,1000),
(23,'4242@gmail.com',0,0,1000),
(24,'stefan@gmail.com',0,0,1000),
(25,'nicu@gmail.com',1,0,1568),
(26,'abcde@google.com',0,0,1000),
(27,'hello@gmail.com',0,1,885),
(28,'unow1992@gmail.com',0,0,1000),
(29,'uno1992@gmail.com',0,0,1000);
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(21,'unow1@gmail.com','$2b$10$AxRRytQ4SO/eEHilDQiBjOXp4nsHuirD2dbj/tZzrl14xU8hRNXiq'),
(22,'unow2@gmail.com','$2b$10$IZAmEDgbSSFv.Y4MCpU/LOcGYrGlFsuBiM3gdY8h0xtqBJL0z/TPi'),
(23,'4242@gmail.com','$2b$10$QpLex1pda4zOqW1qWC92Dergh4iXqQVL8SexaiBy5dqyqJDo541nW'),
(24,'stefan@gmail.com','$2b$10$nu2W5Es2Mw.HyIyoaYJjTeR778UAMUBgZnHmbFQe2UaNK9AjJgpeG'),
(25,'nicu@gmail.com','$2b$10$D.NQd9ELGkJUgbSkJNZPwOUdUQhIREyc2WqVZeOPwNl/0MGDSVVFK'),
(26,'abcde@google.com','$2b$10$o.eXEwClURg8LjvWIm1FPO4krkuWR1xW3Ib6MgmeGZdhdztiybtwm'),
(27,'hello@gmail.com','$2b$10$Hb9ZBVxLAFNe2A4w4J40R.P0f71yPYjvZEDdlxo8.6wjzrN3/pIAK'),
(28,'unow1992@gmail.com','$2b$10$iywb2Q3LprfQFyu5CIjRZeuBGpDXoqDCOu7skOgRNpoubRaxdCe3S'),
(29,'uno1992@gmail.com','$2b$10$1wV.5tzoNUnLLJyHCIv9u.V/zhMUcvNaWG1HfH80lCMKDIxLklFDe');
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

-- Dump completed on 2024-01-13  4:45:50
