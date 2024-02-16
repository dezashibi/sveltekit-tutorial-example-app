import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = ({ error, event }) => {
    console.log("HandleClientError Hook: error", error);
    console.log("HandleClientError Hook: event", event);

    // we can send these to sentry or any error logging service.

    return {
        message: 'An unexpected error happened on our side, please be paitient we are working on it, thank you',
    }
}