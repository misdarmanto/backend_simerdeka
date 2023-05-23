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


-- 2023-05-23 04:48:24
