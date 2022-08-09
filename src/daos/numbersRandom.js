const express = require('express');
const { fork } = require('child_process');
const router = express.Router();

//Así estaba en el desafío 28 con fork
/* router.get('/', (req, res) => { */
/*     let cant = parseInt(req.query.cant); */
/*     if (!cant) cant = 1e8; */
/*     const randomFork = fork('src/daos/randomFork.js') */;
/*     randomFork.send(cant); */
/*     console.log(process.pid) */
/*     randomFork.on('message', (nums) => { */
/*         res.send(nums); */
/*     }); */
/* }); */

//Primera parte nginx desafío 30
/* const cluster = require('cluster'); */
/* const { generateRandom } = require('../../utils/generateRandom'); */
/* const numCPUs = require('os').cpus().length; */
/* console.log("está en numbersRandom") */
/*  */
/* if (cluster.isMaster) { */
/*     for (let i = 0; i < numCPUs; i++) { */
/*         cluster.fork(); */
/*     }     */
/* } else { */
/*     const app = express(); */
/*     router.get('/', (req, res) => { */
/*         console.log("está en el else de cluster random") */
/*         let cant = parseInt(req.query.cant); */
/*         if (!cant) cant = 1e8; */
/*         const nums = generateRandom(cant); */
/*         console.log(process.pid); */
/*         res.send(nums); */
/*     }); */
/*     app.listen(8080, () => { */
/*         console.log(`escuchando en puerto 8081, pid: ${process.pid}`); */
/*     }); */
/* }; */

//Segunda parte nginx desafío 30

router.get('/', (req, res) => {
    console.log("estoy en get random")
    let cant = parseInt(req.query.cant);
    if (!cant) cant = 1e8;
    const nums = generateRandom(cant); 
    res.send(nums);
});

module.exports = router;