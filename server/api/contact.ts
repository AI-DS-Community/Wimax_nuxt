interface contact_data {
    name: string;
    email_id: string;
    user_comment: string;
  }
  
  const api_url = "https://fnwklfrkwfhjpkgmnlcw.supabase.co/rest/v1/contact";
  const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZud2tsZnJrd2ZoanBrZ21ubGN3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTU4NTkyOCwiZXhwIjoxOTc3MTYxOTI4fQ.Jxw3VMfxEPzKwjJUZExeNDmVuleutPQSjWOKbqfBmGk";
  
  export default defineEventHandler(async (event) => {
    const body = await useBody<contact_data>(event);
    try{
  
    
    const result = await $fetch( api_url,{
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + APIKEY,
        apikey: APIKEY,
      },
    });
    console.log(result)
    return 'ok'
  }
  
  catch(err){
      console.error(err)
  }
  });