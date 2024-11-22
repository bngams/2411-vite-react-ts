
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button, Spacer } from "@nextui-org/react"; // Import NextUI components
import { useNavigationCtx } from "../../../providers/NavigationProvider";

interface Credentials {
  email: string;
  pwd: string;
}

export default function LoginForm() {
  const { setIsLoggedIn } = useNavigationCtx();
  const { register, formState: { errors }, handleSubmit } = useForm<Credentials>();
  
  const onSubmit: SubmitHandler<Credentials> = (data) => {
    doLogin(data);
  };

  const doLogin = (credentials: Credentials) => {
    setIsLoggedIn(true);
    console.log("http request", credentials);
    localStorage.setItem("token", "12345");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm mx-auto p-4 bg-gray-50 rounded-lg shadow-md"
    >
      {/* Email Input */}
      <div className="mb-4">
        <Input
          type="email"
          label="Email"
          {...register("email", { required: "A valid email is required" })}
          className={`w-full ${errors.email ? "error" : "default"}`} 
          placeholder="Enter your email"
          data-status={errors.email ? "error" : "default"} // Highlight in case of error
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <Input
          type="password"
          label="Password"
          {...register("pwd", { required: "A password is required" })}
          className={`w-full ${errors.pwd ? "error" : "default"}`} 
          placeholder="Enter your password"
          data-status={errors.pwd ? "error" : "default"}
        />
        {errors.pwd && (
          <p className="text-red-500 text-sm mt-1">{errors.pwd.message}</p>
        )}
      </div>

      {/* Spacer for better alignment */}
      <Spacer y={1} />

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        color="primary"
        disabled={Object.keys(errors).length > 0} // Disable button if there are errors
      >
        Login
      </Button>
    </form>
  );
}
