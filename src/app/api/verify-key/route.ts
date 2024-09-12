import { MY_ACTIVATION_SERVER } from "@/lib/constants/constants";
import { evarConts } from "@/lib/constants/evarConts";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse request body to get the activationKey
    const { activationKey } = await req.json();

    // Check if activationKey is not available in the request
    if (!activationKey) {
      return NextResponse.json(
        {
          status: false,
          message: "Activation key is required.",
        },
        { status: 400 } // Bad Request
      );
    }

    // Get domain from the request URL
    const domain = req.nextUrl.host;

    //Step 1: Send a POST request to verify the activation key
    const myServerResponse = await axios.post(
      `${MY_ACTIVATION_SERVER}api/verify-key`,
      {
        activationKey,
        domain,
      }
    );

    const { data: axiosMyServerData, status: axiosMyServerStatus } =
      myServerResponse;

    // Check if the response status is not 200 (indicating success)
    if (axiosMyServerStatus !== 200) {
      // Handle the error case for different statuses
      return NextResponse.json(
        {
          status: false,
          message: axiosMyServerData.message || "Failed to verify key.",
        },
        { status: axiosMyServerStatus }
      );
    }

    // Step 2: Store the activation key in Cloudflare KV
    const cloudflareKvResponse = await axios.put(
      `${evarConts.cloudflareKvUrl}/api/product-info`,
      {
        activationKey,
        data: axiosMyServerData.data,
      }
    );

    const { status: axiosCloudflareStatus, data: axiosCloudflareData } =
      cloudflareKvResponse;

    // Handle 204 response from Cloudflare, indicating success but no content
    if (axiosCloudflareStatus === 204) {
      return NextResponse.json(
        {
          status: true,
          message:
            axiosCloudflareData.message ||
            "Activation key stored successfully but with no content response.",
        },
        { status: 500 }
      );
    }

    // Handle Cloudflare KV error response other than 200
    if (axiosCloudflareStatus !== 200) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to store activation key in Cloudflare KV.",
        },
        { status: axiosCloudflareStatus }
      );
    }

    // Handle the successful response
    return NextResponse.json(
      {
        status: true,
        message: "Activation key verified successfully.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in verifying key: ", error);
    // Handle Axios errors
    if (axios.isAxiosError(error)) {
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
    }

    // Handle other types of errors
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
