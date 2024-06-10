import type { LayoutServerLoad } from './$types';
import type { Octokit } from '@octokit/core';

export const load: LayoutServerLoad = async ({ locals }) => {
  const octokit = locals as Octokit

  // get public organisation repos and members
  const [repoReq, memberReq] = await Promise.all([
    octokit.request('GET /orgs/MTELSYS/repos'),
    octokit.request('GET /orgs/MTELSYS/members'),
  ])

  const members = memberReq.status === 200 ? memberReq.data : []

  // TODO: replace this with filtering for repo tags
  // exclude non-tool repos
  let repos: any = [];
  const excludedRepos = ['mtelsys', '.github']
  if (repoReq.status === 200) {
    repos = repoReq.data.filter((repo: { name: string; }) => !excludedRepos.includes(repo.name))
  }
  
  // get contributors for each repo
  const getContributors = (repoName: any) => new Promise(async (res) => {
    const contributors = await octokit.request(`GET /repos/MTELSYS/${repoName}/contributors`)
    res({
      repo: repoName, 
      contributors: contributors.data
    })
  })

  // get contributors for each repo and add to repo object
  await Promise.all(repos.map((repo: any) => getContributors(repo.name)))
    .then((res: any) => {
      repos = repos.map((repo: any) => {
        const { contributors } = res.find((res: any) => res.repo === repo.name)
        return {contributors, ...repo}
      })
    })
    .catch((err) => console.error(err))

  return {
    repos,
    members,
  }
}
