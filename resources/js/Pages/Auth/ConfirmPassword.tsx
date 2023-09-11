import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, Form, Input } from "@arco-design/web-react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        post(route("password.confirm"));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <Form onSubmit={submit} autoComplete="off" layout="vertical">
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

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        type="primary"
                        htmlType="submit"
                        loading={processing}
                    >
                        Confirm
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
