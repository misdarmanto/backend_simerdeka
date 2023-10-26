'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mbkm_program_type', [
      {
        mbkm_program_type_id: 'sdsd3erew-4rewrew5-9f8c-dsdsd434erere',
        mbkm_program_type_name: 'Tugas Akhir'
      },
      {
        mbkm_program_type_id: 'erer-4rehhfg5-9f8c-dsty5676ty',
        mbkm_program_type_name: 'Tesis'
      },
      {
        mbkm_program_type_id: 'dsjjhg-546545-9f8ctyty-gfdg0p',
        mbkm_program_type_name: 'Disertasi'
      },
      {
        mbkm_program_type_id: 'hjghhg5ter-rttret-9f8rtty-grt23',
        mbkm_program_type_name: 'Kuliah Kerja Nyata'
      },
      {
        mbkm_program_type_id: 'er5ttyty-rtt-955645tty-fgfg',
        mbkm_program_type_name: 'Kerja Praktek/PKL'
      },
      {
        mbkm_program_type_id: 'fddsfty-r3456435t-435435-ereerer',
        mbkm_program_type_name: 'Bimbingan Akademis'
      },
      {
        mbkm_program_type_id: 'erfg-45fd6435t-435435-etytyr',
        mbkm_program_type_name: 'Aktivitas Kemahasiswaan'
      },
      {
        mbkm_program_type_id: 'ertewrt-4354ererrtreterter',
        mbkm_program_type_name: 'Program Kreativitas Mahasiswa'
      },
      {
        mbkm_program_type_id: 'erewrhfghfgrt-4tytyttrtreter',
        mbkm_program_type_name: 'Kompetisi'
      },
      {
        mbkm_program_type_id: 'erewrhfghfgrt-4tytyttrtreter',
        mbkm_program_type_name: 'Laporan Akhir Studi'
      },
      {
        mbkm_program_type_id: 'ytrtgrt-4jkjkhjk-gthfgh77',
        mbkm_program_type_name: 'Skripsi'
      },
      {
        mbkm_program_type_id: 'ewriuyt-4j7676jk-g7776876yyt',
        mbkm_program_type_name: 'Kegiatan Penelitian Reguler (MBKM)'
      },
      {
        mbkm_program_type_id: 'sdsd-4ererk-g7erer435',
        mbkm_program_type_name: 'Pertukaran Pelajar (MBKM)'
      },
      {
        mbkm_program_type_id: 'sdsadrk-g7wewewwwwwwwwwww',
        mbkm_program_type_name: 'Bela Negara (MBKM)'
      },
      {
        mbkm_program_type_id: 'yuiuid-g765756w676wwyy',
        mbkm_program_type_name: 'Membangun Desa/Kuliah Kerja Nyata Tematik (MBKM)'
      },
      {
        mbkm_program_type_id: 'jkfghfg6756-g56756ytugjghj',
        mbkm_program_type_name: 'Studi/Proyek Independen (MBKM)'
      },
      {
        mbkm_program_type_id: 'sdsdsssss6-ger7567rtrt',
        mbkm_program_type_name: 'Proyek Kemanusiaan (MBKM)'
      },
      {
        mbkm_program_type_id: 'kjkjhk6ysssyuyu-ger674rtert',
        mbkm_program_type_name: 'Penelitian/Reset (MBKM)'
      },
      {
        mbkm_program_type_id: 'jhgjhgjys5654-rrytyrtrtrer54',
        mbkm_program_type_name: 'Asisten Mengajar di Satuan Pendidikan (MBKM)'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mbkm_program_type', null, {})
  }
}
