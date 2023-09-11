import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Form, Input } from "@arco-design/web-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Form onSubmit={submit} autoComplete="off" layout="vertical">
                <Form.Item
                    label="Name"
                    validateStatus={errors.name ? "error" : undefined}
                    help={errors.name}
                >
                    <Input
                        required
                        allowClear
                        type="name"
                        value={data.name}
                        onChange={(v) => setData("name", v)}
                        placeholder="Please enter your name..."
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    validateStatus={errors.email ? "error" : undefined}
                    help={errors.email}
                >
                    <Input
                        required
                        allowClear
                        type="email"
                        value={data.email}
                        onChange={(v) => setData("email", v)}
                        placeholder="Please enter your email..."
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    validateStatus={errors.password ? "error" : undefined}
                    help={errors.password}
                >
                    <Input.Password
                        required
                        allowClear
                        type="password"
                        value={data.password}
                        onChange={(v) => setData("password", v)}
                        placeholder="Please enter your password..."
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    validateStatus={
                        errors.password_confirmation ? "error" : undefined
                    }
                    help={errors.password_confirmation}
                >
                    <Input.Password
                        required
                        allowClear
                        type="password"
                        value={data.password_confirmation}
                        onChange={(v) => setData("password_confirmation", v)}
                        placeholder="Please enter your password confirmation..."
                    />
                </Form.Item>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <Button
                        className="ml-4"
                        type="primary"
                        htmlType="submit"
                        loading={processing}
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
