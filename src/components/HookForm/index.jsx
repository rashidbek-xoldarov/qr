import { useForm } from "react-hook-form";
import "./index.scss";

const HookForm = () => {
  const data = async () =>
    await fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((data) => {
        return {
          email: data?.data?.email,
          first_name: data.data.first_name,
        };
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setError,
  } = useForm({
    defaultValues: {
      username: "test",
      region: "andijon",
    },
  });

  const formSubmit = (value) => {
    // reset();
    console.log("getValues => ", getValues());
  };

  console.log("error => ", errors);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-start">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        className={`border ${errors.username ? "invalid-input" : ""}`}
        type="text"
        {...register("username", {
          required: true,
          onChange: (evt) => {
            if (evt.target.value.includes("aa")) {
              setError("username", { message: "hatoooo" });
            }
            // console.log("evt => ", evt.target.value);
          },
        })}
      />
      <label htmlFor="lastname">Lastname</label>
      <input id="lastname" className="border" type="text" {...register("lastname", { required: true })} />
      <select {...register("region", { required: true })} defaultValue={"fargona"} className="border">
        <option value="" hidden>
          Please select region
        </option>
        <option value="andijon">andijon</option>
        <option value="namangan">namangan</option>
        <option value="fargona">fargona</option>
      </select>
      <button type="submit">send</button>
    </form>
  );
};

export default HookForm;
