import { useReducer } from "react";

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    age: "",
    username: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    notifications: true,
    theme: "light",
  },
  errors: {},
  isSubmitting: false,
  isCompleted: false,
};

function validateStep(step, formData) {
  const errors = {};

  if (step === 1) {
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      errors.email = "Invalid email";
    }

    if (!formData.age || Number(formData.age) < 18) {
      errors.age = "Age must be 18 or older";
    }
  }

  if (step === 2) {
    if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return errors;
}

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { field, value } = action.data;

      return {
        ...state,
        formData: {
          ...state.formData,
          [field]: value,
        },
        errors: {
          ...state.errors,
          [field]: "",
        },
      };
    }

    case "SET_ERRORS": {
      return {
        ...state,
        errors: action.data,
      };
    }

    case "NEXT_STEP": {
      const errors = validateStep(state.currentStep, state.formData);

      if (Object.keys(errors).length > 0) {
        return {
          ...state,
          errors,
        };
      }

      return {
        ...state,
        currentStep: state.currentStep + 1,
        errors: {},
      };
    }

    case "PREV_STEP": {
      return {
        ...state,
        currentStep: state.currentStep - 1,
        errors: {},
      };
    }

    case "SUBMIT_FORM": {
      const errors = validateStep(state.currentStep, state.formData);

      if (Object.keys(errors).length > 0) {
        return {
          ...state,
          errors,
        };
      }

      localStorage.setItem("registrationForm", JSON.stringify(state.formData));

      return {
        ...state,
        isSubmitting: false,
        isCompleted: true,
        errors: {},
      };
    }

    case "RESET_FORM": {
      localStorage.removeItem("registrationForm");
      return initialState;
    }

    default:
      return state;
  }
}

function FormWizard() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function updateField(field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      data: {
        field,
        value,
      },
    });
  }

  if (state.isCompleted) {
    return (
      <div className="box">
        <h2>Registration Completed!</h2>

        <p>Name: {state.formData.name}</p>
        <p>Email: {state.formData.email}</p>
        <p>Username: {state.formData.username}</p>
        <p>Theme: {state.formData.theme}</p>

        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div className="box">
      <h2>Step {state.currentStep} of 3</h2>

      {state.currentStep === 1 && (
        <div className="form-step">
          <label>Name</label>
          <input
            value={state.formData.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          {state.errors.name && <p className="error">{state.errors.name}</p>}

          <label>Email</label>
          <input
            value={state.formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {state.errors.email && <p className="error">{state.errors.email}</p>}

          <label>Age</label>
          <input
            type="number"
            value={state.formData.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
          {state.errors.age && <p className="error">{state.errors.age}</p>}
        </div>
      )}

      {state.currentStep === 2 && (
        <div className="form-step">
          <label>Username</label>
          <input
            value={state.formData.username}
            onChange={(e) => updateField("username", e.target.value)}
          />
          {state.errors.username && (
            <p className="error">{state.errors.username}</p>
          )}

          <label>Password</label>
          <input
            type="password"
            value={state.formData.password}
            onChange={(e) => updateField("password", e.target.value)}
          />
          {state.errors.password && (
            <p className="error">{state.errors.password}</p>
          )}

          <label>Confirm Password</label>
          <input
            type="password"
            value={state.formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
          />
          {state.errors.confirmPassword && (
            <p className="error">{state.errors.confirmPassword}</p>
          )}
        </div>
      )}

      {state.currentStep === 3 && (
        <div className="form-step">
          <label>
            <input
              type="checkbox"
              checked={state.formData.newsletter}
              onChange={(e) => updateField("newsletter", e.target.checked)}
            />
            Subscribe to newsletter
          </label>

          <label>
            <input
              type="checkbox"
              checked={state.formData.notifications}
              onChange={(e) => updateField("notifications", e.target.checked)}
            />
            Enable notifications
          </label>

          <label>Theme</label>
          <select
            value={state.formData.theme}
            onChange={(e) => updateField("theme", e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      )}

      <div className="buttons">
        {state.currentStep > 1 && (
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Previous
          </button>
        )}

        {state.currentStep < 3 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        )}

        {state.currentStep === 3 && (
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        )}

        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
      </div>
    </div>
  );
}

export default FormWizard;
