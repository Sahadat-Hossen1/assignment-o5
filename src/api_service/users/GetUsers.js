 const GetUsers=async(url)=>{
    try{
        const res=await fetch(url);
        if(!res.ok){
            throw new Error("Failed to fetch users");
        }
        const data=await res.json();
        return await data;
    }catch(error){
        console.error("Error fetching users:",error);
        throw error;
    }
}
export default GetUsers;