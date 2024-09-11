export const clientError = (error: any) => {
    let errorMessage = "An unexpected error occurred. Please try again or contact support.";
  
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      (error as any).response?.data?.message
    ) {
      // Check if the error has a response with a data object containing the message
      errorMessage = (error as any).response.data.message;
    }
    return errorMessage;
  };
  
  export const serverError = (error: any) => {
    let errorMessage =
      "An unexpected error occurred. Please try again or contact support.";
  
    if (error instanceof Error) {
      // If it's a standard Error object, get the message
      errorMessage = error.message;
    } else if (typeof error === "string") {
      // If it's a string, use it directly
      errorMessage = error;
    } else if (error && typeof error === "object" && "message" in error) {
      // If it's an object with a message property, use it
      errorMessage = (error as { message: string }).message;
    }
  
    console.error("File upload failed:", error);
  
    return errorMessage;
  };
  