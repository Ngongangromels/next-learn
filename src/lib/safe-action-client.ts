import { createSafeActionClient } from "next-safe-action";

export class SafeError extends Error {
    constructor(error: string) {
        super(error)
    }
}

// Create the client with default options.
export const actionClient = createSafeActionClient({
    handleServerError: (error) => {
        if (error instanceof SafeError) {
            return error.message;
        }
       
    return "Somting went wrong"
    }
});
    

