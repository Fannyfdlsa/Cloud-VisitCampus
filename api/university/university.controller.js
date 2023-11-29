const UniversityService = require('./univ.service');

module.exports = {
  createUniversity: (req, res) => {
    const universityData = req.body;
    UniversityService.create(universityData, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: 0,
          message: "Gagal menambahkan universitas."
        });
      }
      return res.status(201).json({
        success: 1,
        message: "Universitas berhasil ditambahkan.",
        data: results
      });
    });
  },
  
  getUniversityByName: (req, res) => {
    const name = req.params.name;
    UniversityService.getUniversityByName(name, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: 0,
          message: "Gagal mendapatkan informasi universitas."
        });
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Universitas tidak ditemukan."
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  
  getAllUniversities: (req, res) => {
    UniversityService.getAllUniversities((err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: 0,
          message: "Gagal mendapatkan daftar universitas."
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  
  updateUniversity: (req, res) => {
    const universityData = req.body;
    UniversityService.updateUniversity(universityData, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: 0,
          message: "Gagal memperbarui informasi universitas."
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Informasi universitas berhasil diperbarui."
      });
    });
  },
  
  deleteUniversity: (req, res) => {
    const universityId = req.params.id;
    UniversityService.deleteUniversity(universityId, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: 0,
          message: "Gagal menghapus universitas."
        });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({
          success: 0,
          message: "Universitas tidak ditemukan."
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Universitas berhasil dihapus."
      });
    });
  }
};
