'use server'

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  console.log({
    name,
    email,
    subject,
    message,
  })

  return {
    success: true,
    message: 'Message sent successfully.',
  }
}
