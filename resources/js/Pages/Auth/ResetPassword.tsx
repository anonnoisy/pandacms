import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, Form, Input } from "@arco-design/web-react";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

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

                <Form.Item
                    label="Confirm Password"
                    field="password_confirmation"
                    validateStatus={
                        errors.password_confirmation ? "error" : undefined
                    }
                    help={errors.password_confirmation}
                >
                    <Input.Password
                        required
                        allowClear
                        type="password"
                        defaultValue={data.password_confirmation}
                        onChange={(v) => setData("password_confirmation", v)}
                        placeholder="Please enter your password confirmation..."
                    />
                </Form.Item>

                <div className="flex items-center justify-end">
                    <Button
                        className="ml-4"
                        type="primary"
                        htmlType="submit"
                        loading={processing}
                    >
                        Reset Password
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
