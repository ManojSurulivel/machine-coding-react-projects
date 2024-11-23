import React, { useState } from "react";
import "./FormConfig.css"


// Configuration object
const FormConfigData = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  {
    label: "Age",
    name: "age",
    type: "number",
    placeholder: "Enter your age",
    validation: {
      required: true,
      min: 18,
      max: 100,
    },
  },
  {
    label: "Gender",
    name: "gender",
    type: "select",
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Subscribe to Newsletter",
    name: "newsletter",
    type: "checkbox",
  },
];

const FormConfig = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const { name, value, checked, type } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: fieldValue });

    // Reset error for the current field
    if (errors[name]) {
      validateField(field, fieldValue);
    }
  };

  const validateField = (field, value) => {
    const { validation, name } = field;
    let error = "";

    if (validation?.required && !value) {
      error = `${field.label} is required.`;
    } else if (validation?.minLength && value.length < validation.minLength) {
      error = `${field.label} must be at least ${validation.minLength} characters long.`;
    } else if (validation?.pattern && !validation.pattern.test(value)) {
      error = `${field.label} is invalid.`;
    } else if (validation?.min && value < validation.min) {
      error = `${field.label} must be at least ${validation.min}.`;
    } else if (validation?.max && value > validation.max) {
      error = `${field.label} must be less than ${validation.max}.`;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return !error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    FormConfigData.forEach((field) => {
      const value = formData[field.name];
      const isFieldValid = validateField(field, value);

      if (!isFieldValid) {
        isValid = false;
        newErrors[field.name] = errors[field.name];
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div className="app">
      <h1>Config-Driven Form</h1>
      <form onSubmit={handleSubmit}>
        {FormConfigData.map((field) => (
          <div key={field.name} className="form-group">
            <label>{field.label}</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field)}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field)}
              />
            )}
            {errors[field.name] && (
              <small className="error">{errors[field.name]}</small>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormConfig;
