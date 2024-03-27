const pool = require('./connect')

const User = {
    getAllHotel: (callback) => {
        let queryhotel = "SELECT   h.name as hotel, h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idOwner = 1 GROUP BY e.idUser, e.name, e.idHotel, h.name, h.address Having h.description like '%giá rẻ%' order by AVG(e.star) LIMIT 10 OFFSET 0"
        pool.query(queryhotel, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getAllRoom: (callback) => {
        let queryroom = "SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r where r.idhotel = 6 and r.type like 'Tiêu chuẩn' order by price LIMIT 10 OFFSET 0 "
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    }
};

module.exports = User;