const express = require('express');
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(` Meu servidor está rodando nessa porta: ${port}`)
})