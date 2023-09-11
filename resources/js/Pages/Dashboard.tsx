import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayoutNew from "@/Layouts/AuthenticatedLayoutNew";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayoutNew
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="mx-auto">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </AuthenticatedLayoutNew>
    );
}
