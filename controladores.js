const controlador = {};

    controlador.listar = (req,res) =>{
        req.getConnection((err,conn)=>{
            conn.query("SELECT aprendices.id,aprendices.apellido1,aprendices.apellido2,aprendices.nombres,cursos.nombre_curso,aprendices.sexo,aprendices.fecha_nacimiento,aprendices.fk_curso from aprendices INNER JOIN cursos on aprendices.fk_curso = cursos.id_curso GROUP BY id", (err, aprendices)=>{
                res.json(aprendices);
            });
        });
    };

    controlador.guardar = (req,res) =>{
        
        const data = req.body;
        req.getConnection((err,conn) =>{
            conn.query("INSERT INTO aprendices SET ?", [data], (err,aprendices) =>{
                res.json(data);
            });
        })
    };

    controlador.eliminar = (req,res) =>{
        const {id} = req.params;
        req.getConnection((err, conn) =>{
            conn.query("DELETE FROM aprendices WHERE id = ?", [id], (err,rows) =>{
               

            })

        })

    }


    controlador.editar = (req,res) =>{
        const {id} = req.params;
       req.getConnection((err,conn) =>{
           conn.query("SELECT * FROM aprendices WHERE id = ?", [id], (err, aprendices) =>{
            res.json(aprendices);

           });
       });
    };

    controlador.actualizar = (req,res) =>{
        const {id} = req.params;
        const nuevoaprendiz = req.body;
        req.getConnection((err,conn) =>{
            conn.query("UPDATE aprendices SET ? WHERE id = ?", [nuevoaprendiz, id], (err,aprendices) =>{
             
            });
        })
    };

    module.exports = controlador; 
