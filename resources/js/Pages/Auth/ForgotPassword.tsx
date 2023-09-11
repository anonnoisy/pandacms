import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Button, Form, Input } from "@arco-design/web-react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

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

                <div className="flex items-center justify-end">
                    <Button
                        className="ml-4"
                        type="primary"
                        htmlType="submit"
                        loading={processing}
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
