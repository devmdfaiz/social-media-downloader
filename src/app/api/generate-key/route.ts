import { MY_ACTIVATION_SERVER } from "@/lib/constants/constants";
import { evarConts } from "@/lib/constants/evarConts";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const myServerUrl = "http://localhost:3000/";

interface AxiosErrorResponse {
  message?: string; // The message field is optional
}

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { email, phone } = await req.json();

    // Validate required fields
    if (!email || !phone) {
      return NextResponse.json(
        {
          status: false,
          message: "Email and phone are required.",
        },
        { status: 400 }
      );
    }

    // Extract the domain from the request
    const domain = req.nextUrl.host;

    // Generate customer and product IDs
    const customerId = `customer-${uuid()}`;
    const productId = `product-${uuid()}`;

    // Step 1: Post data to the key generation server
    const myServerResponse = await axios.post(
      `${MY_ACTIVATION_SERVER}api/generate-key`,
      {
        email,
        phone,
        customerId,
        productId,
        domain,
      }
    );

    const { data: axiosMyServerData, status: axiosMyServerStatus } =
      myServerResponse;

    // Handle server responses that are not successful
    if (axiosMyServerStatus !== 201) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to generate activation key.",
        },
        { status: axiosMyServerStatus }
      );
    }

    // Return a successful response
    return NextResponse.json({
      status: true,
      message: "Activation key created successfully.",
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      const axiosError = error as AxiosError<AxiosErrorResponse>;
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
