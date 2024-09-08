"use client"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"
import { submitFormAction } from "./actions"
import SubmitButton from "@/Utility/Ui/SubmitButton"
import { useRouter } from "next/navigation"

function loginPage() {
  const navigate = useRouter()
  const [state, formAction] = useFormState(submitFormAction, {
    message: "",
    error: undefined,
    fieldValue: {
      userName: "",
      password: "",
    },
  })

  useEffect(() => {
    if (state?.message === "Success") {
      navigate.push("/dashboard")
    }
  }, [state?.message])
  return (
    <section className="min-h-screen grid place-items-center bg-slate-50">
      <form
        action={formAction}
        className="bg-white rounded p-2 w-1/2 lg:w-[400px] grid auto-rows-max gap-2"
      >
        <div>
          <h1 className="text-[2rem] text-center font-semibold text-stone-600 capitalize pb-2">
            login
          </h1>

          {state?.message && (
            <small
              className={`border ${
                state?.message === "Success"
                  ? "border-green-400 p-2 text-green-500 bg-green-100"
                  : "border-red-400 p-2 text-red-500 bg-red-100"
              } block text-center`}
            >
              {state?.message}
            </small>
          )}
          <label htmlFor="userName" className="text-stone-700 py-2 block">
            Username
          </label>
          <input
            type="text"
            name="userName"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-stone-700 pb-2 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <SubmitButton />
      </form>
    </section>
  )
}

export default loginPage
