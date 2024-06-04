import type { LayoutServerLoad } from './$types';
import type { Octokit } from '@octokit/core';

export const load: LayoutServerLoad = async ({ locals }) => {
  const octokit = locals as Octokit

  const [repoReq, memberReq] = await Promise.all([
    octokit.request('GET /orgs/MTELSYS/repos'),
    octokit.request('GET /orgs/MTELSYS/members'),
  ])

  const members = memberReq.status === 200 ? memberReq.data : []

  let repos = [];
  const excludedRepos = ['mtelsys', '.github']
  if (repoReq.status === 200) {
    repos = repoReq.data.filter((repo: { name: string; }) => !excludedRepos.includes(repo.name))
  }

  return {
    repos,
    members,
  }
}