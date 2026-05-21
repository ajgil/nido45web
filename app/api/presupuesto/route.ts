const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz51KZGizoOxCrKadkd47t_zsuCwTwFTu_s_o08R37BtnL7klKXn3-pwO2eH2txRFs/exec"

export async function POST(request: Request) {
  const fd = await request.formData()
  const params = new URLSearchParams()
  fd.forEach((value, key) => params.append(key, value.toString()))

  try {
    const googleResp = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })

    const text = await googleResp.text()
    console.log("Google Apps Script status:", googleResp.status, "body:", text.slice(0, 500))

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Proxy error:", error)
    return Response.json({ ok: false, error: String(error) }, { status: 502 })
  }
}
