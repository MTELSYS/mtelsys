import type { LayoutServerLoad } from './$types';
import type { Octokit } from '@octokit/core';

export const load: LayoutServerLoad = async ({ locals }) => {
  const octokit = locals as Octokit

  const [repoReq, memberReq] = await Promise.all([
    octokit.request('GET /orgs/MTELSYS/repos'),
    octokit.request('GET /orgs/MTELSYS/members'),
  ])

  const repos = repoReq.status === 200 ? repoReq.data : []
  const members = memberReq.status === 200 ? memberReq.data : []

  return {
    repos,
    members,
  }
}