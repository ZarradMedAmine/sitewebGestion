const mongoose = require('mongoose');

const RhSchema = mongoose.Schema({
        typeContrat: { type: String },
        hireDate: { type: Date, default: Date.now },
        dateCreation: { type: Date, default: Date.now },
          // Ajout de la date d'engagement avec une valeur par défaut de la date actuelle
      });

module.exports = mongoose.model('Rh', RhSchema);