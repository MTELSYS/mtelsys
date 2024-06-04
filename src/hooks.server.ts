import type { Handle } from "@sveltejs/kit";
import { appOctokit } from "./octokit";


export const handle: Handle = async ({ event, resolve }) => {
  event.locals = appOctokit;

  const response = await resolve(event);
	return response;
};