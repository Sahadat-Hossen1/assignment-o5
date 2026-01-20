const AddUser=async(newUser)=>{
    try{
        const res=await fetch(`http://localhost:3003/users`,{
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