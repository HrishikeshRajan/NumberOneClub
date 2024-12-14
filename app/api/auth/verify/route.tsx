import { fakeVerifyOTPApi } from "@/mocks/api/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, otp } = await request.json();
    const response = await fakeVerifyOTPApi({phoneNumber, otp});;
    if ((response && !response.status) || !response) {
      return NextResponse.json(
        { error: "Failed to send OTP" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log('otp failed', error)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 }
      );
    }
  }
}
