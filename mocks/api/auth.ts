const OTP = '123456'
export async function fakeSendOTPApi(phoneNumber: string) {
    return new Promise<{ otp: string; message: string; phoneNumber: string }>(
      (resolve, reject) => {
        // Simulate a network delay
        setTimeout(() => {
          // Simulate success and return mock data
          if (phoneNumber) {
            resolve({
              otp:  OTP, // Simulated OTP
              message: 'OTP sent successfully!',
              phoneNumber, // Echo the input phone number
            });
          } else {
            // Simulate an error response
            reject(new Error('Phone number is required'));
          }
        }, 1000); // 1-second delay
      }
    );
  }

  export async function fakeVerifyOTPApi({
    phoneNumber,
    otp,
  }: {
    phoneNumber: string;
    otp: string;
  }) {
    return new Promise<unknown>((resolve, reject) => {
      setTimeout(() => {
        // Check if the OTP is valid
        if (!otp || otp !== OTP) {
          reject({
            status: false,
            message: 'Invalid OTP provided.',
          });
          return;
        }
  
        // Simulate success and return mock data
        if (phoneNumber) {
          resolve({
            status: true,
            message: 'Success',
            accessToken: '1212312321adsadsada',
            refreshToken: 'eeqweqwewqedwqedwdw',
          });
        } else {
          // Reject if the phone number is missing
          reject({
            status: false,
            message: 'Phone number is required.',
          });
        }
      }, 1000); // 1-second delay
    });
  }
