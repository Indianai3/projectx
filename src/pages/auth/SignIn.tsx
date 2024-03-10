import { signIn } from "@/app/features/auth/authSlice";
import { useAppDispatch } from "@/app/features/hooks";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "username must be at least of 4 characters",
    })
    .max(50),
  password: z
    .string()
    .min(6, {
      message: "password must be at least of 6 characters",
    })
    .max(50),
});
interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "DemoUser",
      password: "DemoUser@123", // demo values
    },
  });
  function onSubmitHandler(values: z.infer<typeof formSchema>) {
    dispatch(signIn(values));
    toast.success(" Sign In Successful ");
    navigate("/");
  }
  return (
    <div className=" w-full flex justify-center items-center mt-16 gap-y-6 rounded-lg py-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-8   bg-background  rounded-md p-8 md:w-[calc(50%)]  w-full text-card-foreground"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username"
                    {...field}
                    autoFocus
                    className=" h-12"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=" relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      autoComplete="false"
                      className=" h-12"
                    />
                    <button
                      type="button"
                      className="absolute  lg:top-1/2 transform -translate-y-1/2 right-2  top-1/3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon className="w-4 h-4" />
                      ) : (
                        <EyeOff className=" w-4 h-4 " />
                      )}
                    </button>
                  </>
                </FormControl>
                <FormDescription>
                  Password must be at least of 6 characters , one Symbol and a
                  number
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex flex-col gap-y-4  ">
            <Button type="submit" variant={"primaryGradient"} size={"lg"}>
              Sign In
            </Button>
            <div className=" w-full flex flex-row gap-x-2 mt-2 ">
              <Link to="/auth/sign-up" className=" text-sm">
                Don`t have an account please
                <span className=" underline space-x-2 text-blue-500">
                  {" "}
                  Sign Up
                </span>
              </Link>
              <Link
                to="/auth/sign-up"
                className=" text-sm ml-auto text-blue-500"
              >
                <span className=" underline space-x-2">Forgot Password</span>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
