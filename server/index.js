require("dotenv").config();
const getApiTeams = require('./src/utils/getApiTeams.js');
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;

let dataLoaded = false;

conn.sync({ force: false }).then(async () => {
  console.log('Database connected successfully');
  // if (!dataLoaded) {
  //   await getApiTeams();
  //   dataLoaded = true;
  //   console.log('¡Datos de la API cargados exitosamente!');
  // }
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
