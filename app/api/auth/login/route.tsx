import { fakeSendOTPApi } from "@/mocks/api/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();
    const response = await fakeSendOTPApi({phoneNumber});
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
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        { status: 500 }
      );
    }
  }
}
