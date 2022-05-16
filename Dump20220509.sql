CREATE DATABASE  IF NOT EXISTS `AirportsDataBase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `AirportsDataBase`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: AirportsDataBase
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `airline`
--

DROP TABLE IF EXISTS `airline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airline` (
  `idairline` int NOT NULL AUTO_INCREMENT,
  `airlineName` varchar(45) NOT NULL,
  `airlineCountry` varchar(45) NOT NULL,
  PRIMARY KEY (`idairline`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airline`
--

LOCK TABLES `airline` WRITE;
/*!40000 ALTER TABLE `airline` DISABLE KEYS */;
INSERT INTO `airline` VALUES (1,'Air Algerie','Algeria'),(2,'Aerolíneas Argentinas ','Argentina'),(3,'Línea Aérea Amaszonas','Bolivia'),(4,'Cambodia Angkor Air','Cambodia'),(5,'Cubana de Aviación','Cuba'),(6,'Guinea Airlines','Guinea'),(7,'Lao Airlines','Laos'),(8,'Air Madagascar','Madagascar'),(9,'MIAT','Mongolia'),(10,'AerCaribe Peru','Peru');
/*!40000 ALTER TABLE `airline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `airports`
--

DROP TABLE IF EXISTS `airports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `airportName` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `associatedAirline` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airports`
--

LOCK TABLES `airports` WRITE;
/*!40000 ALTER TABLE `airports` DISABLE KEYS */;
INSERT INTO `airports` VALUES (1,'Houari Boumediene Airport','Algeria','1','Air Algerie'),(2,'Cordoba Airport','Argentina','1','Air Algerie'),(3,'El Alto International Airport','Bolivia','1','Air Algerie'),(4,'Phnom Penh','Cambodia','1','Air Algerie'),(5,'Jose Marti International Airport','Cuba','1','Air Algerie'),(6,'Conakry Gbessia Airport','Guinea','1','Air Algerie'),(7,'Vientiane Wattay Airport','Laos','1','Air Algerie'),(8,'Ivato International Airport','Madagascar','1','Air Algerie'),(9,'Chinggis Khaan International Airport','Mongolia','1','Air Algerie'),(10,'Jorge Chávez International Airport','Peru','1','Air Algerie'),(88,'Some New Airport','KH / KHM Cambodia','Far away','Air 1');
/*!40000 ALTER TABLE `airports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL,
  `country_code_iso` varchar(45) DEFAULT NULL,
  `country_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'DZ / DZA','Algeria'),(2,'AR / ARG','Argentina'),(3,'BO / Bol','Bolivia'),(4,'KH / KHM','Cambodia'),(5,'CU / CUB','Cuba'),(6,'GN / GIN','Guinea'),(7,'LA / LAO','Laos'),(8,'MG / MDG','Madagascar'),(9,'MN / MNG','Mongolia'),(10,'PE / PER','Peru');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'AirportsDataBase'
--

--
-- Dumping routines for database 'AirportsDataBase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 10:45:40
