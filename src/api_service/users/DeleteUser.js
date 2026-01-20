 const DeleteUser=async(userId)=>{
    try{
        const res=await fetch(`http://localhost:3003/users/${userId}`,{
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