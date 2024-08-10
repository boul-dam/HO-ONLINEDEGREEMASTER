// pages/api/submit.js
import nextConnect from 'next-connect';
import multer from 'multer';
import clientPromise from '../lib/mongodb';

const upload = multer({ dest: '/tmp' });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('document'));

apiRoute.post(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();

  const { fullName, age, phone, email } = req.body;
  const documentPath = req.file.path;

  const result = await db.collection('users').insertOne({
    fullName,
    age: parseInt(age, 10),
    phone,
    email,
    documentPath,
  });

  res.status(200).json({ success: true, message: 'Data submitted successfully!', data: result.ops[0] });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
