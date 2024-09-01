export const submitFormAction = async (previousState?: any, formData?: any) => {
  try {
    const userName = formData.get("userName")
    const password = formData.get("password")
    // Simulate API call or any async action
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      message: "Success",
      fieldValue: { userName, password },
      error: undefined,
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    throw new Error("Submission failed")
  }
}
