//  import queryString from 'querystring'
//  import jwtDecode from "jwt-decode";

//  function getAccessToken(code: string) {
//  const encodedCredential = Buffer.from(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`).toString('base64');
//  return fetch(`https://sso.tecky.io/auth/realms/tecky/protocol/openid-connect/token`, {
        //  method: "POST",
         //  headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + encodedCredential},
        //  body: queryString.stringify({
            //  grant_type: "authorization_code",
            //  code: code,
            //  redirect_uri: `${import.meta.env.VITE_CLIENT_URL}/endpoints/callback`
        //  })
    //  })
    //  .then((res) => {
       //  return res.json()
     //  })
    //  .catch((err) => {
       //  console.log('check err', err)
    //  })
//  }

export async function get(req) {
  const code = req.query.get('code')
  //  const oAuthRes = await getAccessToken(code)
  
  //  req.locals.accessToken = oAuthRes.access_token
  //  req.locals.user = jwtDecode(oAuthRes.access_token)

  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
}
