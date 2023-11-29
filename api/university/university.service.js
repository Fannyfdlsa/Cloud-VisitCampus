const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO university(univ_name, personality_univ, accreditation_univ, latitude, longitude, univ_logo, univ_cover, type_univ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.univ_name,
        data.personality_univ,
        data.accreditation_univ,
        data.latitude,
        data.longitude,
        data.univ_logo,
        data.univ_cover,
        data.type_univ
      ],
      (error, result, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, result);
      }
    );
  }
};
