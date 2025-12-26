import { useLoginForm } from "@/hooks/use-auth"
import { loginSchema, type loginType } from "@/validations/auth-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

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
import { Link } from "react-router-dom"
const Login = () => {

    const form = useForm<loginType>({
        resolver: zodResolver(loginSchema)
    })

    const mutation = useLoginForm()

    const onSubmit = async (data: loginType) => {
        console.log(data);
        mutation.mutate(data)
    }

    return (
        <div>
            <Card className="w-full sm:max-w-md mx-auto mt-20">
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>
                        Please register a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
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
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button type="submit" form="form-rhf-demo">
                            Submit
                        </Button>
                        <Link to={'/'}>Home</Link>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login