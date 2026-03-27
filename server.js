const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// SQL Холболтын тохиргоо (Өөрийн нууц үгээ password хэсэгт бичээрэй)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sancarlo_db',
  password: 'ЧИНИЙ_НУУЦ_ҮГ', // Жишээ нь: '1234'
  port: 5432,
});

// Захиалга хүлээн авах API
app.post('/api/bookings', async (req, res) => {
  const { name, phone, room, date, time } = req.body;

  try {
    const query = `
      INSERT INTO bookings (customer_name, phone_number, room_name, booking_date, booking_time)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [name, phone, room, date, time];
    const result = await pool.query(query, values);
    
    res.status(201).json({ message: "Амжилттай хадгалагдлаа!", data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Серверт алдаа гарлаа." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер ${PORT} порт дээр ажиллаж байна...`);
});