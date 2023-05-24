-- Adminer 4.8.1 MySQL 5.5.5-10.6.11-MariaDB-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `academic_program`;
CREATE TABLE `academic_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `academic_program_id` text NOT NULL,
  `academic_program_created_by` text NOT NULL,
  `academic_program_name` text NOT NULL,
  `academic_program_type` text NOT NULL,
  `major_id` text NOT NULL,
  `semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `academic_program` (`id`, `academic_program_id`, `academic_program_created_by`, `academic_program_name`, `academic_program_type`, `major_id`, `semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(4,	'4f4e3d1a-ac3c-4fcf-a83e-ebdfca3cef21',	'akademik',	'ttyty',	'Studi Independen',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'2023-05-23 09:19:51',	NULL,	0),
(5,	'7e426a90-284a-4372-b501-50e1ca8e5c2d',	'akademik',	'test',	'Studi Independen',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'2023-05-23 09:58:09',	NULL,	0),
(6,	'f344b1fe-4fa6-4b6f-9529-03dad6c34d77',	'akademik',	'magang',	'Magang Bersertifikat',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'a81acf07-f012-4cd8-8000-7ac8afe50597',	'2023-05-23 20:35:24',	NULL,	0);

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
(1,	'ec982b65-df1e-4249-9e24-5c1dce7ebc8e',	'Program Studi Fisika',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(2,	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'Program Studi Matematika',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(3,	'84cc81c9-5379-46c1-b814-941aee6bd6b9',	'Program Studi Biologi',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(4,	'7964bbef-1d41-4c44-b6b7-dbea68c6fa22',	'Program Studi Kimia',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(5,	'3f9203b4-341e-490b-9050-d1f11a857625',	'Program Studi Farmasi',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(6,	'2602bf75-9455-473e-bf6f-b0da4d295386',	'Program Studi Sains Lingkungan Kelautan',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(7,	'd2ee6345-d411-4d86-b637-7e9c40f0c595',	'Program Studi Sains Atmosfir dan Keplanetan',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(8,	'87524a5a-5222-4de9-a89b-dc1649658284',	'Program Studi Sains Aktuaria',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(9,	'10cbf60b-9a13-4ad3-b137-a02b9b5fff93',	'Program Studi Sains Data',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'2023-05-22 22:32:48',	NULL,	0),
(10,	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'Program Studi Teknik Geomatika',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(11,	'9f2f615a-0e06-403d-947a-65122faa6ae7',	'Program Studi Perencanaan Wilayah dan Kota',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(12,	'd2c76dc8-08c6-435b-a503-03fa1fe8da9e',	'Program Studi Teknik Sipil',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(13,	'7e4a22da-635b-447f-857e-781c631c5863',	'Program Studi Teknik Arsitektur',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(14,	'a4fa1178-3595-4d25-be95-69171148168c',	'Program Studi Teknik Lingkungan',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(15,	'1e899b28-7b69-4fba-ace2-6bd3b0013af0',	'Program Studi Teknik Kelautan',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(16,	'3493f7e0-d365-46b3-83bc-062ddae37b94',	'Program Studi Desain Komunikasi Visual',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(17,	'b075a46e-fd24-455d-a970-5b10ea0f4261',	'Program Studi Arsitektur Lanskap',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(18,	'9c608fda-a9d1-462f-a0c9-2547a803d11f',	'Program Studi Teknik Perkeretaapian',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(19,	'347af298-6075-4e1e-9657-48254d8e9c99',	'Program Studi Rekayasa Tata Kelola Air Terpadu',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(20,	'9f7393d6-f34b-4bab-8c3a-f22eb00bd2a8',	'Program Studi Pariwisata',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'2023-05-22 22:32:48',	NULL,	0),
(21,	'f3185b1a-7ddd-423e-963e-169a871c3984',	'Program Studi Teknik Elektro',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:32:48',	NULL,	0),
(22,	'c5211219-4f63-4aa7-a8f7-c724c233c14e',	'Program Studi Teknik Fisika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:32:48',	NULL,	0),
(23,	'70e639c6-f649-4edb-be91-ad9d00744fe3',	'Program Studi Teknik Informatika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(24,	'7229ea8c-1682-4a4d-9b51-bd55d7137d04',	'Program Studi Teknik Geologi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(25,	'b6f6e861-6b39-4fa6-83fd-0251f7b5d5ab',	'Program Studi Teknik Geofisika',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(26,	'41e2379d-3520-4234-8841-ee6384b58ccc',	'Program Studi Teknik Mesin',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(27,	'c8ee48cc-77b0-43cd-a3d8-f15413e30fef',	'Program Studi Teknik Kimia',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(28,	'd4fb254e-04db-47ba-aa19-a9a66e61830a',	'Program Studi Teknik Material',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(29,	'e4cab0a7-62b6-4711-857c-c561088f4974',	'Program Studi Teknik Sistem Energi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(30,	'75414c31-76a0-4c71-9700-5525044c9432',	'Program Studi Teknik Industri',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(31,	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'Program Studi Teknik Telekomunikasi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(32,	'3463edca-34d7-452b-8c0e-05a5d8d3bcdd',	'Program Studi Teknik Pertambangan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(33,	'3f742886-9562-4e87-888f-6fffa75c3019',	'Program Studi Teknik Biosistem',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(34,	'5556ab49-c367-4077-be68-84bd1bf13bd1',	'Program Studi Teknik Biomedik',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(35,	'0f01400b-244e-422d-a99a-ab9bdf336d70',	'Program Studi Teknologi Pangan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(36,	'75ba8c14-fd13-4416-abf2-9dd721e88eae',	'Program Studi Teknologi Industri Pertanian',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(37,	'a675676b-789c-4bf8-b57a-883614be5568',	'Program Studi Rekayasa Kehutanan',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(38,	'b0ad379e-0689-4572-bc2a-5a8fc54f0152',	'Program Studi Rekayasa Kosmetik',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(39,	'8babdaa0-c3c4-476f-83a2-8b65d227fb0b',	'Program Studi Rekayasa Minyak dan Gas',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0),
(40,	'7d886ca9-6baa-421c-8b5d-0086509f31ee',	'Program Studi Instrumentasi dan Automasi',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'2023-05-22 22:57:04',	NULL,	0);

DROP TABLE IF EXISTS `program_for_major`;
CREATE TABLE `program_for_major` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `program_major_id` text NOT NULL,
  `program_major_created_by` text NOT NULL,
  `program_major_name` text NOT NULL,
  `program_major_type` text NOT NULL,
  `major_id` text NOT NULL,
  `study_program_id` text NOT NULL,
  `semester_id` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


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
  `recomendation_letter_assign_to_academic` bit(1) DEFAULT NULL,
  `recomendation_letter_assign_to_biro` bit(1) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `recomendation_letter` (`id`, `recomendation_letter_id`, `student_id`, `study_program_id`, `major_id`, `recomendation_letter_student_transkrip`, `recomendation_letter_dosen_wali`, `recomendation_letter_approval_letter`, `recomendation_letter_from_study_program`, `recomendation_letter_from_major`, `recomendation_letter_from_lp3m`, `recomendation_letter_from_academic`, `recomendation_letter_program_name`, `recomendation_letter_program_correlation`, `recomendation_letter_status`, `recomendation_letter_status_message`, `recomendation_letter_assign_to_student`, `recomendation_letter_assign_to_study_program`, `recomendation_letter_assign_to_major`, `recomendation_letter_assign_to_academic`, `recomendation_letter_assign_to_biro`, `created_on`, `modified_on`, `deleted`) VALUES
(22,	'9d2c4734-391b-401e-8b7e-6d63708ebb15',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=d4214ecc-61de-46cc-990f-2b0778550a85',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=05982940-a7af-43e0-981b-563dc78c59f4',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c08a47ff-9354-4597-a0ed-bf7462116b73',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=12d57121-2dd6-4be8-a35f-67358475d862',	'',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=f19d371a-d8da-452f-a81f-3edf82af7923',	'test',	'dsds',	'accepted',	'Selamat, surat rekomendasi mu telah disetujui',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	'2023-05-24 07:44:04',	'2023-05-24 01:00:12',	0),
(23,	'6ab95ddb-caeb-4a28-a9fb-8ad05f243389',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=5d3f1198-5d1a-46d2-a488-3c755bceefce',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=c8b02fb3-d357-4002-af1e-9c80c25c0a23',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=beace86c-eb11-4672-b75a-e5c0d5fa97ed',	'',	NULL,	NULL,	'test',	'dsd',	'waiting',	'Selamat, surat rekomendasi mu telah diteruskan ke LP3M',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	'2023-05-24 07:58:33',	'2023-05-24 01:03:16',	0),
(24,	'547061d9-eb30-4781-8e70-d0168b38d301',	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=9d908cc3-8f72-4235-a3f6-c21726a8b7d9',	'dosen 4',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=1bc2dc2e-73e1-459d-8690-d498301d99d6',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=aafac97f-54c1-4980-99e6-391e7a0ec8fd',	NULL,	NULL,	NULL,	'tess',	'fss',	'rejected',	'sdsdsd',	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	NULL,	'2023-05-24 08:05:51',	'2023-05-24 01:35:46',	0);

DROP TABLE IF EXISTS `semester`;
CREATE TABLE `semester` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `semester_id` text NOT NULL,
  `semester_created_by` text NOT NULL,
  `semester_name` text NOT NULL,
  `semester_type` enum('ganjil','genap') NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `semester` (`id`, `semester_id`, `semester_created_by`, `semester_name`, `semester_type`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'akademik',	'semester 6 mbkm',	'ganjil',	'2023-05-21 16:28:54',	'2023-05-21 23:28:54',	0),
(4,	'a81acf07-f012-4cd8-8000-7ac8afe50597',	'akademik',	'semester 7',	'ganjil',	'2023-05-23 10:11:27',	NULL,	0),
(5,	'da543eca-1f61-4ece-93fe-9b20c826021c',	'academic',	'8',	'genap',	'2023-05-23 20:35:24',	NULL,	0);

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `student_id` text NOT NULL,
  `student_name` varchar(200) NOT NULL,
  `student_nim` varchar(200) NOT NULL,
  `student_email` varchar(200) NOT NULL,
  `major_id` text NOT NULL,
  `major_name` text NOT NULL,
  `study_program_id` text NOT NULL,
  `study_program_name` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `student` (`id`, `student_id`, `student_name`, `student_nim`, `student_email`, `major_id`, `major_name`, `study_program_id`, `study_program_name`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Mahasiswa T.Telekomunikasi',	'1254343434',	'mahasiswa@mail.com',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'JTIP',	'c01f3e37-cd2d-48ed-b5de-0c3505bb1ff6',	'T.Telekomunikasi',	'2023-05-24 00:08:04',	'2023-05-24 07:08:04',	NULL),
(2,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Mahasiswa Matematika',	'124545444',	'budi.mahasiswa@mail.com',	'ab74e972-8a59-4b34-8df6-0f860b5d60d6',	'SAINS',	'866f8f1c-f51c-4bfc-80f3-fc0b6d44b27e',	'Matematika',	'2023-05-24 00:08:37',	'2023-05-24 07:08:37',	NULL),
(3,	'8cd17bb9-d727-4578-99c5ssadsa',	'Mahasiswa Teknik Geomatika',	'1323232223',	'Yono.mahasiswa@mail.com',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'JTIK',	'80769fad-7287-49b1-be85-0811a0dd2ecf',	'Teknik Geomatika',	'2023-05-24 00:09:06',	'2023-05-24 07:09:06',	NULL);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` text NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `user_password` text NOT NULL,
  `user_role` enum('mahasiswa','prodi','jurusan','akademik','biro') NOT NULL DEFAULT 'mahasiswa',
  `user_photo` text DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `user` (`id`, `user_id`, `user_name`, `user_email`, `user_password`, `user_role`, `user_photo`, `created_on`, `modified_on`, `deleted`) VALUES
(7,	'46cbc5cd-8f15-4777-a7c1-84767ec2342f',	'Jack',	'Jacks@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'mahasiswa',	NULL,	'2023-05-19 17:30:22',	NULL,	0),
(8,	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'budi',	'budi.mahasiswa@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'mahasiswa',	NULL,	'2023-05-19 20:02:55',	NULL,	0),
(9,	'e7c9b63d-bb5a-4b6f-9fd5-9fcbd0b17b56',	'Ahmad',	'Ahmad.prodi@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'prodi',	NULL,	'2023-05-19 20:02:55',	NULL,	0),
(10,	'9403eba1-fdde-40d2-961e-50dac2bb6068',	'Wati',	'wati.jurusan@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'jurusan',	NULL,	'2023-05-19 20:02:55',	NULL,	0),
(11,	'2f982ddf-2092-45da-99d1-933718d78b13',	'Nana',	'nana.akademik@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'akademik',	NULL,	'2023-05-19 20:02:55',	NULL,	0),
(12,	'dff45105-a6b5-4d78-8953-2499d0251115',	'Rudi',	'rudi.biro@mail.com',	'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',	'biro',	NULL,	'2023-05-19 20:02:55',	NULL,	0);

-- 2023-05-24 01:38:42
