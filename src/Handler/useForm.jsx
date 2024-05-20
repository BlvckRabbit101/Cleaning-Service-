import {useState} from 'react'

function useForm() {
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      // Validate email
      if (!formData.email) {
        newErrors.email = "Email is required";
        isValid = false;
      }
  
      // Validate password
      if (!formData.password) {
        newErrors.password = "Password is required";
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Form is valid, you can submit or process the data here
        console.log("Form data:", formData);
        setSubmitted(true); // Set a submitted flag
      } else {
        // Form is not valid, display error messages
      }
    };
  
    const isFormValid = Object.keys(errors).length === 0;
  
    return {
        handleChange,
        values,
        error
    }

}



export default useForm
