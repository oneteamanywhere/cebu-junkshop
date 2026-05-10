"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";

export const ContactFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
      consent: false,
    },
    mode: "onBlur",
    resolver: yupResolver(contactSchema)
  })

  const saveContactInformation = async (data: any) => {
    try {
      const res = await fetch("/api/contact/saveContactInformation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}))
        throw new Error(errorBody.error || "Failed to save contact information.")
      }

      alert("Contact information saved successfully!")

      return true
    } catch (err: any) {
      console.error("Failed to save contact information:", err)
    }
  }

  const sendEmailConfirmation = async (data: any) => {
    try {
      const res = await fetch("/api/contact/sendEmailConfirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}))
        throw new Error(errorBody.error || "Failed to send email confirmation")
      }

      alert("Email confirmation sent successfully!")
    } catch (err: any) {
      console.error("Failed to send email confirmation:", err)
    }
  }

  const submit = async (data: any) => {
    try {
      const saved = await saveContactInformation(data)
      if (saved) {
        await sendEmailConfirmation(data)
      }
    } catch(err: any) {
      alert(err?.message || "Something went wrong.")
    }
  }

  return (
    <form
			className="flex flex-col flex-wrap gap-3 px-4"
      onSubmit={handleSubmit(submit)}
		>
      <h2 className="text-2xl md:text-3xl font-semibold w-[90%] text-center">We'd love to hear from you!</h2>

			<div className="flex flex-col gap-2 w-full">
				<label>FullName</label>
				<div className="w-full flex flex-col gap-1">
					<input
            {...register(
              "fullName",
            )}
            placeholder="Enter your full name"
						className="w-full h-[40px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0 indent-2"
					/>
          <div className="text-xs text-red-500">{errors.fullName?.message}</div>
				</div>
			</div>

      <div className="w-full flex items-center gap-3">
        <div className="flex flex-col gap-2 w-1/2">
          <label>Email</label>
          <div className="w-full flex flex-col gap-1">
            <input
              {...register(
                "email",
              )}
              placeholder="Enter your active email address"
              className="w-full h-[40px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0 indent-2"
            />
            <div className="text-xs text-red-500">{errors.email?.message}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Phone Number</label>
          <div className="w-full flex flex-col gap-1">
            <input
              {...register("phoneNumber")}
              placeholder="Enter your active phone number"
              className="w-full h-[40px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0 indent-2"
            />
            <div className="text-xs text-red-500">{errors.phoneNumber?.message}</div>
          </div>
        </div>
      </div>

			<div className="flex flex-col gap-2">
				<label>Message</label>
        <div className="w-full flex flex-col gap-1">
          <textarea
            {...register("message")}
            placeholder="Enter your message"
            rows={6}
            className="w-full border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0 indent-2"
          />
          <div className="text-xs text-red-500">{errors.message?.message}</div>
        </div>
			</div>

			<div className="flex items-center gap-2">
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <input {...register("consent")} type="checkbox" />
            <label>I agree with terms and conditions</label>
          </div>
          <div className="text-red-500">{errors.consent?.message}</div>
        </div>
			</div>

			<div className="w-full flex justify-end">
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg"
				>
          {isSubmitting ? (
            <div className="flex items-center gap-3">
              <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
              <span>Processing...</span>
            </div>
          ): "Submit"}
				</button>
			</div>
		</form>
  )
}