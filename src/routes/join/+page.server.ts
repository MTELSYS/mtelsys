import { WEBFORM_ACCESS_KEY } from "$env/static/private";
import { fail } from '@sveltejs/kit'

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    formData.append("access_key", WEBFORM_ACCESS_KEY)
    const username = formData.get("username")
    const email = formData.get("email")

    if (!username || !email) {
      return fail(400, { username, email, missing: true})
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