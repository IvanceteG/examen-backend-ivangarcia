const mascotas = [
    {
        id: 1,
        nombre: "Luna",
        tipo: "Perro",
        raza: "Chihuahua",
        foto_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh62o_CTrZm_Pph47OZfRRbB-TC4KoEApWj3-A76B7LfS9wdaVAJpjZh9W80txbuIQn79HIqP3AJJhxyFOE0ZgSbyMArdAdAfguPFFOQ&s=10"
    },
    {
        id: 2,
        nombre: "Milo",
        tipo: "Gato",
        raza: "Siamés",
        foto_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO1rKsrHSBM7lZz0GoJCkVOPwDNWdmx-ZcHLPKwUo_8WJh7OUL16xjhJ7pfo5fu0SXVioBpRpjT45Mz20NqX3-PnfQJ2NjIyTPx4GRsrCkQ&s=10"
    },
    {
        id: 3,
        nombre: "Rocky",
        tipo: "Perro",
        raza: "Bulldog",
        foto_url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Racib%C3%B3rz_2007_082.jpg"
    },
    {
        id: 4,
        nombre: "Nala",
        tipo: "Gato",
        raza: "Persa",
        foto_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73vrKgTAIPDvewfxJENo3XptLGFATb5bqkqKxBsCl4Fw6ut5IIeTc0FCn034X9dEKpDvAi0kesFaTzguV7PSnuaXGoOf_SYD2lr92aBg&s=10"
    },
    {
        id: 5,
        nombre: "Kira",
        tipo: "Perro",
        raza: "Pastor Alemán",
        foto_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu39UCTdnguI2u4KkAcKjmuXzZ-VsNiPbKsQvyEj4JJsmk_6aKIbCmszrSB63KbgLZ8m0gxOF5xwoCVONUzWQmbTgNAsDeWd35P8qgGg&s=10"
    }
];

const getMascotas = (req, res) => {
    res.json({ mascotas: mascotas });
};

const getMascotaById = (req, res) => {
    const { id } = req.params;
    const mascota = mascotas.find(m => m.id === Number(id));
    if (!mascota) {
        return res.status(404).json({ error: 'Mascota no encontrada', id });
    }
    res.json(mascota);
};

const createMascota = (req, res) => {
    const { nombre, tipo, raza, foto_url } = req.body;
    const id = mascotas.length + 1;
    const nueva = { id, nombre, tipo, raza, foto_url };
    mascotas.push(nueva);
    res.status(201).json(nueva);
};

const updateMascota = (req, res) => {
    const { id } = req.params;
    const index = mascotas.findIndex(m => m.id === Number(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Mascota no encontrada', id });
    }
    mascotas[index] = { ...mascotas[index], ...req.body, id: Number(id) };
    res.json(mascotas[index]);
};

const deleteMascota = (req, res) => {
    const { id } = req.params;
    const index = mascotas.findIndex(m => m.id === Number(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Mascota no encontrada', id });
    }
    mascotas.splice(index, 1);
    res.status(204).send();
};

export {
    getMascotas, getMascotaById, createMascota, updateMascota, deleteMascota
};