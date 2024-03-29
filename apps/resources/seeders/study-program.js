'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('study_program', [
      {
        study_program_id: '29c07c04-6cdd-41d4-9755-24ef9713dbca',
        study_program_name: 'Rekayasa Kosmetik',
        study_program_email: 'RekayasaKosmetik@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '11f8a359-2341-4d51-a9b3-b8953bef6346',
        study_program_name: 'Rekayasa Instrumentasi dan Automasi',
        study_program_email: 'RekayasaInstrumentasidanAutomasi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '7f09cc08-e5b6-403d-8818-48e9cfe6c6e4',
        study_program_name: 'Rekayasa Minyak dan Gas',
        study_program_email: 'RekayasaMinyakdanGas@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '3d0f2c67-b234-4ba4-a4fe-c73db194207f',
        study_program_name: 'Teknik Biomedik',
        study_program_email: 'TeknikBiomedik@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'b77b8c85-e40a-4ae9-b065-5ae4d0b9f69b',
        study_program_name: 'Rekayasa Kehutanan',
        study_program_email: 'RekayasaKehutanan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '8db52aa9-b4f4-4909-97d3-43638d48ce2a',
        study_program_name: 'Teknik Telekomunikasi',
        study_program_email: 'TeknikTelekomunikasi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '076bd53f-553e-4cfb-82ef-f2a027290802',
        study_program_name: 'Teknik Material',
        study_program_email: 'TeknikMaterial@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'ee854beb-e044-42c4-9438-caaf4a5f950a',
        study_program_name: 'Teknik Pertambangan',
        study_program_email: 'TeknikPertambangan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '0678f2ab-5528-471b-9ef8-293ea8a3507a',
        study_program_name: 'Teknik Sistem Energi',
        study_program_email: 'TeknikSistemEnergi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '2b90395a-3026-4ee4-bc68-472ec60521a9',
        study_program_name: 'Teknologi Pangan',
        study_program_email: 'TeknologiPangan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '36f6449b-9edf-4d24-8652-6664deacc79a',
        study_program_name: 'Teknologi Industri Pertanian',
        study_program_email: 'TeknologiIndustriPertanian@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '7172fb6f-944d-4652-928c-179d38806491',
        study_program_name: 'Teknik Biosistem',
        study_program_email: 'TeknikBiosistem@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '3e096f40-2e7c-45dd-8e12-38a6abe3eb23',
        study_program_name: 'Teknik Fisika',
        study_program_email: 'TeknikFisika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '444cae00-bc46-473b-916e-933f36cc6ee2',
        study_program_name: 'Teknik Kimia',
        study_program_email: 'TeknikKimia@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'fbc1131d-7ea7-4f30-8710-042228ce9e2f',
        study_program_name: 'Teknik Industri',
        study_program_email: 'TeknikIndustri@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'b5854f07-0a4a-428c-b0c9-60239bcd9a43',
        study_program_name: 'Teknik Mesin',
        study_program_email: 'TeknikMesin@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'cd5c4250-53d8-4318-ac03-6bef1882ab4f',
        study_program_name: 'Teknik Geologi',
        study_program_email: 'TeknikGeologi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'a9de61fb-29d0-4360-ac48-a3c1e0798e0a',
        study_program_name: 'Teknik Informatika',
        study_program_email: 'TeknikInformatika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '8fb861c7-b1b4-4890-a5ac-22bff0328049',
        study_program_name: 'Teknik Geofisika',
        study_program_email: 'TeknikGeofisika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '21d0b18e-55c5-44d1-87ac-c4dc5bf6754d',
        study_program_name: 'Teknik Elektro',
        study_program_email: 'TeknikElektro@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '9e9a3381-7459-476b-a72e-8ab053da9e99',
        study_program_department_name: 'JTPI',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '59bb7c66-031a-41f3-8fae-8975d410cb0a',
        study_program_name: 'Rekayasa Tata Kelola Air Terpardu',
        study_program_email: 'RekayasaTataKelolaAirTerpardu@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '15ab3564-a937-4925-87f5-62dc1490f52b',
        study_program_name: 'Teknik Perkeretaapian',
        study_program_email: 'teknikperkeretaapian@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '93d597ad-2192-47a8-89f6-203d1ccb99d8',
        study_program_name: 'Arsitektur Lanskap',
        study_program_email: 'arsitekturlanskap@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'e1bfa7f2-7bac-4dec-a636-94b3a996603a',
        study_program_name: 'Desain Komunikasi Visual',
        study_program_email: 'desainkomunikasivisual@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'afcbb4c0-908f-4eee-b1a1-6dbe88ee4f79',
        study_program_name: 'Teknik Kelautan',
        study_program_email: 'teknikkelautan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'c095307d-b3cc-43d4-a312-1daca397fbc9',
        study_program_name: 'ArsitekturTeknik Lingkungan',
        study_program_email: 'tekniklingkungan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '7393626a-c66f-465b-b912-2a1a57613bbf',
        study_program_name: 'Arsitektur',
        study_program_email: 'arsitektur@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'c5a99011-5297-4af2-906e-e1d2d1c3c6ae',
        study_program_name: 'Teknik Sipil',
        study_program_email: 'tekniksipil@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'db019be0-fd35-4a62-bc21-c24ba429a737',
        study_program_name: 'Perencanaan Wilayah dan Kota',
        study_program_email: 'perencanaanwilayahdankota@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'b1491aae-9753-4bde-9934-2c8fb987d8c8',
        study_program_name: 'Teknik Geomatika',
        study_program_email: 'teknikgeomatika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: '4181f385-6386-4f48-9a07-bf039af11175',
        study_program_department_name: 'JTIK',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '80bc9c64-2f1c-45b0-bf6d-faf3d813b26b',
        study_program_name: 'Sains Data',
        study_program_email: 'sainsdata@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '886a85f1-f46a-490c-b036-c5b33dcb9974',
        study_program_name: 'Sains Lingkungan Kelautan',
        study_program_email: 'sainslingkungankelautan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'f0b53d07-5559-4806-994a-0477d5c52d85',
        study_program_name: 'Sains Aktuaria',
        study_program_email: 'sainsaktuaria@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '70ddb3ba-c592-4625-bd97-134771d0a80a',
        study_program_name: 'Atmosfer dan Keplanetan',
        study_program_email: 'atmosferdankeplanetan@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '42ccfb65-a027-4de9-95c4-e153832e60fe',
        study_program_name: 'Farmasi',
        study_program_email: 'farmasi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'ee0dc002-f505-4dc4-b992-10cde709da66',
        study_program_name: 'Kimia',
        study_program_email: 'kimia@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'ae3bd350-8af8-4423-a5a6-3dc7991cba28',
        study_program_name: 'Biologi',
        study_program_email: 'biologi@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: '30b3c037-7d11-4a60-a039-ab09b007fd94',
        study_program_name: 'Matematika',
        study_program_email: 'matematika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      },
      {
        study_program_id: 'd6a6c91e-f00c-4707-9b94-c7e7f9c0c658',
        study_program_name: 'Fisika',
        study_program_email: 'fisika@itera.ac.id',
        study_program_is_registered: false,
        study_program_department_id: 'ed697f88-a372-442d-bc39-3772f544bdb5',
        study_program_department_name: 'SAINS',
        study_program_semester_id: 'a7b24cf5-25e1-43d0-9381-f39f5140a91b'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('study_program', null, {})
  }
}
