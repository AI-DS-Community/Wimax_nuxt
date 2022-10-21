interface join_data {
  name: string;
  phone: string;
  skills_known: string;
  wanted_skills: string;
  email_id: string;
  intrested: string;
  department: string;
  year:string;
  institution:string;

}

const api_url = "https://fnwklfrkwfhjpkgmnlcw.supabase.co/rest/v1/information";

export default defineEventHandler(async (event) => {
  const body = await useBody<join_data>(event);
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


