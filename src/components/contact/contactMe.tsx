import React, { useState } from "react";
import Input from "../common/input";
import TextArea from "../common/TextArea";
import Button from "../buttons/button";
import { useSubmitContactFormMutation } from "@/services/api";

const ContactMe = () => {
  const [formData, setFormData] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
  }>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleSetValue = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [submitContactForm, { isLoading, isSuccess, isError, error }] =
    useSubmitContactFormMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
      await submitContactForm(formData).unwrap(); // Sends the form data to the backend
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Failed to submit the form:", err);
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[440px] sm:max-w-screen-sm my-32 mx-auto  px-7 flex flex-col items-center gap-4"
    >
      <h2 className="text-3xl text-primary">Contact Me</h2>
      <p className="text-center w-full sm:w-3/4 ">
        I'm always looking for a great opportunity to work with you. Please fill
        out the form below and I'll get back to you as soon as possible.
      </p>
      <form className="w-full m-auto flex flex-col gap-4">
        <div className="sm:grid sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            field="first_name"
            setValue={handleSetValue}
            value={formData.first_name}
          />
          <Input
            label="Last Name"
            type="text"
            field="last_name"
            setValue={handleSetValue}
            value={formData.last_name}
          />
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="text"
            field="email"
            setValue={handleSetValue}
            value={formData.email}
          />
          <Input
            label="Phone Number"
            type="text"
            field="phone_number"
            setValue={handleSetValue}
            value={formData.phone_number}
          />
        </div>
        <TextArea
          label="Message"
          field="message"
          setValue={handleSetValue}
          value={formData.message}
          rows={5}
        />
        <Button
          isSubmit={true}
          label="Submit"
          type="outlined"
          className="h-10 text-sm w-28 rounded-md m-auto "
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default ContactMe;
