const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cinestreaming', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(' Conectado a MongoDB'))
.catch(err => console.log(' Error conectando a MongoDB:', err));

// Esquemas de MongoDB
const UsuarioSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    email: { type: String, unique: true },
    password_hash: String,
    generos_favoritos: [String],
    fecha_registro: { type: Date, default: Date.now }
});

const PeliculaSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    año: Number,
    directores: [String],
    actores: [String],
    generos: [String],
    sinopsis: String,
    duracion: Number,
    poster_url: String,
    promedio_calificacion: { type: Number, default: 0 },
    fecha_agregado: { type: Date, default: Date.now }
});

const ResenaSchema = new mongoose.Schema({
    id: String,
    pelicula_id: String,
    usuario_id: String,
    calificacion: Number,
    comentario: String,
    fecha_publicacion: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
const Pelicula = mongoose.model('Pelicula', PeliculaSchema);
const Resena = mongoose.model('Resena', ResenaSchema);

// Rutas de la API
app.get('/api/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/resenas', async (req, res) => {
    try {
        const resenas = await Resena.find();
        res.json(resenas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/peliculas', async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);
        await pelicula.save();
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/resenas', async (req, res) => {
    try {
        const resena = new Resena(req.body);
        await resena.save();
        res.json(resena);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/peliculas/:id', async (req, res) => {
    try {
        const pelicula = await Pelicula.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        message: 'Servidor de CineStreaming funcionando!',
        endpoints: {
            usuarios: '/api/usuarios',
            peliculas: '/api/peliculas', 
            resenas: '/api/resenas'
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor de CineStreaming corriendo en puerto ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(' Endpoints disponibles:');
    console.log('   - GET  /api/usuarios');
    console.log('   - GET  /api/peliculas');
    console.log('   - GET  /api/resenas');
    console.log('   - POST /api/usuarios');
    console.log('   - POST /api/peliculas');
    console.log('   - POST /api/resenas');
});