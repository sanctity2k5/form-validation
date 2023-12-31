  'use client'

  import React from "react";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { formSchema } from "../validations/formSchema";
  
  export default function Form() {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: yupResolver(formSchema),
    });
  
    const onSubmit = async (data) => {
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log("Form data submitted successfully!");
          // You can reset the form or perform any other actions here
        } else {
          console.error("Failed to submit form data.");
        }
      } catch (error) {
        console.error("An error occurred while submitting form data:", error);
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-md mx-auto mt-10"
      >
        <div className="flex flex-wrap">
          <h1>Looking out for Seamless Deployments Version-Four</h1>
          <label className="w-full">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
  
        <div className="flex flex-wrap">
          <label className="w-full">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
  
        <div className="flex flex-wrap">
          <label className="w-full">Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("phonenumber")}
          />
          {errors.phonenumber && (
            <p className="text-red-500">{errors.phonenumber.message}</p>
          )}
        </div>
  
        <div className="flex flex-wrap">
          <label className="w-full">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
  
        <div className="flex flex-wrap">
          <button
            className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    );
  }
  