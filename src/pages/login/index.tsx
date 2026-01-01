import { useLoginForm } from "@/hooks/use-auth"
import { loginSchema, type loginType } from "@/validations/auth-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import hotelBG from "@/assets/hotel-hero.png"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner";


const Login = () => {

    const form = useForm<loginType>({
        resolver: zodResolver(loginSchema)
    })

    const mutation = useLoginForm();


    const onSubmit = async (data: loginType) => {
        mutation.mutate(data)
        if (mutation.isSuccess) {
            form.reset();
        }
    }

    return (
        <div className="flex justify-end items-center h-screen px-4 sm:px-12">
            <img src={hotelBG} alt="Background photo" className="aspect-video absolute -z-10 inset-0  h-screen w-screen" />
            <Card className="w-full sm:max-w-md bg-card-bg/95 border-primary-violet">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Please Login your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} id="login-form">
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            type="email"
                                            id="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="example@gmail.com"
                                            autoComplete="off"
                                            className="bg-input border-primary-violet"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            type="password"
                                            id="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your password"
                                            autoComplete="off"
                                            className="bg-input border-primary-violet"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                        </FieldGroup>

                    </form>
                </CardContent>
                <CardFooter >
                    <Button
                        form="login-form"
                        type="submit"
                        disabled={mutation.isPending}
                        className="bg-primary-violet w-full"
                    >
                        {mutation.isPending ? <><Spinner />  Loging...</> : "Login"}
                    </Button>
                </CardFooter>

            </Card>
        </div>
    )
}

export default Login