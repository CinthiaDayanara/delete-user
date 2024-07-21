const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

// Ruta para eliminar un usuario por su ID
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Buscar y eliminar el usuario por su ID
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado exitosamente', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario', details: error.message });
  }
});

module.exports = router;
