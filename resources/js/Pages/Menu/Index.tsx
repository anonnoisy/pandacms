import AuthenticatedLayoutNew from "@/Layouts/AuthenticatedLayoutNew";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Button,
    Card,
    Form,
    Input,
    Select,
    Space,
} from "@arco-design/web-react";
import { useState } from "react";
import {
    IconDelete,
    IconEmpty,
    IconPlus,
    IconPlusCircle,
} from "@arco-design/web-react/icon";

interface Menu {
    label: string;
    slug?: string;
    link: string;
    link_type: string;
    primary?: boolean;
}

export default function Index({ auth }: PageProps) {
    const menus = useState();

    const linkTypes = ["Beijing", "Shanghai", "Guangzhou", "Disabled"];

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
                    <Form autoComplete="off" layout="vertical">
                        <Space>
                            <Form.Item label="Label">
                                <Input allowClear placeholder="Menu label" />
                            </Form.Item>
                            <Form.Item label="Slug">
                                <Input allowClear placeholder="Menu slug" />
                            </Form.Item>
                            <Form.Item label="Link">
                                <Input allowClear placeholder="Menu link" />
                            </Form.Item>
                            <Form.Item label="Link Type">
                                <Select
                                    placeholder="Please select"
                                    style={{ width: 154 }}
                                    onChange={(value) => {}}
                                >
                                    {linkTypes.map((option, index) => (
                                        <Select.Option
                                            key={option}
                                            disabled={index === 3}
                                            value={option}
                                        >
                                            {option}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Button.Group>
                                <Button
                                    type="primary"
                                    shape="round"
                                    icon={<IconPlus />}
                                />
                                <Button
                                    disabled
                                    type="primary"
                                    status="danger"
                                    shape="round"
                                    icon={<IconDelete />}
                                />
                            </Button.Group>
                        </Space>
                    </Form>
                </Card>
            </div>
        </AuthenticatedLayoutNew>
    );
}
