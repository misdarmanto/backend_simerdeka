-- Adminer 4.8.1 MySQL 5.5.5-10.6.11-MariaDB-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `log_book` (`id`, `log_book_id`, `log_book_report_week`, `log_book_report_file`, `log_book_student_id`, `log_book_student_name`, `log_book_student_nim`, `log_book_study_program_id`, `log_book_study_program_name`, `log_book_department_id`, `log_book_department_name`, `created_on`, `modified_on`, `deleted`) VALUES
(11,	'6daf72bd-eaec-4c5d-adcd-50d38e9477de',	3,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9390502e-c254-4363-afc2-84a672e3a347',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'2023-06-03 06:45:51',	'2023-06-03 06:45:51',	1),
(12,	'95825c7d-0a85-43ee-82cc-898b4d08d72a',	2,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0f130ba0-956e-456f-8d14-91f64cf9eb40',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'2023-06-03 10:18:57',	'2023-06-03 10:18:57',	1),
(13,	'9e5b973e-5881-4219-95ff-4b64e4ebb6c7',	1,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=038702fc-fb3f-4a10-b333-64e6c810fed3',	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'1323232223',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-06-03 13:41:55',	NULL,	0),
(14,	'9b42e7fe-057e-4ab4-b274-7be70b37c19a',	5,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1feb4964-4eab-4fa8-b2aa-6c6dcb1e93a2',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'2023-06-03 17:07:43',	NULL,	0);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mata_kuliah` (`id`, `mata_kuliah_id`, `mata_kuliah_name`, `mata_kuliah_study_program_id`, `mata_kuliah_study_program_name`, `mata_kuliah_department_id`, `mata_kuliah_department_name`, `mata_kuliah_sks_total`, `created_on`, `modified_on`, `deleted`) VALUES
(11,	'6daf72bd-eaec-4c5d-adcd-50d38e9477de',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9390502e-c254-4363-afc2-84a672e3a347',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'2023-06-03 06:45:51',	'2023-06-03 06:45:51',	1),
(12,	'95825c7d-0a85-43ee-82cc-898b4d08d72a',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0f130ba0-956e-456f-8d14-91f64cf9eb40',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'2023-06-03 10:18:57',	'2023-06-03 10:18:57',	1),
(13,	'9e5b973e-5881-4219-95ff-4b64e4ebb6c7',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=038702fc-fb3f-4a10-b333-64e6c810fed3',	'8cd17bb9-d727-4578-99c5ssadsa',	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	0,	'2023-06-03 13:41:55',	NULL,	0),
(14,	'9b42e7fe-057e-4ab4-b274-7be70b37c19a',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1feb4964-4eab-4fa8-b2aa-6c6dcb1e93a2',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	0,	'2023-06-03 17:07:43',	NULL,	0),
(15,	'4e1fd765-9442-4e20-a69c-b819da599046',	'test',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'2023-06-04 14:31:33',	NULL,	0),
(16,	'a95dda59-0349-4fda-9766-5b907f4fd874',	'qwer',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	4,	'2023-06-04 14:31:33',	NULL,	0),
(17,	'eaef1343-47df-445b-99f6-a1646e6998f5',	'kalkulus',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	6,	'2023-06-04 14:31:33',	NULL,	0);

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program` (`id`, `mbkm_program_id`, `mbkm_program_name`, `mbkm_program_created_by`, `mbkm_program_category`, `mbkm_program_syllabus`, `mbkm_program_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(7,	'042d600e-b713-4327-a6bd-edf6bc9d67b1',	'test',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c1a6a6f4-36a7-4e6b-b6c6-b8c6b43ab333',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-06-03 09:32:36',	'2023-06-03 09:32:36',	1),
(8,	'0bacf063-08be-4256-9047-efc188bee9bf',	'bangkit',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c8d5af17-4f87-4b12-9c38-75bfe840c94d',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-06-03 09:33:33',	'2023-06-03 09:33:33',	1),
(9,	'0802050a-5ae1-4371-8001-2f88d008df42',	'UI/UX Dicoding Academy',	'lp3m',	'Studi Independen',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=65e458ef-624d-4a03-8ed0-ddebe3e1e843',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-05-28 20:09:55',	NULL,	0),
(10,	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=694b2117-295b-475a-938b-b7b0a81fc72f',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-05-28 20:52:16',	NULL,	0),
(11,	'8f208a7a-eb76-4f98-b159-819239873a70',	'Magang Toko Pedia',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b908a769-6972-4e2d-91f8-bbbd8a5cf33f',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-03 09:33:41',	'2023-06-03 09:33:41',	1),
(12,	'2cfca652-1f68-4ef7-bf5a-518a837fae51',	'test',	'lp3m',	'Indonesian International Student Mobility Awards (IISMA)',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=d09f0f4a-35af-424a-8c4a-5c88df369e88',	'b199251e-ff06-4e56-9266-a24d0d71c5e2',	'2023-06-03 09:32:32',	'2023-06-03 09:32:32',	1);

DROP TABLE IF EXISTS `mbkm_program_prodi`;
CREATE TABLE `mbkm_program_prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mbkm_program_prodi_id` text NOT NULL,
  `mbkm_program_prodi_program_id` text NOT NULL,
  `mbkm_program_prodi_program_name` text NOT NULL,
  `mbkm_program_prodi_study_program_id` text NOT NULL,
  `mbkm_program_prodi_study_program_name` text NOT NULL,
  `mbkm_program_prodi_department_id` text NOT NULL,
  `mbkm_program_prodi_department_name` text NOT NULL,
  `mbkm_program_prodi_semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program_prodi` (`id`, `mbkm_program_prodi_id`, `mbkm_program_prodi_program_id`, `mbkm_program_prodi_program_name`, `mbkm_program_prodi_study_program_id`, `mbkm_program_prodi_study_program_name`, `mbkm_program_prodi_department_id`, `mbkm_program_prodi_department_name`, `mbkm_program_prodi_semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(13,	'552fe837-1591-4f89-beeb-b6dfc9028856',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-04 02:08:54',	'2023-06-04 02:08:54',	1),
(14,	'7fb84d4d-f11f-46dd-ab0c-bc39cca26458',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-04 02:09:17',	'2023-06-04 02:09:17',	1),
(15,	'914c4e90-7fa4-4e5e-9ebe-21af97f09bdb',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-04 08:05:29',	'2023-06-04 08:05:29',	1),
(16,	'26cf8f17-bc5e-4c16-a6c1-673a16e3cc53',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'2023-06-04 14:31:33',	'0000-00-00 00:00:00',	0);

DROP TABLE IF EXISTS `mbkm_program_student`;
CREATE TABLE `mbkm_program_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mbkm_program_student_id` text NOT NULL,
  `mbkm_program_student_sks` int(11) NOT NULL,
  `mbkm_program_id` text NOT NULL,
  `student_id` text NOT NULL,
  `major_id` text NOT NULL,
  `study_program_id` text NOT NULL,
  `semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program_student` (`id`, `mbkm_program_student_id`, `mbkm_program_student_sks`, `mbkm_program_id`, `student_id`, `major_id`, `study_program_id`, `semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'ab3bba71-4bac-46ff-81c7-8517df0bd7c7',	20,	'042d600e-b713-4327-a6bd-edf6bc9d67b1',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'2023-05-28 16:25:41',	'0000-00-00 00:00:00',	0);

DROP TABLE IF EXISTS `recomendation_letter`;
CREATE TABLE `recomendation_letter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recomendation_letter_id` text NOT NULL,
  `recomendation_letter_student_id` text NOT NULL,
  `recomendation_letter_study_program_id` text NOT NULL,
  `recomendation_letter_department_id` text NOT NULL,
  `recomendation_letter_student_transkrip` text NOT NULL,
  `recomendation_letter_dosen_wali` varchar(250) NOT NULL,
  `recomendation_letter_approval_letter` text NOT NULL,
  `recomendation_letter_from_study_program` text DEFAULT NULL,
  `recomendation_letter_from_department` text DEFAULT NULL,
  `recomendation_letter_from_lp3m` text DEFAULT NULL,
  `recomendation_letter_from_academic` text DEFAULT NULL,
  `recomendation_letter_program_name` text NOT NULL,
  `recomendation_letter_program_correlation` text NOT NULL,
  `recomendation_letter_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `recomendation_letter_status_message` text DEFAULT NULL,
  `recomendation_letter_assign_to_student` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_study_program` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_department` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_lp3m` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_academic` bit(1) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `recomendation_letter` (`id`, `recomendation_letter_id`, `recomendation_letter_student_id`, `recomendation_letter_study_program_id`, `recomendation_letter_department_id`, `recomendation_letter_student_transkrip`, `recomendation_letter_dosen_wali`, `recomendation_letter_approval_letter`, `recomendation_letter_from_study_program`, `recomendation_letter_from_department`, `recomendation_letter_from_lp3m`, `recomendation_letter_from_academic`, `recomendation_letter_program_name`, `recomendation_letter_program_correlation`, `recomendation_letter_status`, `recomendation_letter_status_message`, `recomendation_letter_assign_to_student`, `recomendation_letter_assign_to_study_program`, `recomendation_letter_assign_to_department`, `recomendation_letter_assign_to_lp3m`, `recomendation_letter_assign_to_academic`, `created_on`, `modified_on`, `deleted`) VALUES
(39,	'97ca4b67-f89a-4129-be2a-aa59843efbb3',	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=fb43633b-08a7-469d-90b8-2f0295853b88',	'dosen 5',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1aa63f42-1967-461f-82fe-3ea5febdd774',	NULL,	NULL,	NULL,	NULL,	'dsds',	'sdsd',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0,	'2023-06-01 09:01:10',	NULL,	0),
(40,	'5ec5baf5-b943-4386-bbf6-9fc49bbdcf23',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b8e6e894-492b-4ace-9ab3-3bd7fb46e7c4',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=ad4a2029-c023-4771-8445-7b87af69f415',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=25b351f4-cf21-4ec0-b2a1-6f3fc4741dab',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=f4d8b113-1da6-4fb7-b053-eea4241eb2c2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=6d34d009-715d-4546-888c-2aeda606b540',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0953c0df-ae43-4465-9fd3-7533a2486981',	'sdsd',	'sds',	'accepted',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'2023-06-01 09:01:10',	'2023-06-01 04:09:34',	0);

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
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `report_participation` (`id`, `report_participation_id`, `report_participation_letter`, `report_participation_status_message`, `report_participation_status`, `report_participation_study_program_id`, `report_participation_department_id`, `report_participation_student_id`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'89685f28-1733-4b14-87e6-fa4b1bc0cc32',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9936f98d-8a98-41b1-aff3-b17e9067f462',	NULL,	'accepted',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'2023-06-01 09:55:57',	'2023-06-01 09:55:57',	0);

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `semester` (`id`, `semester_id`, `semester_created_by`, `semester_name`, `semester_status`, `created_on`, `modified_on`, `deleted`) VALUES
(6,	'5f25be68-aa52-4f2a-9170-b519ec3ce3a4',	'lp3m',	'2022/2023 genap',	'non-active',	'2023-06-01 08:13:51',	'2023-06-01 08:13:51',	1),
(7,	'b7d9c8f4-f573-4267-a392-e704feeff12e',	'lp3m',	'2022/2023 ganjil',	'non-active',	'2023-06-01 08:12:38',	'2023-06-01 08:12:38',	1),
(8,	'19b0ba45-8ff3-486d-86ba-d9fcbc60128b',	'lp3m',	'2023/2024 genap',	'non-active',	'2023-06-01 08:16:37',	'2023-06-01 08:16:37',	1),
(9,	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'lp3m',	'2023/2024 ganjil',	'non-active',	'2023-06-01 08:14:08',	'2023-06-01 08:14:08',	1),
(10,	'247777fd-3a69-4e1f-b429-f469513d50f2',	'lp3m',	'baru sss',	'non-active',	'2023-06-01 08:20:47',	'2023-06-01 08:20:47',	1),
(11,	'52cbddaf-6c53-4434-9f0f-5b278e63aec9',	'lp3m',	'ddddd',	'non-active',	'2023-06-03 09:13:53',	'2023-06-03 09:13:53',	0),
(12,	'e7401adb-86db-4747-8eea-ed3cb3dfd1f2',	'lp3m',	'2023',	'non-active',	'2023-06-01 08:20:24',	'2023-06-01 08:20:24',	1),
(13,	'b199251e-ff06-4e56-9266-a24d0d71c5e2',	'lp3m',	'dsdsd',	'active',	'2023-06-03 09:13:53',	'2023-06-03 09:13:53',	0),
(14,	'29ff02f6-b5e0-451c-97ca-8846b1ab9dc1',	'lp3m',	'ssssssssssssssssssssssssssssssss',	'non-active',	'2023-06-01 08:20:47',	'2023-06-01 08:20:47',	1),
(15,	'121d1fc7-6ad8-4521-a8cf-1b22ac1d5a12',	'lp3m',	'test',	'non-active',	'2023-06-01 08:25:35',	'2023-06-01 08:25:35',	1),
(16,	'466d8343-b565-4bc3-acf8-77482dcacd19',	'lp3m',	'rrrrr',	'non-active',	'2023-06-01 08:25:45',	'2023-06-01 08:25:45',	1),
(17,	'cf06389a-778a-4b56-95e8-98eb802fadd1',	'lp3m',	'rrrrrr',	'non-active',	'2023-06-01 08:29:57',	'2023-06-01 08:29:57',	1);

DROP TABLE IF EXISTS `sks_convertion`;
CREATE TABLE `sks_convertion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sks_convertion_id` text NOT NULL,
  `sks_convertion_total` text NOT NULL,
  `sks_convertion_mbkm_program_id` text NOT NULL,
  `sks_convertion_student_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sks_convertion` (`id`, `sks_convertion_id`, `sks_convertion_total`, `sks_convertion_mbkm_program_id`, `sks_convertion_student_id`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'abea2fc4-62e6-48a3-83a5-872550ca833a',	'20',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'2023-05-30 13:22:36',	NULL,	0),
(2,	'8b0e4912-fe99-44ea-b88b-910d7701378a',	'20',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'2023-05-30 13:22:36',	NULL,	0),
(6,	'aa206eaa-75c7-47a3-bf0e-98fd2457bec0',	'29',	'0bacf063-08be-4256-9047-efc188bee9bf',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'2023-05-30 16:03:30',	NULL,	0),
(7,	'f41ae402-4a09-4a4d-b5fc-5c4c17fddc16',	'20',	'8f208a7a-eb76-4f98-b159-819239873a70',	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'2023-05-30 20:03:22',	NULL,	0),
(8,	'5f13edce-5c57-4d36-ab5e-2a323e567e50',	'20',	'8f208a7a-eb76-4f98-b159-819239873a70',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'2023-05-30 20:03:22',	NULL,	0);

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
  `student_sks_total` int(11) DEFAULT 0,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `student` (`id`, `student_id`, `student_name`, `student_nim`, `student_email`, `student_is_registered`, `student_department_id`, `student_department_name`, `student_study_program_id`, `student_study_program_name`, `student_mbkm_program_id`, `student_transkrip_id`, `student_sks_total`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'budi.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTIP',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'973d80a8-c4b9-4d73-9719-18e7e088995c',	NULL,	0,	'2023-06-05 03:44:27',	'2023-06-05 03:44:27',	0),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'124545444',	'eka.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	NULL,	NULL,	0,	'2023-05-31 14:56:33',	'2023-05-31 21:56:33',	0),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'1323232223',	'Yono.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	NULL,	NULL,	0,	'2023-06-01 01:34:18',	'2023-06-01 08:34:18',	0),
(4,	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'Zaki T.Telekomunikasi',	'12040055500',	'Zaki.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	NULL,	NULL,	0,	'2023-06-01 09:07:33',	'2023-06-01 16:07:33',	0);

DROP TABLE IF EXISTS `study_program`;
CREATE TABLE `study_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `study_program_id` text NOT NULL,
  `study_program_name` varchar(200) NOT NULL,
  `study_program_email` varchar(200) NOT NULL,
  `study_program_is_registered` bit(1) DEFAULT b'0',
  `study_program_department_id` text DEFAULT NULL,
  `study_program_department_name` varchar(200) DEFAULT NULL,
  `created_on` datetime NOT NULL,
  `modified_on` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `study_program` (`id`, `study_program_id`, `study_program_name`, `study_program_email`, `study_program_is_registered`, `study_program_department_id`, `study_program_department_name`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'd6a6c91e-f00c-4707-9b94-c7e7f9c0c658',	'Fisika',	'fisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(11,	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Matematika',	'matematika@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(12,	'ae3bd350-8af8-4423-a5a6-3dc7991cba28',	'Biologi',	'biologi@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(13,	'ee0dc002-f505-4dc4-b992-10cde709da66',	'Kimia',	'kimia@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(14,	'42ccfb65-a027-4de9-95c4-e153832e60fe',	'Farmasi',	'farmasi@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(15,	'70ddb3ba-c592-4625-bd97-134771d0a80a',	'Atmosfer dan Keplanetan',	'atmosferdankeplanetan@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(16,	'f0b53d07-5559-4806-994a-0477d5c52d85',	'Sains Aktuaria',	'sainsaktuaria@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(17,	'886a85f1-f46a-490c-b036-c5b33dcb9974',	'Sains Lingkungan Kelautan',	'sainslingkungankelautan@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(18,	'80bc9c64-2f1c-45b0-bf6d-faf3d813b26b',	'Sains Data',	'sainsdata@itera.ac.id',	CONV('0', 2, 10) + 0,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'2023-05-31 21:00:33',	NULL,	0),
(19,	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Teknik Geomatika',	'teknikgeomatika@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(20,	'db019be0-fd35-4a62-bc21-c24ba429a737',	'Perencanaan Wilayah dan Kota',	'perencanaanwilayahdankota@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(21,	'c5a99011-5297-4af2-906e-e1d2d1c3c6ae',	'Teknik Sipil',	'tekniksipil@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(22,	'7393626a-c66f-465b-b912-2a1a57613bbf',	'Arsitektur',	'arsitektur@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(23,	'c095307d-b3cc-43d4-a312-1daca397fbc9',	'ArsitekturTeknik Lingkungan',	'tekniklingkungan@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(24,	'afcbb4c0-908f-4eee-b1a1-6dbe88ee4f79',	'Teknik Kelautan',	'teknikkelautan@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(25,	'e1bfa7f2-7bac-4dec-a636-94b3a996603a',	'Desain Komunikasi Visual',	'desainkomunikasivisual@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(26,	'93d597ad-2192-47a8-89f6-203d1ccb99d8',	'Arsitektur Lanskap',	'arsitekturlanskap@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(27,	'15ab3564-a937-4925-87f5-62dc1490f52b',	'Teknik Perkeretaapian',	'teknikperkeretaapian@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(28,	'59bb7c66-031a-41f3-8fae-8975d410cb0a',	'Rekayasa Tata Kelola Air Terpardu',	'RekayasaTataKelolaAirTerpardu@itera.ac.id',	CONV('0', 2, 10) + 0,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'2023-05-31 21:08:22',	NULL,	0),
(29,	'21d0b18e-55c5-44d1-87ac-c4dc5bf6754d',	'Teknik Elektro',	'TeknikElektro@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(30,	'8fb861c7-b1b4-4890-a5ac-22bff0328049',	'Teknik Geofisika',	'TeknikGeofisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(31,	'a9de61fb-29d0-4360-ac48-a3c1e0798e0a',	'Teknik Informatika',	'TeknikInformatika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(32,	'cd5c4250-53d8-4318-ac03-6bef1882ab4f',	'Teknik Geologi',	'TeknikGeologi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(33,	'b5854f07-0a4a-428c-b0c9-60239bcd9a43',	'Teknik Mesin',	'TeknikMesin@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(34,	'fbc1131d-7ea7-4f30-8710-042228ce9e2f',	'Teknik Industri',	'TeknikIndustri@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(35,	'444cae00-bc46-473b-916e-933f36cc6ee2',	'Teknik Kimia',	'TeknikKimia@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(36,	'3e096f40-2e7c-45dd-8e12-38a6abe3eb23',	'Teknik Fisika',	'TeknikFisika@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(37,	'7172fb6f-944d-4652-928c-179d38806491',	'Teknik Biosistem',	'TeknikBiosistem@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(38,	'36f6449b-9edf-4d24-8652-6664deacc79a',	'Teknologi Industri Pertanian',	'TeknologiIndustriPertanian@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(39,	'2b90395a-3026-4ee4-bc68-472ec60521a9',	'Teknologi Pangan',	'TeknologiPangan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(40,	'0678f2ab-5528-471b-9ef8-293ea8a3507a',	'Teknik Sistem Energi',	'TeknikSistemEnergi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(41,	'ee854beb-e044-42c4-9438-caaf4a5f950a',	'Teknik Pertambangan',	'TeknikPertambangan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(42,	'076bd53f-553e-4cfb-82ef-f2a027290802',	'Teknik Material',	'TeknikMaterial@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(43,	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Teknik Telekomunikasi',	'TeknikTelekomunikasi@itera.ac.id',	CONV('1', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	'2023-06-01 09:56:27',	0),
(44,	'b77b8c85-e40a-4ae9-b065-5ae4d0b9f69b',	'Rekayasa Kehutanan',	'RekayasaKehutanan@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(45,	'3d0f2c67-b234-4ba4-a4fe-c73db194207f',	'Teknik Biomedik',	'TeknikBiomedik@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(46,	'7f09cc08-e5b6-403d-8818-48e9cfe6c6e4',	'Rekayasa Minyak dan Gas',	'RekayasaMinyakdanGas@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(47,	'11f8a359-2341-4d51-a9b3-b8953bef6346',	'Rekayasa Instrumentasi dan Automasi',	'RekayasaInstrumentasidanAutomasi@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0),
(48,	'29c07c04-6cdd-41d4-9755-24ef9713dbca',	'Rekayasa Kosmetik',	'RekayasaKosmetik@itera.ac.id',	CONV('0', 2, 10) + 0,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'2023-05-31 21:20:06',	NULL,	0);

DROP TABLE IF EXISTS `transkrip`;
CREATE TABLE `transkrip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transkrip_id` text NOT NULL,
  `transkrip_student_id` text NOT NULL,
  `transkrip_mata_kuliah_id` text NOT NULL,
  `transkrip_study_program_id` text NOT NULL,
  `transkrip_department_id` text NOT NULL,
  `transkrip_mata_kuliah_grade` text DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `transkrip` (`id`, `transkrip_id`, `transkrip_student_id`, `transkrip_mata_kuliah_id`, `transkrip_study_program_id`, `transkrip_department_id`, `transkrip_mata_kuliah_grade`, `created_on`, `modified_on`, `deleted`) VALUES
(13,	'891cc3ef-0d54-4ad2-b00a-a0dba01962b8',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'4e1fd765-9442-4e20-a69c-b819da599046',	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'9e9a3381-7459-476b-a72e-8ab053da9e99',	NULL,	'2023-06-05 09:40:11',	NULL,	0);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` text NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` text NOT NULL,
  `user_role` enum('student','study_program','department','lp3m','academic') NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `user` (`id`, `user_id`, `user_name`, `user_email`, `user_role`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'budi.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	'2023-05-28 07:57:08',	0),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'eka.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	'2023-05-28 14:05:15',	0),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'Yono.mahasiswa@mail.com',	'student',	'2023-05-27 13:57:37',	NULL,	0),
(4,	'8db52aa9-b4f4-4909-97d3-43638d48ce2a',	'Prodi T.Telekomunikasi',	'TT.prodi@mail.com',	'study_program',	'2023-05-27 13:57:37',	'2023-06-01 08:38:48',	0),
(5,	'30b3c037-7d11-4a60-a039-ab09b007fd94',	'Prodi Matematika',	'Matematika.prodi@mail.com',	'study_program',	'2023-05-27 13:57:37',	'2023-06-01 08:38:19',	0),
(6,	'b1491aae-9753-4bde-9934-2c8fb987d8c8',	'Prodi Teknik Geomatika',	'T.Geomatika.prodi@mail.com',	'study_program',	'2023-05-27 13:57:37',	'2023-06-01 08:37:49',	0),
(7,	'ed697f88-a372-442d-bc39-3772f544bdb5',	'SAINS',	'sains@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-06-01 08:39:07',	0),
(8,	'4181f385-6386-4f48-9a07-bf039af11175',	'JTIK',	'jtik@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-05-31 22:06:09',	0),
(9,	'9e9a3381-7459-476b-a72e-8ab053da9e99',	'JTPI',	'jtpi@itera.ac.id',	'department',	'2023-05-27 13:57:37',	'2023-05-31 22:06:13',	0),
(10,	'e44f033b-856b-40e0-946c-166dba272644',	'LP3M',	'lp3m@itera.ac.id',	'lp3m',	'2023-05-27 13:57:37',	'2023-05-31 21:59:49',	0),
(11,	'93df0b9a-8497-41d5-9f8c-370806253b09',	'Akademik',	'academic@itera.ac.id',	'academic',	'2023-05-27 13:57:37',	'2023-05-31 22:00:23',	0),
(12,	'8b5e175f-5370-4419-8974-b8b0dce5b5ec',	'Zaki T.Telekomunikasi',	'Zaki.mahasiswa@mail.com',	'student',	'2023-05-30 09:39:44',	'2023-05-30 02:54:27',	0);

-- 2023-06-05 04:08:22
