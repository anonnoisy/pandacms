import AuthenticatedLayoutNew from "@/Layouts/AuthenticatedLayoutNew";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Card } from "@arco-design/web-react";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayoutNew
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="mx-auto my-3 space-y-6">
                <Card>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </Card>

                <Card>
                    <UpdatePasswordForm className="max-w-xl" />
                </Card>

                <Card>
                    <DeleteUserForm className="max-w-xl" />
                </Card>
            </div>
        </AuthenticatedLayoutNew>
    );
}
