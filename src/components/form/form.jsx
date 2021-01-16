import React from "react"
import formStyles from "./form.module.scss"

import FormInput from "../form-input/form-input"

const formStructure = [
  {
    type: "text",
    name: "fullName",
    label: "Full name",
    placeholder: "Enter your name",
  },
  {
    type: "email",
    name: "email",
    label: "Your email",
    placeholder: "Enter your email",
  },
  {
    type: "text",
    name: "message",
    label: "Message",
    element: "textarea",
    placeholder: "Leave me a message",
  },
]

export default function Form() {
  return (
    <div className={formStyles.formWrapper} id="contact">
      <form
        className={formStyles.form}
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <p className={formStyles.formTitle}>Contact me</p>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        {formStructure.map(input => (
          <FormInput
            key={input.name}
            type={input.type}
            name={input.name}
            label={input.label}
            element={input.element}
            placeholder={input.placeholder}
          />
        ))}
        <button type="submit" className={formStyles.submitButton}>
          Send
        </button>
      </form>
    </div>
  )
}
