const connection= require('../config/db')

 const getStudentData= async(req,res)=>{
    await  connection.query('select * from students', function(error,results){
        console.log(results);
        res.json(results);
    })
}
 const getStudentname= async(req,res)=>{
    await  connection.query('select name from students', function(error,results){
        console.log(results);
        res.json(results);
    })
}
 const addStud= async(req,res)=>{
    //  console.log(req.body)
    const {id, name, courses}=req.body;
    if(!id||!name ||!courses){
        // throw error  'Data is required
        res.json({'warning':"Data is required"})
    }
  const query ='INSERT INTO students (id,name,courses) VALUES(?,?,?)';
  const values= [id,name,courses] 
  connection.query(query,values,(err,result)=>{
    if(err){
        // console.log('Error inserting data into database:', err.message);
        return res.status(500).json({error:'Error inserting data into the database'});
    }
    console.log('Data inserted into the databases:',result);

    res.status(200).json({message:'Data inserted succesfully!',data:req.body});
  });
}
 const deletedata= async(req,res)=>{
    const stuid=req.params.id;
    const query='DELETE FROM students WHERE ID=?';
    connection.query(query,stuid,(err,resi)=>{
        if(err){
            // console.log('Error inserting data into database:', err.message);
            return res.status(500).json({error:'Error deleting data into the database'});
        }
        console.log('Data inserted into the databases:',resi);

    res.status(200).json({message:'Data deleted succesfully!'});
    })

 }

 module.exports = {
    getStudentData,
    getStudentname,
    addStud,
    deletedata,
  };