 const DeleteUser=async(userId)=>{
    try{
        const res=await fetch(`https://fake-json2.onrender.com/contacts/${userId}`,{
            method:"DELETE"
        });
        if(!res.ok){
            throw new Error("Failed to delete user");
        }
        return true;
    }catch(error){
        console.error("Error deleting user:",error);
        throw error;
    }
}
export default DeleteUser;