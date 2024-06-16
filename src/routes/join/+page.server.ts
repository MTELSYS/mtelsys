import { WEBFORM_ACCESS_KEY } from "$env/static/private";
import { fail } from '@sveltejs/kit'
import type { Octokit } from '@octokit/core';

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData()
    formData.append("access_key", WEBFORM_ACCESS_KEY)
    const username = formData.get("username")
    const email = formData.get("email")

    if (!username || !email) {
      return fail(400, { username, email, missing: true })
    }

    // check if user exists
    const octokit = locals as Octokit
    const user = await octokit.request(`GET /users/${username}`)

    if (user.status !== 200) {
      return fail(400, { username, incorrect: true })
    }

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json
    })

    const result = await response.json();

    return { success: result.success }
  }
}
