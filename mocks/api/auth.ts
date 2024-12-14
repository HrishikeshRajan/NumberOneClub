/* eslint-disable @typescript-eslint/no-explicit-any */
const OTP = '123456'
export async function fakeSendOTPApi({phoneNumber, fail = false}: {phoneNumber:number, fail?:boolean}) {
try {
  
  if(fail){
    return new Promise<{ status:boolean; message: string }>(
      (resolve, reject) => {
        setTimeout(() => {
          if (phoneNumber) {
            reject({
              status:false,
              message: 'OTP sent failed',
            });
          } else {
            reject(new Error('Phone number is required'));
          }
        }, 1000);
      }
    );
  }else{
    return new Promise<{ status:boolean; message: string }>(
      (resolve, reject) => {
        setTimeout(() => {
          if (phoneNumber) {
            resolve({
              status:true,
              message: 'OTP sent failed',
            });
          } else {
            reject(new Error('Phone number is required'));
          }
        }, 1000);
      }
    );
  }
} catch (error:unknown) {

if(error instanceof Error) {
  console.log(error.message)
  return  {
    status: false,
  message: `Failed to send OTP ${error?.message}`,
}
}
  
}
}

  export async function fakeVerifyOTPApi({
    phoneNumber,
    otp,
  }: {
    phoneNumber: string;
    otp: string;
  }) {

 try {

  console.log(otp, OTP)
  if(otp !== OTP){
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          reject({
            status: false,
            message: 'OTP verification failed',
          });
        
      }, 1000);
    });
  }else{
    return new Promise<any>((resolve) => {

      setTimeout(() => {

        if (phoneNumber) {
          resolve({
            status: true,
            message: 'Success',
            accessToken: '1212312321adsadsada',
            refreshToken: 'eeqweqwewqedwqedwdw',
          });
        }
      }, 1000);
    });
  }
 } catch (error: unknown) {
  if(error instanceof Error) {
    console.log(error.message)
    return  {
      status: false,
    message: `Failed to send OTP ${error?.message}`,
  }
  }
 }
  }
