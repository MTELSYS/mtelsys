import { Octokit } from '@octokit/core';
import { createOAuthAppAuth } from '@octokit/auth-oauth-app';
import { OCTOKIT_CLIENT_ID, OCTOKIT_CLIENT_SECRET } from '$env/static/private';

export const appOctokit = new Octokit({
  authStrategy: createOAuthAppAuth,
  auth: {
    clientId: OCTOKIT_CLIENT_ID,
    clientSecret: OCTOKIT_CLIENT_SECRET,
  },
});