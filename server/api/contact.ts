interface contact_data {
    name: string;
    email_id: string;
    user_comment: string;
  }
  
  const api_url = "https://fnwklfrkwfhjpkgmnlcw.supabase.co/rest/v1/contact";
  export default defineEventHandler(async (event) => {
    const body = await useBody<contact_data>(event);
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