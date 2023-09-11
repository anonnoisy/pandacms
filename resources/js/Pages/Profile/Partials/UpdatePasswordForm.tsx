import { useRef, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { Button, Form, Input, Message } from "@arco-design/web-react";

export default function UpdatePasswordForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>();
    const currentPasswordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                Message.success("Password was updated successfully.");
                reset();
            },
            onError: (errors) => {
                Message.error("Error was occurred while updating password.");

                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <Form
                onSubmit={updatePassword}
                autoComplete="off"
                layout="vertical"
                className="mt-6"
            >
                <Form.Item
                    label="Current Password"
                    validateStatus={
                        errors.current_password ? "error" : undefined
                    }
                    help={errors.current_password}
                >
                    <Input.Password
                        required
                        allowClear
                        type="password"
                        value={data.current_password}
                        onChange={(v) => setData("current_password", v)}
                        placeholder="Please enter your current password..."
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

                <div className="flex items-center gap-4">
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={processing}
                    >
                        Save
                    </Button>
                </div>
            </Form>
        </section>
    );
}
