import { Navbar } from "../components/Navbar";
import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function about() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Navbar />

      <form className="mt-36" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Kill"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Bill"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <label htmlFor="isDeveloper">Are you a developer?</label>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                className="check-box"
                color="secondary"
                {...register("Developer", { required: true })}
                value="Yes"
              />
            }
            label="YES"
          />
          <FormControlLabel
            defaultChecked
            control={
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                className="check-box1"
                color="secondary"
                {...register("Developer", { required: true })}
                value="No"
              />
            }
            label="NO"
          />
        </FormGroup>

        <input type="submit" className="cursor-pointer" />
      </form>
    </>
  );
}
