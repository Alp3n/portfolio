import React from "react"
import formInputStyles from "./form-input.module.scss"

export default function FormInput({ type, name, label, element, placeholder }) {
  return (
    <div className={formInputStyles.inputWrapper} id="contact">
      <label className={formInputStyles.label}>{label}</label>
      {element === "textarea" ? (
        <textarea
          name={name}
          id={name}
          rows="5"
          className={formInputStyles.textarea}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={formInputStyles.input}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
