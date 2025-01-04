const register=async(req,res)=>{
    try{
        res.send("Hello from register backend");
    }catch(err){
        console.log(err);
    }
}

export default register;