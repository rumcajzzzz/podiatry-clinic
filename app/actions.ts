"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate form processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const phone = formData.get("phone")
  const email = formData.get("email")
  const service = formData.get("service")
  const message = formData.get("message")

  // Here you would typically send an email or save to database
  console.log("Contact form submission:", {
    name,
    phone,
    email,
    service,
    message,
  })

  return {
    success: true,
    message: `Dziękujemy ${name}! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.`,
  }
}
