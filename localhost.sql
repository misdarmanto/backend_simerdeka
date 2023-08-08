-- Adminer 4.8.1 MySQL 5.5.5-10.6.12-MariaDB-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `simerdeka` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `simerdeka`;

DROP TABLE IF EXISTS `academic`;
CREATE TABLE `academic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `academic_id` text NOT NULL,
  `academic_name` varchar(200) NOT NULL,
  `academic_email` varchar(200) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `academic` (`id`, `academic_id`, `academic_name`, `academic_email`, `created_on`, `modified_on`, `deleted`) VALUES
(4,	'93df0b9a-8497-41d5-9f8c-370806253b09',	'Akademik',	'academic@itera.ac.id',	'2023-05-31 21:36:08',	NULL,	0);

DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department_id` text NOT NULL,
  `department_name` varchar(200) NOT NULL,
  `department_email` varchar(200) NOT NULL,
  `department_is_registered` bit(1) DEFAULT b'0',
  `created_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `department` (`id`, `department_id`, `department_name`, `department_email`, `department_is_registered`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'sains@itera.ac.id',	CONV('0', 2, 10) + 0,	'2023-05-31 20:39:21',	NULL,	0),
(2,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'jtik@itera.ac.id',	CONV('0', 2, 10) + 0,	'2023-05-31 20:39:21',	NULL,	0),
(3,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'jtpi@itera.ac.id',	CONV('0', 2, 10) + 0,	'2023-05-31 20:39:21',	NULL,	0);

DROP TABLE IF EXISTS `log_book`;
CREATE TABLE `log_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log_book_id` text NOT NULL,
  `log_book_report_week` int(11) NOT NULL,
  `log_book_report_file` text NOT NULL,
  `log_book_student_id` text NOT NULL,
  `log_book_student_name` varchar(200) NOT NULL,
  `log_book_student_nim` varchar(200) NOT NULL,
  `log_book_study_program_id` text NOT NULL,
  `log_book_study_program_name` varchar(250) NOT NULL,
  `log_book_department_id` text NOT NULL,
  `log_book_department_name` text NOT NULL,
  `log_book_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `log_book` (`id`, `log_book_id`, `log_book_report_week`, `log_book_report_file`, `log_book_student_id`, `log_book_student_name`, `log_book_student_nim`, `log_book_study_program_id`, `log_book_study_program_name`, `log_book_department_id`, `log_book_department_name`, `log_book_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(11,	'6daf72bd-eaec-4c5d-adcd-50d38e9477de',	3,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9390502e-c254-4363-afc2-84a672e3a347',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:58:32',	'2023-07-11 17:58:32',	1),
(12,	'95825c7d-0a85-43ee-82cc-898b4d08d72a',	2,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0f130ba0-956e-456f-8d14-91f64cf9eb40',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:58:32',	'2023-07-11 17:58:32',	1),
(13,	'9e5b973e-5881-4219-95ff-4b64e4ebb6c7',	1,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=038702fc-fb3f-4a10-b333-64e6c810fed3',	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'1323232223',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:58:32',	'2023-07-11 17:58:32',	0),
(14,	'9b42e7fe-057e-4ab4-b274-7be70b37c19a',	5,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1feb4964-4eab-4fa8-b2aa-6c6dcb1e93a2',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:58:32',	'2023-07-11 17:58:32',	0),
(15,	'cd872256-d200-4650-8083-443d249181d4',	1,	'http://localhost:8000/public/file-1689832988712-842505558.pdf',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-20 12:55:22',	NULL,	0);

DROP TABLE IF EXISTS `lp3m`;
CREATE TABLE `lp3m` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lp3m_id` text NOT NULL,
  `lp3m_name` varchar(200) NOT NULL,
  `lp3m_email` varchar(200) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `lp3m` (`id`, `lp3m_id`, `lp3m_name`, `lp3m_email`, `created_on`, `modified_on`, `deleted`) VALUES
(4,	'e44f033b-856b-40e0-946c-166dba272644',	'lp3m',	'lp3m@itera.ac.id',	'2023-05-31 21:36:08',	NULL,	0);

DROP TABLE IF EXISTS `mata_kuliah`;
CREATE TABLE `mata_kuliah` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mata_kuliah_id` text NOT NULL,
  `mata_kuliah_name` varchar(250) NOT NULL,
  `mata_kuliah_study_program_id` text NOT NULL,
  `mata_kuliah_study_program_name` text NOT NULL,
  `mata_kuliah_department_id` text NOT NULL,
  `mata_kuliah_department_name` text NOT NULL,
  `mata_kuliah_sks_total` int(11) DEFAULT 0,
  `mata_kuliah_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mata_kuliah` (`id`, `mata_kuliah_id`, `mata_kuliah_name`, `mata_kuliah_study_program_id`, `mata_kuliah_study_program_name`, `mata_kuliah_department_id`, `mata_kuliah_department_name`, `mata_kuliah_sks_total`, `mata_kuliah_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(11,	'6daf72bd-eaec-4c5d-adcd-50d38e9477de',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9390502e-c254-4363-afc2-84a672e3a347',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:53:43',	'2023-07-11 17:53:43',	1),
(12,	'95825c7d-0a85-43ee-82cc-898b4d08d72a',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0f130ba0-956e-456f-8d14-91f64cf9eb40',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	1),
(13,	'9e5b973e-5881-4219-95ff-4b64e4ebb6c7',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=038702fc-fb3f-4a10-b333-64e6c810fed3',	'8cd17bb9-d727-4578-99c5ssadsa',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(14,	'9b42e7fe-057e-4ab4-b274-7be70b37c19a',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1feb4964-4eab-4fa8-b2aa-6c6dcb1e93a2',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(15,	'4e1fd765-9442-4e20-a69c-b819da599046',	'test',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	1),
(16,	'a95dda59-0349-4fda-9766-5b907f4fd874',	'qwer',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	1),
(17,	'eaef1343-47df-445b-99f6-a1646e6998f5',	'kalkulus',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	6,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(18,	'aac1dd51-b7d7-47b8-b1f0-cf7eb1f6c6f3',	'Jaringan Komputer',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	3,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(19,	'369454ec-95d2-4e1a-b693-cb21640c417f',	'Basis Data',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	2,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(20,	'e95a7f1f-d173-4b9f-a1c3-10e95a66f356',	'Kalkulus II',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	3,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(21,	'eaff5a93-f0da-4ba6-9bad-a23983f133d9',	'Algoritma dan Struktur Data',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	0),
(22,	'f6d5eb45-bbf6-4f55-a47f-ebbb65c73316',	'object oriented programming',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	3,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:56:39',	'2023-07-11 17:56:39',	1),
(23,	'1bb9bd1f-a6d2-4e40-8626-8a877ffb4266',	'Statistik',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 02:07:51',	'2023-08-03 02:07:51',	1),
(24,	'eca031f3-ca4f-47f5-b299-26a4544a62ee',	'Al-jabar',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	3,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-02 04:26:25',	'2023-08-02 04:26:25',	1);

DROP TABLE IF EXISTS `mbkm_program`;
CREATE TABLE `mbkm_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mbkm_program_id` text NOT NULL,
  `mbkm_program_name` varchar(250) NOT NULL,
  `mbkm_program_created_by` varchar(100) NOT NULL,
  `mbkm_program_category` varchar(250) NOT NULL,
  `mbkm_program_syllabus` text NOT NULL,
  `mbkm_program_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program` (`id`, `mbkm_program_id`, `mbkm_program_name`, `mbkm_program_created_by`, `mbkm_program_category`, `mbkm_program_syllabus`, `mbkm_program_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(7,	'042d600e-b713-4327-a6bd-edf6bc9d67b1',	'test',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c1a6a6f4-36a7-4e6b-b6c6-b8c6b43ab333',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-06-03 09:32:36',	'2023-06-03 09:32:36',	1),
(8,	'0bacf063-08be-4256-9047-efc188bee9bf',	'bangkit',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c8d5af17-4f87-4b12-9c38-75bfe840c94d',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-06-03 09:33:33',	'2023-06-03 09:33:33',	1),
(9,	'0802050a-5ae1-4371-8001-2f88d008df42',	'UI/UX Dicoding Academy',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=65e458ef-624d-4a03-8ed0-ddebe3e1e843',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-02 16:05:46',	'2023-07-02 16:05:46',	0),
(10,	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=694b2117-295b-475a-938b-b7b0a81fc72f',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-02 16:05:18',	'2023-07-02 16:05:18',	0),
(11,	'8f208a7a-eb76-4f98-b159-819239873a70',	'Magang Toko Pedia',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b908a769-6972-4e2d-91f8-bbbd8a5cf33f',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-03 09:33:41',	'2023-06-03 09:33:41',	1),
(12,	'2cfca652-1f68-4ef7-bf5a-518a837fae51',	'test',	'lp3m',	'Indonesian International Student Mobility Awards (IISMA)',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=d09f0f4a-35af-424a-8c4a-5c88df369e88',	'b199251e-ff06-4e56-9266-a24d0d71c5e2',	'2023-06-03 09:32:32',	'2023-06-03 09:32:32',	1),
(13,	'e04c913c-dc93-420a-bbdf-da8ab541c9d3',	'program mbkm',	'lp3m',	'Studi Independen',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=29c23e7b-2dc4-4ac7-9d65-451f97ee6d85',	'52cbddaf-6c53-4434-9f0f-5b278e63aec9',	'2023-07-11 16:51:02',	NULL,	0),
(14,	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'program baru',	'lp3m',	'Kampus Mengajar',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2F9product.jpeg?alt=media&token=463491e3-cca9-4b47-b73b-1bb742089447',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-19 10:05:33',	NULL,	0);

DROP TABLE IF EXISTS `mbkm_program_prodi`;
CREATE TABLE `mbkm_program_prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mbkm_program_prodi_id` text NOT NULL,
  `mbkm_program_prodi_program_id` text NOT NULL,
  `mbkm_program_prodi_study_program_id` text NOT NULL,
  `mbkm_program_prodi_study_program_name` text NOT NULL,
  `mbkm_program_prodi_department_id` text NOT NULL,
  `mbkm_program_prodi_department_name` text NOT NULL,
  `mbkm_program_prodi_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program_prodi` (`id`, `mbkm_program_prodi_id`, `mbkm_program_prodi_program_id`, `mbkm_program_prodi_study_program_id`, `mbkm_program_prodi_study_program_name`, `mbkm_program_prodi_department_id`, `mbkm_program_prodi_department_name`, `mbkm_program_prodi_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(2,	'25a6be08-2799-48ab-8d1a-fa2b17a3f12f',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:50:21',	'2023-07-11 17:50:21',	1),
(17,	'25a6be08-2799-48ab-8d1a-fa2b17a3f12f',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(18,	'7728d4f2-6a74-4144-81e4-508319f5e3c3',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(19,	'602101f0-aeae-47a4-bce5-924e40a69bb6',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(20,	'b2690cde-4cf3-4e56-af84-1ed5c1d7f9c9',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(21,	'13475276-c703-47d1-b458-fdbfc0cb8bc8',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(22,	'c10f9e05-4a99-47df-adc3-511a8450c35c',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(23,	'ce355f0c-c169-4918-af8d-40d5484f6959',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(24,	'69ca09e0-bf5e-4843-9eed-58ee2e6ebc3f',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(25,	'2311ccaf-d332-4743-8044-375f632017d0',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(26,	'5cf145fd-f29e-4e51-957d-43921e8313fc',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(27,	'6aa40249-6d83-4843-9d61-11034ffce652',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(28,	'd069e150-1daf-47f7-9d8d-d0f9de116d00',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(29,	'b616ee00-4e3f-4005-8f6f-c24bbe383592',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(30,	'c3e78113-6af1-400b-8740-c749de2869e3',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(31,	'd1ce772e-6b93-4655-a8fd-f49078f1ce76',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(32,	'e4635e7b-6697-4827-a008-26abeb82fad1',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(33,	'320eee5d-7f86-40ef-886f-bb810773f075',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	1),
(34,	'af2f211e-ae8f-4a25-bdcd-dfe939aa26c6',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:50:14',	'2023-07-11 17:50:14',	1),
(35,	'ad63e40f-01b7-4169-adc8-5e3c4a10dfd5',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 14:27:44',	'2023-07-11 14:27:44',	1),
(36,	'563d3d04-a386-421a-9495-c5ef5a40646f',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 14:27:44',	'2023-07-11 14:27:44',	1),
(37,	'908036c5-917a-4c8c-b5b7-084408437ce1',	'0802050a-5ae1-4371-8001-2f88d008df42',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:51:30',	'2023-07-11 17:51:30',	0),
(38,	'244e9f1d-ddfd-41cc-94cb-4131e5e65016',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 20:58:06',	'0000-00-00 00:00:00',	0),
(39,	'6c4f597b-a08d-4642-bf3f-0fc4e86188c3',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-19 10:05:33',	'0000-00-00 00:00:00',	0),
(40,	'd5a6a889-5c1e-43f2-a910-36c9680dfa02',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(41,	'2b7dce0b-7574-4ca7-aeb5-0580d4c9bd6d',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(42,	'f675af62-b69d-4d7f-85f9-f9662924e77b',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(43,	'4419a189-bc1a-4707-a6c0-c28dd22d85bb',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(44,	'235956f4-c01b-47a5-ad82-86b6ee3dc02d',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(45,	'b661b739-0a62-4d24-b3be-27bf87a0f77b',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(46,	'3d650c39-2230-4fef-8d4b-c39ce0c8200e',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 01:59:31',	'2023-08-03 01:59:31',	1),
(47,	'593c4d06-98f5-4272-8ef6-190891b0de34',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-03 08:42:57',	'0000-00-00 00:00:00',	0);

DROP TABLE IF EXISTS `recomendation_letter`;
CREATE TABLE `recomendation_letter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recomendation_letter_id` text NOT NULL,
  `recomendation_letter_student_id` text NOT NULL,
  `recomendation_letter_study_program_id` text NOT NULL,
  `recomendation_letter_department_id` text NOT NULL,
  `recomendation_letter_student_transkrip` text NOT NULL,
  `recomendation_letter_dosen_wali` varchar(250) NOT NULL,
  `recomendation_letter_syllabus` text DEFAULT NULL,
  `recomendation_letter_approval_letter` text NOT NULL,
  `recomendation_letter_sptjm_letter` text DEFAULT NULL,
  `recomendation_letter_from_study_program` text DEFAULT NULL,
  `recomendation_letter_from_department` text DEFAULT NULL,
  `recomendation_letter_from_lp3m` text DEFAULT NULL,
  `recomendation_letter_from_academic` text DEFAULT NULL,
  `recomendation_letter_program_name` text NOT NULL,
  `recomendation_letter_program_description` text NOT NULL,
  `recomendation_letter_program_correlation` text NOT NULL,
  `recomendation_letter_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `recomendation_letter_status_message` text DEFAULT NULL,
  `recomendation_letter_assign_to_student` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_study_program` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_department` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_lp3m` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_academic` bit(1) DEFAULT NULL,
  `recomendation_letter_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `recomendation_letter` (`id`, `recomendation_letter_id`, `recomendation_letter_student_id`, `recomendation_letter_study_program_id`, `recomendation_letter_department_id`, `recomendation_letter_student_transkrip`, `recomendation_letter_dosen_wali`, `recomendation_letter_syllabus`, `recomendation_letter_approval_letter`, `recomendation_letter_sptjm_letter`, `recomendation_letter_from_study_program`, `recomendation_letter_from_department`, `recomendation_letter_from_lp3m`, `recomendation_letter_from_academic`, `recomendation_letter_program_name`, `recomendation_letter_program_description`, `recomendation_letter_program_correlation`, `recomendation_letter_status`, `recomendation_letter_status_message`, `recomendation_letter_assign_to_student`, `recomendation_letter_assign_to_study_program`, `recomendation_letter_assign_to_department`, `recomendation_letter_assign_to_lp3m`, `recomendation_letter_assign_to_academic`, `recomendation_letter_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(39,	'97ca4b67-f89a-4129-be2a-aa59843efbb3',	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=fb43633b-08a7-469d-90b8-2f0295853b88',	'dosen 5',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1aa63f42-1967-461f-82fe-3ea5febdd774',	NULL,	NULL,	NULL,	NULL,	NULL,	'dsds',	'',	'sdsd',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-06-01 09:01:10',	'2023-07-11 17:53:24',	0),
(40,	'5ec5baf5-b943-4386-bbf6-9fc49bbdcf23',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b8e6e894-492b-4ace-9ab3-3bd7fb46e7c4',	'dosen 2',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=ad4a2029-c023-4771-8445-7b87af69f415',	NULL,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=25b351f4-cf21-4ec0-b2a1-6f3fc4741dab',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=f4d8b113-1da6-4fb7-b053-eea4241eb2c2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=6d34d009-715d-4546-888c-2aeda606b540',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0953c0df-ae43-4465-9fd3-7533a2486981',	'sdsd',	'',	'sds',	'accepted',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-06-01 09:01:10',	'2023-07-11 17:49:24',	0),
(41,	'47460edc-c69b-4f3c-9874-224eb4182629',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FFinal%20Test%20Praktikum%20Teknik%20Telekomunikasi%201%20Modul%202%20-%20Google%20Forms.pdf?alt=media&token=87512182-f015-4e35-98ba-2f87a97d83a8',	'dosen 2',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FMisdar%20Manto_SPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=49e5b081-6c0b-443f-88b5-a1dba447ffc3',	NULL,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FSPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=c9136671-f30b-483b-afbf-6a8487bc0a7c',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FSPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=45a2c363-0ab4-409b-80f2-1f44f659e3a3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FSPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=74882374-0bc5-4570-bede-b08be0fa0896',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FSPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=9b6050d7-25cb-493e-a63b-382fd60b49f5',	'bangkit Android Development',	'',	'ee',	'accepted',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-06-07 21:04:32',	'2023-07-11 17:49:32',	0),
(42,	'8925a207-a1bf-47ca-9c6d-c21f57d910cf',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=6ca0af39-d63f-4a9c-8aaf-78c7d5649947',	'dosen 3',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=6bf15282-ae3c-4ed2-88a2-8d1785f1513a',	NULL,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=f22bbd45-9b0f-4ad8-a214-52fc6631b6b0',	NULL,	NULL,	NULL,	'qwertyio',	'',	'qwerty',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-06-30 20:03:11',	'2023-07-11 17:49:46',	0),
(43,	'ac2195dc-8881-4297-8b6d-f084e3516bd6',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=600a7043-5ebd-429c-afb0-e1c0e2795f0f',	'dosen 2',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=96b241c3-837f-428b-ae10-530cf2d696c1',	NULL,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0127aef3-b79d-4444-a7d9-0359add09c98',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=186d26b9-1149-448f-9c4b-79f8be138af0',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1ed4ee90-0b4c-4944-af89-66ee302fa131',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=581f1494-d358-4079-8026-0e17e8b62229',	'kampus mengajar',	'',	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor elit vel mi consectetur, eget tempus mauris tempor. Maecenas vehicula metus ut dui pulvinar, et volutpat tellus feugiat. Quisque in commodo nunc. Fusce auctor auctor augue id dapibus. Suspendisse egestas, ex ac congue consequat, mauris nisl gravida urna, ac bibendum erat quam ac enim. Suspendisse ultrices dolor eu lacus aliquet sollicitudin. Nullam semper est vel sem cursus, at auctor nisi tincidunt.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac nisl ac ante lobortis iaculis. Aliquam ut nisl sit amet lacus ultrices vulputate nec ut orci. Integer eleifend sagittis nisi, non luctus mi finibus non. Vivamus sit amet purus dapibus, semper nulla id, aliquet nisi. Praesent ultrices erat eu consequat sagittis. Donec faucibus risus sit amet lorem placerat, non euismod sem maximus. Proin non lectus et arcu dictum tempor. Mauris in felis non nisl congue egestas. Nulla facilisi. Donec malesuada, felis a iaculis scelerisque, mauris purus tempor massa, et venenatis lorem nisi at mi. Sed interdum, magna at eleifend cursus, purus lorem vulputate urna, nec convallis justo metus et mauris. Morbi consequat diam sed efficitur tristique.\r\n\r\nQuisque facilisis urna id facilisis efficitur. Sed sed nisl ac sem convallis tincidunt vel et libero. Mauris maximus viverra mi, vitae convallis justo auctor ac. Sed scelerisque metus id massa aliquam finibus. Fusce dapibus purus id tortor pulvinar, vitae semper erat lobortis. Sed vitae luctus sem, vel dignissim libero. Cras vulputate leo sit amet aliquam iaculis. Curabitur ullamcorper sem sed ipsum posuere, eget ullamcorper lorem cursus. Mauris id metus quis orci tincidunt gravida ut ut ex.',	'accepted',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-01 16:18:59',	'2023-07-11 17:49:56',	0),
(44,	'4aafefde-a1a7-4dc9-a175-9a2106ca97e5',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b715b824-333b-4b66-8819-bf5872531535',	'dosen 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=cc34fea5-160d-4833-a5bb-2807b608eda6',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=3f9f5445-cdba-4829-bf70-cb9a2f21727b',	NULL,	NULL,	NULL,	NULL,	NULL,	'test',	'test',	'dsdsd',	'rejected',	'Number of hours I just recognised the problem. If the sequlize don\'t find any difference in the DB values and the updateable values, then will generate an empty SQL string and want to execute this. So becaues of this the same sequlize throws this Query was empty message.',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-07 22:05:05',	'2023-07-11 17:50:02',	0),
(45,	'7e3d1160-9ad3-4f18-9194-79ab24928aab',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2F8img.webp?alt=media&token=6c7ae022-8f16-40b0-9251-ef2fc80459df',	'dosen 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2F8img.webp?alt=media&token=71e379d7-0d65-4fba-839a-211c6dd61d1e',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2F8img.webp?alt=media&token=fba8ca30-f228-48f5-89bc-1e938d6b3c54',	NULL,	NULL,	NULL,	NULL,	NULL,	'fdsf',	'dsfs',	'dsfds',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-19 21:54:23',	NULL,	0),
(49,	'7cd31486-a2be-4895-8283-d35013126e49',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'http://localhost:8000/public/file-1689834101754-904781739.pdf',	'dosen 4',	'http://localhost:8000/public/file-1689834104719-309130998.pdf',	'http://localhost:8000/public/file-1689834099044-419749869.pdf',	NULL,	'http://localhost:8000/public/file-1689834124849-458367809.pdf',	'http://localhost:8000/public/file-1689834148731-388476652.pdf',	'http://localhost:8000/public/file-1689834174858-561133695.pdf',	'http://localhost:8000/public/file-1689834190949-94850416.pdf',	'erewr',	'erew',	'rewr',	'accepted',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-20 12:55:22',	'2023-07-20 06:23:13',	0),
(50,	'6b5c7724-2321-4b48-9ab4-cc89274e8fb1',	'8cd17bb9-d727-4578-99c5ssadsa',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'4181f385-6386-4f48-9a07-bf039af11175',	'http://localhost:8000/public/file-1690552954061-19616595.pdf',	'dosen 3',	'http://localhost:8000/public/file-1690552963030-394606143.pdf',	'http://localhost:8000/public/file-1690552919612-373375856.pdf',	NULL,	'http://localhost:8000/public/file-1690552997682-682296253.pdf',	'http://localhost:8000/public/file-1690553056020-718616901.pdf',	'http://localhost:8000/public/file-1690950343725-787313846.pdf',	'http://localhost:8000/public/file-1690553116503-290502716.pdf',	'test 123',	'test 123',	'test 123',	'rejected',	'',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-28 21:00:26',	'2023-08-02 04:25:45',	0);

DROP TABLE IF EXISTS `report_participation`;
CREATE TABLE `report_participation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_participation_id` text NOT NULL,
  `report_participation_letter` text NOT NULL,
  `report_participation_status_message` text DEFAULT NULL,
  `report_participation_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `report_participation_study_program_id` text NOT NULL,
  `report_participation_department_id` text NOT NULL,
  `report_participation_student_id` text NOT NULL,
  `report_participation_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `report_participation` (`id`, `report_participation_id`, `report_participation_letter`, `report_participation_status_message`, `report_participation_status`, `report_participation_study_program_id`, `report_participation_department_id`, `report_participation_student_id`, `report_participation_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'89685f28-1733-4b14-87e6-fa4b1bc0cc32',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9936f98d-8a98-41b1-aff3-b17e9067f462',	NULL,	'accepted',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:47:01',	'2023-07-11 17:47:01',	0),
(11,	'3feb87f8-6c10-420f-919e-1c966bb829cb',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FMisdar%20Manto_SPTJM_Mahasiswa%20MSIB%20Angkatan%204.pdf?alt=media&token=63caa95d-280e-454b-a4ed-8bc1b4608626',	NULL,	'waiting',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:48:59',	'2023-07-11 17:48:59',	0),
(12,	'6b60f014-6981-499c-a83b-76b29371b940',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0cab8be4-8760-4c7c-a36b-b62d722eef50',	NULL,	'waiting',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:46:46',	'2023-07-11 17:46:46',	0),
(13,	'dfa1c77f-32d3-4ceb-b964-ca5782b079c3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=2fd14a96-8d9d-4dbf-86bc-733ea376c069',	NULL,	'accepted',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:46:42',	'2023-07-11 17:46:42',	0),
(14,	'a40d6227-9862-48a3-bb5a-1b0378622448',	'http://localhost:8000/public/file-1689832674495-890371762.pdf',	NULL,	'accepted',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-08-01 15:31:35',	'2023-08-01 15:31:35',	0),
(15,	'0b4f484c-8e55-43bb-9188-45247694f7f0',	'http://localhost:8000/public/file-1689832700334-906366743.pdf',	NULL,	'accepted',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-20 06:23:26',	'2023-07-20 06:23:26',	0),
(16,	'2f340074-da8b-46fb-a96a-228833ea14c9',	'http://localhost:8000/public/file-1690553547863-470324896.pdf',	NULL,	'accepted',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'4181f385-6386-4f48-9a07-bf039af11175',	'8cd17bb9-d727-4578-99c5ssadsa',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-28 14:12:41',	'2023-07-28 14:12:41',	0);

DROP TABLE IF EXISTS `semester`;
CREATE TABLE `semester` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `semester_id` text NOT NULL,
  `semester_created_by` text NOT NULL,
  `semester_name` text NOT NULL,
  `semester_status` enum('active','non-active') DEFAULT 'active',
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `semester` (`id`, `semester_id`, `semester_created_by`, `semester_name`, `semester_status`, `created_on`, `modified_on`, `deleted`) VALUES
(6,	'5f25be68-aa52-4f2a-9170-b519ec3ce3a4',	'lp3m',	'2022/2023 genap',	'non-active',	'2023-06-01 08:13:51',	'2023-06-01 08:13:51',	1),
(7,	'b7d9c8f4-f573-4267-a392-e704feeff12e',	'lp3m',	'2022/2023 ganjil',	'non-active',	'2023-06-01 08:12:38',	'2023-06-01 08:12:38',	1),
(8,	'19b0ba45-8ff3-486d-86ba-d9fcbc60128b',	'lp3m',	'2023/2024 genap',	'non-active',	'2023-06-01 08:16:37',	'2023-06-01 08:16:37',	1),
(9,	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'lp3m',	'2023/2024 ganjil',	'non-active',	'2023-06-01 08:14:08',	'2023-06-01 08:14:08',	1),
(10,	'247777fd-3a69-4e1f-b429-f469513d50f2',	'lp3m',	'baru sss',	'non-active',	'2023-06-01 08:20:47',	'2023-06-01 08:20:47',	1),
(11,	'52cbddaf-6c53-4434-9f0f-5b278e63aec9',	'lp3m',	'ddddd',	'non-active',	'2023-07-11 11:00:09',	'2023-07-11 11:00:09',	0),
(12,	'e7401adb-86db-4747-8eea-ed3cb3dfd1f2',	'lp3m',	'2023',	'non-active',	'2023-06-01 08:20:24',	'2023-06-01 08:20:24',	1),
(13,	'b199251e-ff06-4e56-9266-a24d0d71c5e2',	'lp3m',	'dsdsd',	'non-active',	'2023-06-26 13:22:13',	'2023-06-26 13:22:13',	0),
(14,	'29ff02f6-b5e0-451c-97ca-8846b1ab9dc1',	'lp3m',	'ssssssssssssssssssssssssssssssss',	'non-active',	'2023-06-01 08:20:47',	'2023-06-01 08:20:47',	1),
(15,	'121d1fc7-6ad8-4521-a8cf-1b22ac1d5a12',	'lp3m',	'test',	'non-active',	'2023-06-01 08:25:35',	'2023-06-01 08:25:35',	1),
(16,	'466d8343-b565-4bc3-acf8-77482dcacd19',	'lp3m',	'rrrrr',	'non-active',	'2023-06-01 08:25:45',	'2023-06-01 08:25:45',	1),
(17,	'cf06389a-778a-4b56-95e8-98eb802fadd1',	'lp3m',	'rrrrrr',	'non-active',	'2023-06-01 08:29:57',	'2023-06-01 08:29:57',	1),
(18,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'lp3m',	'genap',	'active',	'2023-07-19 03:15:38',	'2023-07-19 03:15:38',	0),
(19,	'b5d2932b-c026-4888-9ed9-e91a8f5ffb11',	'lp3m',	'semester baru',	'non-active',	'2023-07-19 03:15:38',	'2023-07-19 03:15:38',	0);

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

INSERT INTO `SequelizeMeta` (`name`) VALUES
('1.js'),
('2.js'),
('20230620151746-create-user.js'),
('3.js'),
('academic.js'),
('person.js'),
('test.js');

DROP TABLE IF EXISTS `sks_convertion`;
CREATE TABLE `sks_convertion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sks_convertion_id` text NOT NULL,
  `sks_convertion_name` varchar(200) NOT NULL,
  `sks_convertion_created_by` varchar(200) NOT NULL,
  `sks_convertion_mbkm_program_id` text NOT NULL,
  `sks_convertion_study_program_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sks_convertion` (`id`, `sks_convertion_id`, `sks_convertion_name`, `sks_convertion_created_by`, `sks_convertion_mbkm_program_id`, `sks_convertion_study_program_id`, `created_on`, `modified_on`, `deleted`) VALUES
(9,	'02b38ac9-1074-41de-b7a4-5eed1f89c0f9',	'skema 1',	'Dosen 1',	'ss',	'2sds2',	'2023-07-10 14:26:49',	NULL,	0);

DROP TABLE IF EXISTS `sks_convertion_schema`;
CREATE TABLE `sks_convertion_schema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sks_convertion_schema_id` text NOT NULL,
  `sks_convertion_schema_sks_convertion_id` text NOT NULL,
  `sks_convertion_schema_matkul_id` text NOT NULL,
  `sks_convertion_schema_study_program_id` text NOT NULL,
  `sks_convertion_schema_mbkm_program_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sks_convertion_schema` (`id`, `sks_convertion_schema_id`, `sks_convertion_schema_sks_convertion_id`, `sks_convertion_schema_matkul_id`, `sks_convertion_schema_study_program_id`, `sks_convertion_schema_mbkm_program_id`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'f0a08810-a797-4944-9237-827f9c8f15fa',	'02b38ac9-1074-41de-b7a4-5eed1f89c0f9',	'aac1dd51-b7d7-47b8-b1f0-cf7eb1f6c6f3',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'ss',	'2023-07-10 15:00:10',	NULL,	0);

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `student_id` text NOT NULL,
  `student_name` varchar(200) NOT NULL,
  `student_nim` varchar(200) NOT NULL,
  `student_email` varchar(200) NOT NULL,
  `student_is_registered` bit(1) DEFAULT b'0',
  `student_department_id` text NOT NULL,
  `student_department_name` text NOT NULL,
  `student_study_program_id` text NOT NULL,
  `student_study_program_name` text NOT NULL,
  `student_mbkm_program_id` text DEFAULT NULL,
  `student_transkrip_id` text DEFAULT NULL,
  `student_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `student_sks_total` int(11) DEFAULT 0,
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `student` (`id`, `student_id`, `student_name`, `student_nim`, `student_email`, `student_is_registered`, `student_department_id`, `student_department_name`, `student_study_program_id`, `student_study_program_name`, `student_mbkm_program_id`, `student_transkrip_id`, `student_semester_id`, `created_on`, `student_sks_total`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'budi.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	NULL,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:45:57',	10,	'2023-07-11 17:45:57',	0),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'124545444',	'eka.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	NULL,	NULL,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:46:07',	0,	'2023-07-11 17:46:07',	0),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'1323232223',	'Yono.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'0d373bab-7f46-4f57-8e1b-7397d91ff0ec',	NULL,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-28 14:14:11',	0,	'2023-07-28 14:14:11',	0),
(4,	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'Zaki T.Telekomunikasi',	'12040055500',	'Zaki.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	NULL,	NULL,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:46:23',	0,	'2023-07-11 17:46:23',	0);

DROP TABLE IF EXISTS `study_program`;
CREATE TABLE `study_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `study_program_id` text NOT NULL,
  `study_program_name` varchar(200) NOT NULL,
  `study_program_email` varchar(200) NOT NULL,
  `study_program_is_registered` bit(1) DEFAULT b'0',
  `study_program_department_id` text DEFAULT NULL,
  `study_program_department_name` varchar(200) DEFAULT NULL,
  `study_program_semester_id` text NOT NULL,
  `created_on` datetime NOT NULL,
  `modified_on` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `study_program` (`id`, `study_program_id`, `study_program_name`, `study_program_email`, `study_program_is_registered`, `study_program_department_id`, `study_program_department_name`, `study_program_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'd6a6c91e-f00c-4707-9b94-c7e7f9c0c658',	'Fisika',	'fisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(11,	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'matematika@itera.ac.id',	CONV('1', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(12,	'ae3bd350-8af8-4423-a5a6-3dc7991cba28',	'Biologi',	'biologi@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(13,	'ee0dc002-f505-4dc4-b992-10cde709da66',	'Kimia',	'kimia@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(14,	'42ccfb65-a027-4de9-95c4-e153832e60fe',	'Farmasi',	'farmasi@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(15,	'70ddb3ba-c592-4625-bd97-134771d0a80a',	'Atmosfer dan Keplanetan',	'atmosferdankeplanetan@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(16,	'f0b53d07-5559-4806-994a-0477d5c52d85',	'Sains Aktuaria',	'sainsaktuaria@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(17,	'886a85f1-f46a-490c-b036-c5b33dcb9974',	'Sains Lingkungan Kelautan',	'sainslingkungankelautan@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(18,	'80bc9c64-2f1c-45b0-bf6d-faf3d813b26b',	'Sains Data',	'sainsdata@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:00:33',	'2023-07-11 10:59:26',	0),
(19,	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'teknikgeomatika@itera.ac.id',	CONV('1', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-28 14:12:41',	0),
(20,	'db019be0-fd35-4a62-bc21-c24ba429a737',	'Perencanaan Wilayah dan Kota',	'perencanaanwilayahdankota@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(21,	'c5a99011-5297-4af2-906e-e1d2d1c3c6ae',	'Teknik Sipil',	'tekniksipil@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(22,	'7393626a-c66f-465b-b912-2a1a57613bbf',	'Arsitektur',	'arsitektur@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(23,	'c095307d-b3cc-43d4-a312-1daca397fbc9',	'ArsitekturTeknik Lingkungan',	'tekniklingkungan@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(24,	'afcbb4c0-908f-4eee-b1a1-6dbe88ee4f79',	'Teknik Kelautan',	'teknikkelautan@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(25,	'e1bfa7f2-7bac-4dec-a636-94b3a996603a',	'Desain Komunikasi Visual',	'desainkomunikasivisual@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(26,	'93d597ad-2192-47a8-89f6-203d1ccb99d8',	'Arsitektur Lanskap',	'arsitekturlanskap@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(27,	'15ab3564-a937-4925-87f5-62dc1490f52b',	'Teknik Perkeretaapian',	'teknikperkeretaapian@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(28,	'59bb7c66-031a-41f3-8fae-8975d410cb0a',	'Rekayasa Tata Kelola Air Terpardu',	'RekayasaTataKelolaAirTerpardu@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:08:22',	'2023-07-11 10:59:26',	0),
(29,	'21d0b18e-55c5-44d1-87ac-c4dc5bf6754d',	'Teknik Elektro',	'TeknikElektro@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(30,	'8fb861c7-b1b4-4890-a5ac-22bff0328049',	'Teknik Geofisika',	'TeknikGeofisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(31,	'a9de61fb-29d0-4360-ac48-a3c1e0798e0a',	'Teknik Informatika',	'TeknikInformatika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(32,	'cd5c4250-53d8-4318-ac03-6bef1882ab4f',	'Teknik Geologi',	'TeknikGeologi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(33,	'b5854f07-0a4a-428c-b0c9-60239bcd9a43',	'Teknik Mesin',	'TeknikMesin@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(34,	'fbc1131d-7ea7-4f30-8710-042228ce9e2f',	'Teknik Industri',	'TeknikIndustri@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(35,	'444cae00-bc46-473b-916e-933f36cc6ee2',	'Teknik Kimia',	'TeknikKimia@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(36,	'3e096f40-2e7c-45dd-8e12-38a6abe3eb23',	'Teknik Fisika',	'TeknikFisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(37,	'7172fb6f-944d-4652-928c-179d38806491',	'Teknik Biosistem',	'TeknikBiosistem@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(38,	'36f6449b-9edf-4d24-8652-6664deacc79a',	'Teknologi Industri Pertanian',	'TeknologiIndustriPertanian@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(39,	'2b90395a-3026-4ee4-bc68-472ec60521a9',	'Teknologi Pangan',	'TeknologiPangan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(40,	'0678f2ab-5528-471b-9ef8-293ea8a3507a',	'Teknik Sistem Energi',	'TeknikSistemEnergi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(41,	'ee854beb-e044-42c4-9438-caaf4a5f950a',	'Teknik Pertambangan',	'TeknikPertambangan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(42,	'076bd53f-553e-4cfb-82ef-f2a027290802',	'Teknik Material',	'TeknikMaterial@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(43,	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'TeknikTelekomunikasi@itera.ac.id',	CONV('1', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(44,	'b77b8c85-e40a-4ae9-b065-5ae4d0b9f69b',	'Rekayasa Kehutanan',	'RekayasaKehutanan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(45,	'3d0f2c67-b234-4ba4-a4fe-c73db194207f',	'Teknik Biomedik',	'TeknikBiomedik@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(46,	'7f09cc08-e5b6-403d-8818-48e9cfe6c6e4',	'Rekayasa Minyak dan Gas',	'RekayasaMinyakdanGas@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(47,	'11f8a359-2341-4d51-a9b3-b8953bef6346',	'Rekayasa Instrumentasi dan Automasi',	'RekayasaInstrumentasidanAutomasi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0),
(48,	'29c07c04-6cdd-41d4-9755-24ef9713dbca',	'Rekayasa Kosmetik',	'RekayasaKosmetik@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-05-31 21:20:06',	'2023-07-11 10:59:26',	0);

DROP TABLE IF EXISTS `transkrip`;
CREATE TABLE `transkrip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transkrip_id` text NOT NULL,
  `transkrip_student_id` text NOT NULL,
  `transkrip_mata_kuliah_id` text NOT NULL,
  `transkrip_study_program_id` text NOT NULL,
  `transkrip_department_id` text NOT NULL,
  `transkrip_mata_kuliah_grade` text DEFAULT NULL,
  `transkrip_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `transkrip` (`id`, `transkrip_id`, `transkrip_student_id`, `transkrip_mata_kuliah_id`, `transkrip_study_program_id`, `transkrip_department_id`, `transkrip_mata_kuliah_grade`, `transkrip_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(13,	'891cc3ef-0d54-4ad2-b00a-a0dba01962b8',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'4e1fd765-9442-4e20-a69c-b819da599046',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	NULL,	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(16,	'ad1f3c2e-b3e1-4c8f-9da9-7c417addd200',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'B',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(17,	'367088bc-8769-4c64-884e-f45127905ec8',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'A',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(18,	'3052937c-9b4f-4f50-aa12-61110e649a8e',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'A',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(19,	'9de1118f-340e-4925-a179-e5d626987ff2',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'4e1fd765-9442-4e20-a69c-b819da599046',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'B',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(20,	'49e136ca-6008-4033-b377-65a8e44bb512',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'4e1fd765-9442-4e20-a69c-b819da599046',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'B',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(21,	'28041121-bcd0-4155-852d-26def7bd40f7',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'4e1fd765-9442-4e20-a69c-b819da599046',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'C',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(22,	'599b1da4-6c5b-44d2-b04e-340cbd692ae9',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'B',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(23,	'a075f5a4-ffbb-42fc-8aa0-70bfcf39f00d',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'A',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(24,	'1e145165-9df5-4409-a671-3d9f001ea7ef',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a95dda59-0349-4fda-9766-5b907f4fd874',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'BC',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	1),
(25,	'6ed9f479-9262-4cf0-aa7a-f6886101d137',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'f6d5eb45-bbf6-4f55-a47f-ebbb65c73316',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'B',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(26,	'3b46a678-a8ee-4523-a51c-67c08bdeed46',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'aac1dd51-b7d7-47b8-b1f0-cf7eb1f6c6f3',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'AB',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(27,	'165fa34e-082f-448f-a404-bd39a362ece4',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'eaff5a93-f0da-4ba6-9bad-a23983f133d9',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'A',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:57:46',	'2023-07-11 17:57:46',	0),
(28,	'544087c5-0483-4404-800a-4b7085744ecc',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'1bb9bd1f-a6d2-4e40-8626-8a877ffb4266',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'AB',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-11 10:45:41',	'2023-07-11 17:45:41',	0),
(29,	'777c0483-aa82-451c-bfd6-97de0e8a73d3',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'1bb9bd1f-a6d2-4e40-8626-8a877ffb4266',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'AB',	'a7b24cf5-25e1-43d0-9381-f39f5140a91b',	'2023-07-19 10:05:33',	NULL,	0);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` text NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` text NOT NULL,
  `user_role` enum('student','studyProgram','department','lp3m','academic') NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `user` (`id`, `user_id`, `user_name`, `user_email`, `user_role`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'budi.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	'2023-05-28 07:57:08',	0),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'eka.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	'2023-05-28 14:05:15',	0),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'Yono.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	NULL,	0),
(4,	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Prodi T.Telekomunikasi',	'TT.prodi@mail.com',	'studyProgram',	'2023-05-27 13:57:37',	'2023-06-30 22:55:42',	0),
(5,	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Prodi Matematika',	'Matematika.prodi@mail.com',	'studyProgram',	'2023-05-27 13:57:37',	'2023-06-30 22:55:49',	0),
(6,	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Prodi Teknik Geomatika',	'T.Geomatika.prodi@mail.com',	'studyProgram',	'2023-05-27 13:57:37',	'2023-06-30 22:55:54',	0),
(7,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'sains@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-06-01 08:39:07',	0),
(8,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'jtik@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-05-31 22:06:09',	0),
(9,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'jtpi@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-05-31 22:06:13',	0),
(10,	'e44f033b-856b-40e0-946c-166dba272644',	'LP3M',	'lp3m@itera.ac.id',	'lp3m',	'2023-05-27 13:57:37',	'2023-05-31 21:59:49',	0),
(11,	'93df0b9a-8497-41d5-9f8c-370806253b09',	'Akademik',	'academic@itera.ac.id',	'academic',	'2023-05-27 13:57:37',	'2023-05-31 22:00:23',	0),
(12,	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'Zaki T.Telekomunikasi',	'Zaki.mahasiswa@mail.com',	'student',	'2023-05-30 09:39:44',	'2023-05-30 02:54:27',	0);

-- 2023-08-08 06:08:51
