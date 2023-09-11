import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card } from "@arco-design/web-react";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <Card className="w-full sm:max-w-md mt-6 px-2 py-2 overflow-hidden">
                {children}
            </Card>
        </div>
    );
}
