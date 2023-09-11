import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Checkbox, Form, Input } from "@arco-design/web-react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <Form onSubmit={submit} autoComplete="off" layout="vertical">
                <Form.Item
                    label="Email"
                    field="email"
                    validateStatus={errors.email ? "error" : undefined}
                    help={errors.email}
                >
                    <Input
                        required
                        allowClear
                        type="email"
                        defaultValue={data.email}
                        onChange={(v) => setData("email", v)}
                        placeholder="Please enter your email..."
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    field="password"
                    validateStatus={errors.password ? "error" : undefined}
                    help={errors.password}
                >
                    <Input.Password
                        required
                        allowClear
                        type="password"
                        defaultValue={data.password}
                        onChange={(v) => setData("password", v)}
                        placeholder="Please enter your password..."
                    />
                </Form.Item>

                <Form.Item className="mt-2">
                    <Checkbox
                        checked={data.remember}
                        onChange={(checked) => setData("remember", checked)}
                    >
                        Remember Me
                    </Checkbox>
                </Form.Item>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button
                        className="ml-4"
                        htmlType="submit"
                        type="primary"
                        loading={processing}
                    >
                        Log in
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
