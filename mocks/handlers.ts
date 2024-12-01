import { http } from 'msw'
 
export const handlers = [

    http.post('/web-user-auth/sendOTP', async ({ request }) => {
        const requestBody = await request.json()

            return Response.json({
             
                "status": true,
                "message": "success",
                 "phoneNumber" : requestBody?.toString()
            })
 
         
      })
    
]