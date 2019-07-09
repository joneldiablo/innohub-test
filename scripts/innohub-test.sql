/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : innohub-test

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2019-07-08 14:41:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `line-address` varchar(255) NOT NULL,
  `city` int(10) unsigned NOT NULL COMMENT 'could be city, town or township',
  `state` int(10) unsigned NOT NULL,
  `country` int(10) unsigned NOT NULL COMMENT 'international id (like mexico=52)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for projectOwnershipTypes
-- ----------------------------
DROP TABLE IF EXISTS `projectOwnershipTypes`;
CREATE TABLE `projectOwnershipTypes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` int(10) unsigned NOT NULL,
  `creationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `project-f` (`type`),
  CONSTRAINT `project-f` FOREIGN KEY (`type`) REFERENCES `projectTypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for projectTypes
-- ----------------------------
DROP TABLE IF EXISTS `projectTypes`;
CREATE TABLE `projectTypes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for relation-projects-tags
-- ----------------------------
DROP TABLE IF EXISTS `relation-projects-tags`;
CREATE TABLE `relation-projects-tags` (
  `tagId` int(10) unsigned NOT NULL,
  `projectId` int(10) unsigned NOT NULL,
  KEY `tagId` (`tagId`),
  KEY `project-rel-f1` (`projectId`),
  CONSTRAINT `project-rel-f1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `relation-projects-tags_ibfk_1` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for relation-projects-users-ownershipType
-- ----------------------------
DROP TABLE IF EXISTS `relation-projects-users-ownershipType`;
CREATE TABLE `relation-projects-users-ownershipType` (
  `userId` int(10) unsigned NOT NULL,
  `projectId` int(10) unsigned NOT NULL,
  `ownershipTypeId` int(10) unsigned NOT NULL,
  KEY `userId` (`userId`),
  KEY `rel-project-f` (`projectId`),
  KEY `ownershipType-f` (`ownershipTypeId`),
  CONSTRAINT `ownershipType-f` FOREIGN KEY (`ownershipTypeId`) REFERENCES `projectOwnershipTypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `rel-project-f` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `relation-projects-users-ownershipType_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for relation-tasks
-- ----------------------------
DROP TABLE IF EXISTS `relation-tasks`;
CREATE TABLE `relation-tasks` (
  `tagId` int(10) unsigned NOT NULL,
  `tagIdRel` int(10) unsigned NOT NULL,
  KEY `tagId` (`tagId`),
  KEY `tagIdRel` (`tagIdRel`),
  CONSTRAINT `relation-tasks_ibfk_1` FOREIGN KEY (`tagId`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `relation-tasks_ibfk_2` FOREIGN KEY (`tagIdRel`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for relation-users-countries
-- ----------------------------
DROP TABLE IF EXISTS `relation-users-countries`;
CREATE TABLE `relation-users-countries` (
  `userId` int(10) unsigned NOT NULL,
  `countryId` int(10) unsigned NOT NULL COMMENT 'international country id',
  KEY `userid-f` (`userId`),
  CONSTRAINT `userid-f` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `type` int(10) unsigned NOT NULL,
  `expiration` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `type` (`type`),
  CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`type`) REFERENCES `sessionTypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sessionTypes
-- ----------------------------
DROP TABLE IF EXISTS `sessionTypes`;
CREATE TABLE `sessionTypes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `owner` int(10) unsigned NOT NULL,
  `creationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `updateDate` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deadline` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `cancelDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `order` int(11) unsigned zerofill DEFAULT '00000000000',
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for taskScores
-- ----------------------------
DROP TABLE IF EXISTS `taskScores`;
CREATE TABLE `taskScores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taskid` int(10) unsigned DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `score` float unsigned zerofill DEFAULT NULL,
  `releaseDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `taskid` (`taskid`),
  CONSTRAINT `taskScores_ibfk_1` FOREIGN KEY (`taskid`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `curp` varchar(50) NOT NULL,
  `rfc` varchar(50) NOT NULL,
  `address` int(10) unsigned DEFAULT NULL,
  `genre` tinyint(3) unsigned zerofill DEFAULT '000' COMMENT '0: famele, 1: male',
  `username` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL COMMENT 'this is not required because could be don''t set at start, and if social network login type',
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `curp-index` (`curp`),
  UNIQUE KEY `rfc-index` (`rfc`),
  UNIQUE KEY `username-index` (`username`),
  KEY `address-f` (`address`),
  CONSTRAINT `address-f` FOREIGN KEY (`address`) REFERENCES `address` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
