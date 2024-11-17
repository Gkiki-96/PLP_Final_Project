const express = require ('express');
const cors = require ('cors');
const novelRoutes = require ('./routes/novelRoutes');

const app =express ();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/novels',novelRoutes);

app.listen(PORT, () => {
    console.log (`Server running on http://localhost:${PORT}`);
});