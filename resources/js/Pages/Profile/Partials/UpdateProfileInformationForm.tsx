import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import { Button, Form, Input, Message } from "@arco-design/web-react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        patch(route("profile.update"), {
            onSuccess: () =>
                Message.success("Profile was updated successfully."),
            onError: () => Message.error("Error was occurred while updating."),
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <Form
                onSubmit={submit}
                autoComplete="off"
                layout="vertical"
                className="mt-6"
            >
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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

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
