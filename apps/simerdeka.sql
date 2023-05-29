-- Adminer 4.8.1 MySQL 5.5.5-10.6.11-MariaDB-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `list_of_major`;
CREATE TABLE `list_of_major` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `major_id` text NOT NULL,
  `major_name` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `list_of_major` (`id`, `major_id`, `major_name`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'JTPI',	'2023-05-22 22:28:15',	NULL,	0),
(2,	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'JTIK',	'2023-05-22 22:32:48',	NULL,	0),
(3,	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'SAINS',	'2023-05-22 22:32:48',	NULL,	0);

DROP TABLE IF EXISTS `list_of_study_program`;
CREATE TABLE `list_of_study_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `study_program_id` text NOT NULL,
  `study_program_name` text NOT NULL,
  `major_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `list_of_study_program` (`id`, `study_program_id`, `study_program_name`, `major_id`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'ec982b65-df1e-4249-9e24-5c1dce7ebc8e',	'Fisika',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:25:22',	'2023-05-26 20:25:22',	0),
(2,	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'Matematika',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:25:29',	'2023-05-26 20:25:29',	0),
(3,	'84cc81c9-5379-46c1-b814-941aee6bd6b9',	'Biologi',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:25:38',	'2023-05-26 20:25:38',	0),
(4,	'7964bbef-1d41-4c44-b6b7-dbea68c6fa22',	'Kimia',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:25:47',	'2023-05-26 20:25:47',	0),
(5,	'3f9203b4-341e-490b-9050-d1f11a857625',	'Farmasi',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:25:53',	'2023-05-26 20:25:53',	0),
(6,	'2602bf75-9455-473e-bf6f-b0da4d295386',	'Sains Lingkungan Kelautan',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:26:04',	'2023-05-26 20:26:04',	0),
(7,	'd2ee6345-d411-4d86-b637-7e9c40f0c595',	'Sains Atmosfir dan Keplanetan',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:26:14',	'2023-05-26 20:26:14',	0),
(8,	'87524a5a-5222-4de9-a89b-dc1649658284',	'Sains Aktuaria',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:26:23',	'2023-05-26 20:26:23',	0),
(9,	'10cbf60b-9a13-4ad3-b137-a02b9b5fff93',	'Sains Data',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-26 13:26:31',	'2023-05-26 20:26:31',	0),
(10,	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'Teknik Geomatika',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:26:37',	'2023-05-26 20:26:37',	0),
(11,	'9f2f615a-0e06-403d-947a-65122faa6ae7',	'Perencanaan Wilayah dan Kota',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:26:50',	'2023-05-26 20:26:50',	0),
(12,	'd2c76dc8-08c6-435b-a503-03fa1fe8da9e',	'Teknik Sipil',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:26:58',	'2023-05-26 20:26:58',	0),
(13,	'7e4a22da-635b-447f-857e-781c631c5863',	'Teknik Arsitektur',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:07',	'2023-05-26 20:27:07',	0),
(14,	'a4fa1178-3595-4d25-be95-69171148168c',	'Teknik Lingkungan',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:15',	'2023-05-26 20:27:15',	0),
(15,	'1e899b28-7b69-4fba-ace2-6bd3b0013af0',	'Teknik Kelautan',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:24',	'2023-05-26 20:27:24',	0),
(16,	'3493f7e0-d365-46b3-83bc-062ddae37b94',	'Desain Komunikasi Visual',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:31',	'2023-05-26 20:27:31',	0),
(17,	'b075a46e-fd24-455d-a970-5b10ea0f4261',	'Arsitektur Lanskap',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:39',	'2023-05-26 20:27:39',	0),
(18,	'9c608fda-a9d1-462f-a0c9-2547a803d11f',	'Teknik Perkeretaapian',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:47',	'2023-05-26 20:27:47',	0),
(19,	'347af298-6075-4e1e-9657-48254d8e9c99',	'Rekayasa Tata Kelola Air Terpadu',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:27:57',	'2023-05-26 20:27:57',	0),
(20,	'9f7393d6-f34b-4bab-8c3a-f22eb00bd2a8',	'Pariwisata',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-26 13:28:05',	'2023-05-26 20:28:05',	0),
(21,	'f3185b1a-7ddd-423e-963e-169a871c3984',	'Teknik Elektro',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:28:12',	'2023-05-26 20:28:12',	0),
(22,	'c5211219-4f63-4aa7-a8f7-c724c233c14e',	'Teknik Fisika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:28:19',	'2023-05-26 20:28:19',	0),
(23,	'70e639c6-f649-4edb-be91-ad9d00744fe3',	'Teknik Informatika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:28:26',	'2023-05-26 20:28:26',	0),
(24,	'7229ea8c-1682-4a4d-9b51-bd55d7137d04',	'Teknik Geologi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:28:34',	'2023-05-26 20:28:34',	0),
(25,	'b6f6e861-6b39-4fa6-83fd-0251f7b5d5ab',	'Teknik Geofisika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:28:43',	'2023-05-26 20:28:43',	0),
(26,	'41e2379d-3520-4234-8841-ee6384b58ccc',	'Teknik Mesin',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:29:52',	'2023-05-26 20:29:52',	0),
(27,	'c8ee48cc-77b0-43cd-a3d8-f15413e30fef',	'Teknik Kimia',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:01',	'2023-05-26 20:30:01',	0),
(28,	'd4fb254e-04db-47ba-aa19-a9a66e61830a',	'Teknik Material',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:12',	'2023-05-26 20:30:12',	0),
(29,	'e4cab0a7-62b6-4711-857c-c561088f4974',	'Teknik Sistem Energi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:19',	'2023-05-26 20:30:19',	0),
(30,	'75414c31-76a0-4c71-9700-5525044c9432',	'Teknik Industri',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:32',	'2023-05-26 20:30:32',	0),
(31,	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'Teknik Telekomunikasi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:42',	'2023-05-26 20:30:42',	0),
(32,	'3463edca-34d7-452b-8c0e-05a5d8d3bcdd',	'Teknik Pertambangan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:30:51',	'2023-05-26 20:30:51',	0),
(33,	'3f742886-9562-4e87-888f-6fffa75c3019',	'Teknik Biosistem',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:06',	'2023-05-26 20:31:06',	0),
(34,	'5556ab49-c367-4077-be68-84bd1bf13bd1',	'Teknik Biomedik',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:15',	'2023-05-26 20:31:15',	0),
(35,	'0f01400b-244e-422d-a99a-ab9bdf336d70',	'Teknologi Pangan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:21',	'2023-05-26 20:31:21',	0),
(36,	'75ba8c14-fd13-4416-abf2-9dd721e88eae',	'Teknologi Industri Pertanian',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:31',	'2023-05-26 20:31:31',	0),
(37,	'a675676b-789c-4bf8-b57a-883614be5568',	'Rekayasa Kehutanan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:39',	'2023-05-26 20:31:39',	0),
(38,	'b0ad379e-0689-4572-bc2a-5a8fc54f0152',	'Rekayasa Kosmetik',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:49',	'2023-05-26 20:31:49',	0),
(39,	'8babdaa0-c3c4-476f-83a2-8b65d227fb0b',	'Rekayasa Minyak dan Gas',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:31:59',	'2023-05-26 20:31:59',	0),
(40,	'7d886ca9-6baa-421c-8b5d-0086509f31ee',	'Instrumentasi dan Automasi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-26 13:32:18',	'2023-05-26 20:32:18',	0);

DROP TABLE IF EXISTS `mbkm_program`;
CREATE TABLE `mbkm_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mbkm_program_id` text NOT NULL,
  `mbkm_program_name` varchar(250) NOT NULL,
  `mbkm_program_created_by` varchar(100) NOT NULL,
  `mbkm_program_category` varchar(250) NOT NULL,
  `mbkm_program_syllabus` text NOT NULL,
  `semester_id` text NOT NULL,
  `study_program_id` text NOT NULL,
  `major_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mbkm_program` (`id`, `mbkm_program_id`, `mbkm_program_name`, `mbkm_program_created_by`, `mbkm_program_category`, `mbkm_program_syllabus`, `semester_id`, `study_program_id`, `major_id`, `created_on`, `modified_on`, `deleted`) VALUES
(7,	'042d600e-b713-4327-a6bd-edf6bc9d67b1',	'test',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c1a6a6f4-36a7-4e6b-b6c6-b8c6b43ab333',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-28 14:32:05',	NULL,	0),
(8,	'0bacf063-08be-4256-9047-efc188bee9bf',	'bangkit',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c8d5af17-4f87-4b12-9c38-75bfe840c94d',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-28 20:09:55',	NULL,	0),
(9,	'0802050a-5ae1-4371-8001-2f88d008df42',	'UI/UX Dicoding Academy',	'lp3m',	'Studi Independen',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=65e458ef-624d-4a03-8ed0-ddebe3e1e843',	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-28 20:09:55',	NULL,	0),
(10,	'973d80a8-c4b9-4d73-9719-18e7e088995c',	'bangkit mobile development',	'lp3m',	'Magang Bersertifikat',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=694b2117-295b-475a-938b-b7b0a81fc72f',	'247777fd-3a69-4e1f-b429-f469513d50f2',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-28 20:52:16',	NULL,	0);

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
  `student_id` text NOT NULL,
  `study_program_id` text NOT NULL,
  `major_id` varchar(250) NOT NULL,
  `recomendation_letter_student_transkrip` text NOT NULL,
  `recomendation_letter_dosen_wali` varchar(250) NOT NULL,
  `recomendation_letter_approval_letter` text NOT NULL,
  `recomendation_letter_from_study_program` text DEFAULT NULL,
  `recomendation_letter_from_major` text DEFAULT NULL,
  `recomendation_letter_from_lp3m` text DEFAULT NULL,
  `recomendation_letter_from_academic` text DEFAULT NULL,
  `recomendation_letter_program_name` text NOT NULL,
  `recomendation_letter_program_correlation` text NOT NULL,
  `recomendation_letter_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `recomendation_letter_status_message` text DEFAULT NULL,
  `recomendation_letter_assign_to_student` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_study_program` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_major` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_lp3m` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_academic` bit(1) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `recomendation_letter` (`id`, `recomendation_letter_id`, `student_id`, `study_program_id`, `major_id`, `recomendation_letter_student_transkrip`, `recomendation_letter_dosen_wali`, `recomendation_letter_approval_letter`, `recomendation_letter_from_study_program`, `recomendation_letter_from_major`, `recomendation_letter_from_lp3m`, `recomendation_letter_from_academic`, `recomendation_letter_program_name`, `recomendation_letter_program_correlation`, `recomendation_letter_status`, `recomendation_letter_status_message`, `recomendation_letter_assign_to_student`, `recomendation_letter_assign_to_study_program`, `recomendation_letter_assign_to_major`, `recomendation_letter_assign_to_lp3m`, `recomendation_letter_assign_to_academic`, `created_on`, `modified_on`, `deleted`) VALUES
(26,	'50d116b0-bbbb-43ad-9376-ad643a1c5218',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=277eae88-ea6c-4e76-8818-66eb236ef9c1',	'dosen 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=f5814af8-1be2-4fce-921b-46b4d3e2913d',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=8af16a99-ea77-48da-996d-f95d88fd3e08',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=cc6acabf-6820-4e37-b682-ea14cfabdcb3',	NULL,	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=0b11fad0-53f6-4234-a0bf-3b5b6fab7b18',	'test',	'sdddddddddddddddddd',	'accepted',	'Selamat, surat rekomendasi mu telah disetujui',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'2023-05-27 14:12:02',	'2023-05-28 14:05:40',	0),
(27,	'254bd0f1-ba39-47c6-8d32-431e5b305118',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=8d965744-4097-4f2a-94c9-904b16285de0',	'dosen 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=239e08e9-cfd8-4e32-af65-038c3ce467be',	'',	'',	NULL,	'',	'wwerrtt',	'fdsf',	'accepted',	'Selamat, surat rekomendasi mu telah disetujui',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'2023-05-28 20:52:16',	'2023-05-28 14:05:15',	0);

DROP TABLE IF EXISTS `report_participation`;
CREATE TABLE `report_participation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_participation_id` text NOT NULL,
  `report_participation_letter` text NOT NULL,
  `report_participation_status_message` text DEFAULT NULL,
  `report_participation_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `study_program_id` text NOT NULL,
  `major_id` text NOT NULL,
  `student_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `report_participation` (`id`, `report_participation_id`, `report_participation_letter`, `report_participation_status_message`, `report_participation_status`, `study_program_id`, `major_id`, `student_id`, `created_on`, `modified_on`, `deleted`) VALUES
(7,	'74c373ff-5fca-4062-a348-186ed332e6c1',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=2c21cd75-db53-496f-885a-2430fdace90c',	'selamat',	'accepted',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'2023-05-27 07:59:15',	'2023-05-27 07:59:15',	0),
(8,	'fe77a615-8a21-4708-a622-c6779e48b7a0',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=4d5d75c2-17b2-4358-a054-d030ba44b27c',	'selemat',	'accepted',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'2023-05-28 14:08:35',	'2023-05-28 14:08:35',	0);

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `semester` (`id`, `semester_id`, `semester_created_by`, `semester_name`, `semester_status`, `created_on`, `modified_on`, `deleted`) VALUES
(6,	'5f25be68-aa52-4f2a-9170-b519ec3ce3a4',	'lp3m',	'2022/2023 genap',	'non-active',	'2023-05-28 00:15:25',	'2023-05-28 00:15:25',	0),
(7,	'b7d9c8f4-f573-4267-a392-e704feeff12e',	'lp3m',	'2022/2023 ganjil',	'non-active',	'2023-05-27 13:13:28',	'2023-05-27 13:13:28',	0),
(8,	'19b0ba45-8ff3-486d-86ba-d9fcbc60128b',	'lp3m',	'2023/2024 genap',	'non-active',	'2023-05-27 13:13:32',	'2023-05-27 13:13:32',	0),
(9,	'b12792dc-37ee-4f51-ad78-17f1c9a64c9c',	'lp3m',	'2023/2024 ganjil',	'non-active',	'2023-05-29 08:12:57',	'2023-05-29 08:12:57',	0),
(10,	'247777fd-3a69-4e1f-b429-f469513d50f2',	'lp3m',	'baru sss',	'active',	'2023-05-29 08:12:53',	'2023-05-29 08:12:53',	0);

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `student_id` text NOT NULL,
  `student_name` varchar(200) NOT NULL,
  `student_nim` varchar(200) NOT NULL,
  `student_email` varchar(200) NOT NULL,
  `student_is_registered` bit(1) DEFAULT b'0',
  `major_id` text NOT NULL,
  `major_name` text NOT NULL,
  `study_program_id` text NOT NULL,
  `study_program_name` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `student` (`id`, `student_id`, `student_name`, `student_nim`, `student_email`, `student_is_registered`, `major_id`, `major_name`, `study_program_id`, `study_program_name`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'1254343434',	'budi.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'JTIP',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'T.Telekomunikasi',	'2023-05-26 23:54:22',	'2023-05-27 06:54:22',	NULL),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'124545444',	'eka.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'SAINS',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'Matematika',	'2023-05-26 23:54:31',	'2023-05-27 06:54:31',	NULL),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'1323232223',	'Yono.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'JTIK',	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'Teknik Geomatika',	'2023-05-26 23:54:41',	'2023-05-27 06:54:41',	NULL);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` text NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` text NOT NULL,
  `user_is_registered` bit(1) DEFAULT b'0',
  `user_registration_status` enum('none','recomendation-letter','report-participation','done') DEFAULT 'none',
  `user_role` enum('student','study_program','major','lp3m','academic') NOT NULL,
  `study_program_id` text DEFAULT NULL,
  `major_id` text DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `user` (`id`, `user_id`, `user_name`, `user_email`, `user_is_registered`, `user_registration_status`, `user_role`, `study_program_id`, `major_id`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Budi T.Telekomunikasi',	'budi.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'none',	'student',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-27 13:57:37',	'2023-05-28 07:57:08',	0),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Eka Matematika',	'eka.mahasiswa@mail.com',	CONV('1', 2, 10) + 0,	'none',	'student',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-27 13:57:37',	'2023-05-28 14:05:15',	0),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Yono T.Geomatika',	'Yono.mahasiswa@mail.com',	CONV('0', 2, 10) + 0,	'none',	'student',	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-27 13:57:37',	NULL,	0),
(4,	'e7c9b63d-bb5a-4b6f-9fd5-9fcbd0b17b56',	'Prodi T.Telekomunikasi',	'TT.prodi@mail.com',	CONV('0', 2, 10) + 0,	'none',	'study_program',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-27 13:57:37',	NULL,	0),
(5,	'e7c9b63d-bb5a-4b6f-9fd5-9fsdsdsd',	'Prodi Matematika',	'Matematika.prodi@mail.com',	CONV('0', 2, 10) + 0,	'none',	'study_program',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-27 13:57:37',	NULL,	0),
(6,	'e7c9b63d-bb5a-4b6f-9fd5-9fcbdsdsds',	'Prodi Teknik Geomatika',	'T.Geomatika.prodi@mail.com',	CONV('0', 2, 10) + 0,	'none',	'study_program',	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-27 13:57:37',	NULL,	0),
(7,	'9403eba1-fdde-40d2-961e-50dac2bb6068',	'J.SAINS',	'sains.jurusan@mail.com',	CONV('0', 2, 10) + 0,	'none',	'major',	NULL,	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-27 13:57:37',	'2023-05-29 15:15:55',	0),
(8,	'9403eba1-fdde-40d2-961e-50dac2bb6068ww',	'JTIK',	'jtik.jurusan@mail.com',	CONV('0', 2, 10) + 0,	'none',	'major',	NULL,	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-27 13:57:37',	'2023-05-29 15:16:03',	0),
(9,	'9403eba1-fdde-40d2-961e-5sdsaaaass',	'JTPI',	'jtpi.jurusan@mail.com',	CONV('0', 2, 10) + 0,	'none',	'major',	NULL,	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-27 13:57:37',	'2023-05-29 15:16:14',	0),
(10,	'2f982ddf-2092-45da-99d1-933718d78b13',	'LP3M',	'lp3m@mail.com',	CONV('0', 2, 10) + 0,	'none',	'lp3m',	NULL,	NULL,	'2023-05-27 13:57:37',	NULL,	0),
(11,	'dff45105-a6b5-4d78-8953-2499d0251115',	'Akademik',	'academic@mail.com',	CONV('0', 2, 10) + 0,	'none',	'academic',	NULL,	NULL,	'2023-05-27 13:57:37',	NULL,	0);

-- 2023-05-29 08:16:50
