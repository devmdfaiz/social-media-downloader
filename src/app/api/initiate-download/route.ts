import { evarConts } from "@/lib/constants/evarConts";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
      params: {
        url,
      },
      headers: {
        "x-rapidapi-key": evarConts.rapidKey,
        "x-rapidapi-host": evarConts.rapidHost,
      },
    };

    const response = await axios.request(options);

    return NextResponse.json(
      { error: null, data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in fetching server data: ", error);

    return NextResponse.json(
      {
        error: error.message || "An unknown error occurred",
        response: null,
      },
      { status: error.response?.status || 500 }
    );
  }
}
