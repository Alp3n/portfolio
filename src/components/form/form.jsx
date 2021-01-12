import React from "react"
import formStyles from "./form.module.scss"

const formStructure = [
  {
    type: "text",
    name: "fullName",
    label: "Full name",
  },
  {
    type: "text",
    name: "email",
    label: "Your email",
  },
  {
    type: "text",
    name: "message",
    label: "Message",
  },
]

function FormInput({ type, name, label, ...rest }) {
  return (
    <div>
      <label for={name}>{label}</label>
      <input type={type} name={name} />
    </div>
  )
}

export default function Form() {
  return (
    <form>
      {formStructure.map(input => (
        <FormInput
          key={input.name}
          type={input.type}
          name={input.name}
          label={input.label}
        />
      ))}
    </form>
  )
}
