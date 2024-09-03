"use client"
import React from "react"
import { useFormState, useFormStatus } from "react-dom"
import { submitFormAction } from "./actions"

function Submit() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#202020] p-2 rounded text-white"
    >
      {pending ? (
        <svg
          className="animate-spin h-5 w-5 mx-auto text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        "Login"
      )}
    </button>
  )
}
function loginPage() {
  const [state, formAction] = useFormState(submitFormAction, {
    message: "",
    error: undefined,
    fieldValue: {
      userName: "",
      password: "",
    },
  })
  return (
    <section className="min-h-screen grid place-items-center">
      <form
        action={formAction}
        className="bg-white rounded p-2 w-1/2 lg:w-1/3 grid auto-rows-max gap-2"
      >
        <div>
          <label htmlFor="userName" className="text-stone-700">
            Username
          </label>
          <input
            type="text"
            name="userName"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-stone-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <Submit />
      </form>
    </section>
  )
}

export default loginPage
