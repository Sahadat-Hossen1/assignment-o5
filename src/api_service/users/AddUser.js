const AddUser=async(newUser)=>{
    try{
        const res=await fetch(`https://fake-json2.onrender.com/contacts`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        });
        if(!res.ok){
            throw new Error("Failed to update user");
        }
        return await res.json();
    }catch(error){
        console.error("Error updating user:",error);
        throw error;
    }
}
export default AddUser;