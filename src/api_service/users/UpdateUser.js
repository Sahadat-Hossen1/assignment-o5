const updateUser=async(userId,userData)=>{
    try{
        const res=await fetch(`http://localhost:3003/users/${userId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
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
export default updateUser;