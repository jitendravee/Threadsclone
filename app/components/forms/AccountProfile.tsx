"use client"
import { useForm } from 'react-hook-form';
import { Button } from '@/app/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/app/components/ui/form"
  import { Input } from "@/app/components/ui/input"
  


import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from "zod";

interface Props {
    user: {
        id: string;
        objectID: string;
        username: string;
        name: string;
        bio: string;
        image: string;

    };
    btnTitle: string;
}
const AccountProfile = ({user, btnTitle}:Props) => {

    const form = useForm({
resolver: zodResolver(UserValidation),
defaultValues: {
    profile_photo: '',
    name:'',
    bio:'',
    username: '',

}
    }) 
    function onSubmit(values: z.infer<typeof UserValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }    
    
    return(
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>


    )
}

export default AccountProfile;