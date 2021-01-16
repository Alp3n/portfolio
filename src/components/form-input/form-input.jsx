import React from "react"
import formInputStyles from "./form-input.module.scss"

export default function FormInput({ type, name, label, element, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className={formInputStyles.inputWrapper}>
        <p className={formInputStyles.label}>{label}</p>

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
            id={name}
            className={formInputStyles.input}
            placeholder={placeholder}
          />
        )}
      </label>
    </div>
  )
}
