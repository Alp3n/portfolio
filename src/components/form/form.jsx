import React from "react"
import formStyles from "./form.module.scss"

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

function FormInput({ type, name, label, element, placeholder }) {
  return (
    <div className={formStyles.inputWrapper} id="contact">
      <label className={formStyles.label}>{label}</label>
      {element === "textarea" ? (
        <textarea
          name={name}
          id={name}
          rows="5"
          className={formStyles.textarea}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={formStyles.input}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default function Form() {
  return (
    <div className={formStyles.formWrapper}>
      <form className={formStyles.form} action="#" method="post">
        <p className={formStyles.formTitle}>Contact me</p>
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
