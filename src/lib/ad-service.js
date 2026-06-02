export async function retrieveAds(){
    try{
        const response = await fetch(`/api/ads`);
        if(!response.ok){
            throw new Error("Unable to retrieve ads");
        }
        const ads = await response.json()
        return ads;
    }
    catch(error){
        console.error(error);
    }
}