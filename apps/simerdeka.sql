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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `academic_program` (`id`, `academic_program_id`, `academic_program_created_by`, `academic_program_name`, `academic_program_type`, `major_id`, `semester_id`, `created_on`, `modified_on`, `deleted`) VALUES
(4,	'4f4e3d1a-ac3c-4fcf-a83e-ebdfca3cef21',	'akademik',	'ttyty',	'Studi Independen',	'5e36b9c2-85fa-4bf8-91bf-b8628fa8cff9',	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'2023-05-23 09:19:51',	NULL,	0),
(5,	'7e426a90-284a-4372-b501-50e1ca8e5c2d',	'akademik',	'test',	'Studi Independen',	'a6c6f281-4257-42ed-87f1-dbb1acea8ac0',	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'2023-05-23 09:58:09',	NULL,	0);

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

DROP TABLE IF EXISTS `registration_LoR`;
CREATE TABLE `registration_LoR` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `registration_lor_id` text NOT NULL,
  `user_id` text NOT NULL,
  `student_id` text NOT NULL,
  `student_name` varchar(250) NOT NULL,
  `student_nim` text NOT NULL,
  `student_transkrip` text NOT NULL,
  `dosen_wali` varchar(250) NOT NULL,
  `surat_persetujuan_dosen_wali` text NOT NULL,
  `program_name` text NOT NULL,
  `program_correlation_description` text NOT NULL,
  `registration_status` enum('waiting','accepted','rejected') DEFAULT 'waiting',
  `registration_status_message` text DEFAULT NULL,
  `registration_lor_assign_to_mahasiswa` bit(1) DEFAULT NULL,
  `registration_lor_assign_to_prodi` bit(1) DEFAULT NULL,
  `registration_lor_assign_to_jurusan` bit(1) DEFAULT NULL,
  `registration_lor_assign_to_akademik` bit(1) DEFAULT NULL,
  `registration_lor_assign_to_biro` bit(1) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `registration_LoR` (`id`, `registration_lor_id`, `user_id`, `student_id`, `student_name`, `student_nim`, `student_transkrip`, `dosen_wali`, `surat_persetujuan_dosen_wali`, `program_name`, `program_correlation_description`, `registration_status`, `registration_status_message`, `registration_lor_assign_to_mahasiswa`, `registration_lor_assign_to_prodi`, `registration_lor_assign_to_jurusan`, `registration_lor_assign_to_akademik`, `registration_lor_assign_to_biro`, `created_on`, `modified_on`, `deleted`) VALUES
(10,	'85eeae03-aaf1-44ca-a055-32723099e6b3',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'8cd17bb9-d727-4578-99c5-a223296d55b8',	'Budi',	'123344',	'http:example.com/file',	'Mariem',	'http:/example.com/file',	'test',	'text',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	NULL,	'2023-05-19 20:02:55',	'2023-05-20 13:45:07',	0),
(11,	'424cc064-be87-4d87-9bc0-bc218c05be34',	'1684570450687',	'1684570450687',	'test 2',	'test 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=d651b493-3138-4cf6-b7d5-ee236e94f998',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=4ffdb07e-d1a7-4646-8554-12038f26e121',	'test 2',	'test 2',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	'2023-05-20 15:09:33',	'2023-05-20 10:11:00',	0),
(12,	'd0e9ad5e-af20-4c22-86c6-3f7932847edf',	'1684591431920',	'1684591431920',	'test 3',	'test 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=67c2ee0e-70a6-4422-887a-d03f9aa8065b',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=b0a07b09-de44-4309-9916-65cd2e0967b5',	'test 3',	'sssssss',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	NULL,	'2023-05-20 20:29:46',	'2023-05-20 14:09:11',	0),
(13,	'd2b6ca37-40ff-4c63-b707-75405f5ad5da',	'1684633446779',	'1684633446779',	'sda',	'sda',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=a3deec0e-8036-4c64-b5df-db83059511c0',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=cbe9e91a-ec9a-496c-acc9-c9e2c853d047',	'sd',	'sdsad',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	NULL,	'2023-05-21 07:53:46',	'2023-05-21 01:44:58',	0),
(14,	'562246dd-065a-491f-adf1-3dda8f7a4f70',	'1684636958172',	'1684636958172',	'qwerty',	'qwerty',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=7a4e4373-5f7a-4e8d-af95-7e7ead2d0980',	'dosen 2',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=3b148f47-5df9-4a7b-bfe0-1cc0c6c18858',	'sdssssssssss',	'fcxd',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	'2023-05-21 07:53:46',	'2023-05-21 02:54:43',	0),
(15,	'95f041de-742b-42bf-aa6b-25392091b137',	'1684811545741',	'1684811545741',	'tessssdddddddddddddd',	'tessssdddddddddddddd',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=07a92654-f1b2-4657-b390-45639fd3fefe',	'dosen 3',	'https://firebasestorage.googleapis.com/v0/b/project-itera.appspot.com/o/request-Lor%2FTest%20simerdeka.pdf?alt=media&token=186b18ed-5ef3-4aee-860d-785b0e1a9e36',	'dsds',	'sdddd',	'waiting',	NULL,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0,	NULL,	NULL,	NULL,	'2023-05-23 10:11:27',	NULL,	0);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `semester` (`id`, `semester_id`, `semester_created_by`, `semester_name`, `semester_type`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'3e377112-952f-4eb4-a4e8-9c5ebf665d2e',	'akademik',	'semester 6 mbkm',	'ganjil',	'2023-05-21 16:28:54',	'2023-05-21 23:28:54',	0),
(4,	'a81acf07-f012-4cd8-8000-7ac8afe50597',	'akademik',	'semester 7',	'ganjil',	'2023-05-23 10:11:27',	NULL,	0);

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

-- 2023-05-23 05:11:47
