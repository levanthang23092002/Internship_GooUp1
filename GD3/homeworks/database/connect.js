require('dotenv').config();
const { Pool } = require('pg');

const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const pool = new Pool({
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName,
});

function connectToPostgreSQL() {
    pool.connect((err, client, done) => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err);
            // Kết nối thất bại, thử kết nối lại sau 5 giây
            setTimeout(connectToPostgreSQL, 5000);
            return;
        }
        console.log('Connected to PostgreSQL');
        done();
    });
}
const User = {
    getAllHotel: (callback) => {
        let queryhotel = "SELECT   h.name as hotel, h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idOwner = 4 GROUP BY e.idUser, h.idHotel, h.name, h.address  order by AVG(e.star) LIMIT 10 OFFSET 0"
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
    },
    getUser: (userId,callback) => {
      
        let queryroom =` SELECT u.name, u.phone, u.address, u.email From users as u where idUser = ${userId}; `
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getAllRoomBooking: (userId,callback) => {
        let queryroom = ` SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r Left JOIN reservations as re On r.idRoom = re.idRoom where  re.idUser = ${userId} order by re.checkin DESC LIMIT 10 OFFSET 0; `
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getRoomBooking: (roomId, callback) => {
        let queryroom = `SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r where  r.idRoom = ${roomId} ;`
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getAllEvaluate: (callback) => {
        let queryroom = " SELECT h.name , h.email, h.address, e.description as comment , e.star From hotels as h JOIN evaluate as e On h.idHotel = e.idHotel where e.idUser = 1"
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