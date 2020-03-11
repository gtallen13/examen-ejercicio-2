const msyql = require('mysql');
const connection = msyql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: '',
    database: 'examenpm'
})

connection.connect(function(err)
{
    if (err) throw err;
    console.log('Succesful connection');
})


const txtTitulo = document.getElementById('title');
const txtNote = document.getElementById('note');
const btnSave = document.getElementById('btn_guardar');
const txtCategoria = document.getElementById('categoria');
const sql = 'select title, note, categoria from notes'
const btnConsultar = document.getElementById('btn_consultar');
const table = document.getElementById('notas_tabla');


btnSave.addEventListener('click', function(e)
{
    e.preventDefault();
    if (txtNote.value === '')
    {
      console.log ('No se ingreso una nota');
    }
    else
    {
        let sql = `insert into notes(title, note, categoria) values ('${txtTitulo.value}', '${txtNote.value}', '${txtCategoria.value}')`
        connection.query(sql,
            function(err, results, fields)
            {
                if (err) throw err;
                console.log('Se ha guardado con exito');
            })
    }

})

btnConsultar.addEventListener('click', function(e)
{
    let html = '<tr> <th>Titulo</th> <th>Nota</th> <th>Categoria</th> </tr>'
    e.preventDefault();
    connection.query(sql,
        function(err, rows, fields)
        {
            if (err) throw err;
            for (let row of rows)
            {
                html += '<tr>'
                html += `<td>${row.title}</td>`
                html += `<td>${row.note}</td>`
                html += `<td>${row.categoria}</td>`
                html += '</tr>'
            }
            table.innerHTML = html
        })
})