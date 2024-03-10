import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SparklesIcon, WandSparklesIcon } from "lucide-react";

interface AiPromptProps {}
const formSchema = z.object({
  prompt: z.string().min(2),
});

const AiPrompt: FC<AiPromptProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="  mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 ">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="prompt .... "
                    {...field}
                    className=" w-full h-12 ring-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex  justify-between md:mx-5 flex-col-reverse md:flex-row gap-8 ">
            <Button
              variant={"outline"}
              size={"lg"}
              type="submit"
              className=" ring-1  border-x-primary  border-t-blue-400 border-b-blue-300  "
            >
              Surprise Me <WandSparklesIcon className=" ml-3 w-5 h-5 " />
            </Button>
            <Button variant={"primaryGradient"} size={"lg"} type="submit">
              Generate <SparklesIcon className=" ml-3 w-5 h-5 " />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AiPrompt;
