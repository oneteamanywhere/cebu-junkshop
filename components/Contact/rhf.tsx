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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
      consent: false,
    },
    mode: "onBlur",
    resolver: yupResolver(contactSchema)
  })

  const sendContactForm = async (data: any) => {
    try {
      const res = await fetch("/api/contact/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}))
        throw new Error(errorBody.error || "Failed to send")
      }

      alert("Message sent successfully!")
    } catch(err: any) {
      alert(err?.message || "Something went wrong.")
    }
  }

  return (
    <form
			className="flex flex-wrap gap-3"
      onSubmit={handleSubmit(sendContactForm)}
		>
			<div className="flex items-center gap-2 w-1/2">
				<label>First Name</label>
				<div className="w-full flex flex-col gap-1">
					<input
            {...register(
              "firstName",
            )}
            placeholder="Enter first name"
						className="w-full h-[30px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0"
					/>
          <div className="text-xs text-red-500">{errors.firstName?.message}</div>
				</div>

			</div>

			<div className="flex items-center gap-2 w-1/2">
				<label>Last Name</label>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("lastName")}
            placeholder="Enter last name"
            className="w-full h-[30px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0"
          />
          <div className="text-xs text-red-500">{errors.lastName?.message}</div>
        </div>
			</div>

			<div className="flex items-center gap-2 w-1/2">
				<label>Email</label>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register(
              "email",
            )}
            placeholder="Enter your active email address"
            className="w-full h-[30px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0"
          />
          <div className="text-xs text-red-500">{errors.email?.message}</div>
        </div>
			</div>

			<div className="flex items-center gap-2 w-1/2">
				<label>Phone Number</label>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("phoneNumber")}
            placeholder="Enter your active phone number"
            className="w-full h-[30px] border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0"
          />
          <div className="text-xs text-red-500">{errors.phoneNumber?.message}</div>
        </div>
			</div>

			<div className="flex items-center gap-2 w-1/2">
				<label>Message</label>
        <div className="w-full flex flex-col gap-1">
          <textarea
            {...register("message")}
            placeholder="Enter your message"
            rows={6}
            className="w-full border border-gray-300 rounded-md hover:border-blue-500 hover:outline-0"
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
					className="bg-blue-500 text-white px-4 py-2 rounded-md"
				>
          {isSubmitting ? <p>submitting... please wait...</p>: "Submit"}
				</button>
			</div>
		</form>
  )
}