import React, { useState } from "react";
import { useForm } from "react-hook-form";
import inquiry from "../asstes/pexels-iam-hogir-13781028.jpg";
import { toast } from "react-hot-toast";
const Inquiry = () => {
  //   const [registerError, setregisterError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = () => {
    toast.success("Complete your booking");
  };
  return (
    <div>
      <div className="mt-20">
        <div className="hero mx-auto">
          <div className="hero-content  flex-col lg:flex-row md:flex-row">
            <img
              src={inquiry}
              className="max-w-sm lg:block md:block hidden rounded-lg shadow-2xl"
            />
            <div className=" flex justify-center items-center">
              <div>
                <div className="text-center">
                  <h2 className="text-center text-[#CC8327] font-bold text-xl">
                    Downpour-taxi-inquiry
                  </h2>
                  <small className="text-[#CC8327]">
                    Please enter Your Information for Travel
                  </small>
                </div>

                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="mt-3 pt-4 pl-10 pr-10 "
                >
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text"> Pickup location</span>
                    </label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="location"
                      placeholder="type your Pickup location"
                      className="input w-[300px] h-[30px] input-bordered"
                      {...register("pickup", {
                        required: "Pickup location is requrired",
                      })}
                    />
                    {errors.pickup && (
                      <small className="text-red-600">
                        {errors.pickup?.message}
                      </small>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"> Drop-off location</span>
                    </label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="location"
                      placeholder="type your Drop-off location"
                      className="input w-[300px] h-[30px] input-bordered  "
                      {...register("dropoff", {
                        required: "Drop-off location is required",
                      })}
                    />
                    {errors.dropoff && (
                      <small className="text-red-600">
                        {errors.dropoff?.message}
                      </small>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Date & Time</span>
                    </label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="datetime-local"
                      placeholder="type your date & time"
                      className="input w-[300px] h-[30px] input-bordered"
                      {...register("datetime", {
                        required: "date & time  is required",
                      })}
                    />
                    {errors.datetime && (
                      <small className="text-red-600">
                        {errors.datetime?.message}
                      </small>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Write somthing</span>
                    </label>
                    <textarea
                      style={{ borderRadius: "0px" }}
                      type="text"
                      placeholder="type somthing"
                      className="textarea textarea-bordered h-24 w-[300px]   "
                      {...register("textarea", {
                        required: "write somthing please",
                      })}
                    />
                    {errors.textarea && (
                      <small className="text-red-600">
                        {errors.textarea?.message}
                      </small>
                    )}
                  </div>
                  <div>
                    <button
                      style={{ borderRadius: "0px", border: "none" }}
                      className="btn w-[300px] text-[#051D3D] mt-10 bg-[#CC8327]"
                    >
                      Press
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
