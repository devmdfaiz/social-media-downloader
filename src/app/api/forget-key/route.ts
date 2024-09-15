import { MY_ACTIVATION_SERVER } from "@/lib/constants/constants";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const domain = req.nextUrl.host;

    // Send request to the activation server
    const res = await axios.post(`${MY_ACTIVATION_SERVER}api/forget-key`, {
      email,
      domain,
    });

    const { data, status } = res;

    // Handle non-200 status codes
    if (status !== 200) {
      return NextResponse.json(
        {
          error: data.error || "Failed to process your request.",
          message:
            data.message ||
            "An error occurred while activating the key. Please try again.",
        },
        { status }
      );
    }

    // Handle success response
    return NextResponse.json({ message: "Activation key sent successfully!" });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      const axiosError = error as AxiosError<{ message?: string }>;
      console.error("Axios error:", axiosError.message);

      // Return Axios error message to the front end
      return NextResponse.json(
        {
          status: false,
          message:
            axiosError.response?.data?.message || "An Axios error occurred.",
          error: axiosError.message,
        },
        { status: axiosError.response?.status || 500 }
      );
    } else {
      // Handle generic errors
      console.error("Unexpected error:", (error as Error).message);

      return NextResponse.json(
        {
          status: false,
          message: "An unexpected error occurred.",
          error: (error as Error).message,
        },
        { status: 500 }
      );
    }
  }
}
