interface ideas_data {
    name: string;
    user_idea: string;
  }
  
  const api_url = "https://fnwklfrkwfhjpkgmnlcw.supabase.co/rest/v1/ideas";
  
  export default defineEventHandler(async (event) => {
    const body = await useBody<ideas_data>(event);
    try{
  
    
    const result = await $fetch( api_url,{
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + process.env.APIKEY,
        apikey: process.env.APIKEY,
      },
    });
    console.log(result)
    return 'ok'
  }
  
  catch(err){
      console.error(err)
  }
  });
  
  
  