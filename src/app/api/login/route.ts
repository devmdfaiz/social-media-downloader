import { evarConts } from "@/lib/constants/evarConts";
import { format } from "date-fns";
import * as jose from "jose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Your secret key (for HMAC) or public/private key pair (for RSA/ECDSA)
    const secret = new TextEncoder().encode(evarConts.jwtSec);

    // Check if email matches
    if (email !== evarConts.loginEmail) {
      return NextResponse.json(
        {
          error: "InvalidEmailError",
          message:
            "The provided email does not match our records. Please check and try again.",
        },
        { status: 401 }
      );
    }

    // Check if password matches
    if (password !== evarConts.loginPassword) {
      return NextResponse.json(
        {
          error: "InvalidPasswordError",
          message: "The password you entered is incorrect. Please try again.",
        },
        { status: 401 }
      );
    }

    // Payload for JWT
    const payload = {
      email: evarConts.loginEmail,
      createdAt: format(new Date(), "dd-MMMM-yyyy"),
    };

    // Create a JWT
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" }) // Choose the algorithm
      .setIssuedAt()
      .setExpirationTime("1h") // Token validity
      .sign(secret);

    const response = NextResponse.json(
      {
        error: null,
        message: "Login successful. Token generated.",
      },
      { status: 200 }
    );

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return response;
  } catch (error: any) {
    console.error("Error in login: ", error);
    return NextResponse.json(
      {
        error: "ServerError",
        message:
          "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
