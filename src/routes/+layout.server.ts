import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  const [repoReq, memberReq] = await Promise.all([
    fetch('https://api.github.com/orgs/MTELSYS/repos'),
    fetch('https://api.github.com/orgs/MTELSYS/members'),
  ])

  const { repos } = repoReq.status === 200 ? await repoReq.json() : []
  const { members } = memberReq.status === 200 ? await memberReq.json() : []

  return {
    repos,
    members,
  }
}