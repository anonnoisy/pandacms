import { useRef, useState, FormEventHandler } from "react";
import DangerButton from "@/Components/DangerButton";
import { useForm } from "@inertiajs/react";
import { Button, Form, Input, Modal } from "@arco-design/web-react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Delete Account
            </DangerButton>

            <Modal
                visible={confirmingUserDeletion}
                onCancel={closeModal}
                footer={null}
            >
                <Form
                    onSubmit={deleteUser}
                    autoComplete="off"
                    layout="vertical"
                >
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6">
                        <Form.Item
                            label="Password"
                            validateStatus={
                                errors.password ? "error" : undefined
                            }
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
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button type="secondary" onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button
                            htmlType="submit"
                            type="primary"
                            status="danger"
                            className="ml-3"
                            loading={processing}
                        >
                            Delete Account
                        </Button>
                    </div>
                </Form>
            </Modal>
        </section>
    );
}
