import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    IconHome,
    IconCaretRight,
    IconCaretLeft,
    IconNotification,
    IconUser,
    IconPoweroff,
} from "@arco-design/web-react/icon";
import { User } from "@/types";
import {
    Avatar,
    Badge,
    Button,
    Divider,
    Dropdown,
    Input,
    Layout,
    Menu,
    Popover,
    Space,
} from "@arco-design/web-react";
import { router } from "@inertiajs/react";

export default function AuthenticatedNew({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [sidebarCollapse, setSidebarCollapse] = useState(false);

    return (
        <Layout className="min-h-screen bg-gray-100">
            <Layout.Sider
                collapsed={sidebarCollapse}
                onCollapse={(collapse) => setSidebarCollapse(collapse)}
                width={250}
                collapsible
                trigger={
                    sidebarCollapse ? <IconCaretRight /> : <IconCaretLeft />
                }
                breakpoint="xl"
            >
                {sidebarCollapse === true ? (
                    <div className="flex items-center justify-center py-3">
                        <ApplicationLogo className="block h-8 w-auto fill-current text-gray-800" />
                    </div>
                ) : (
                    <div className="flex items-center px-4 py-3">
                        <ApplicationLogo className="block h-8 w-auto fill-current text-gray-800" />
                        <p className="ms-3 font-medium text-lg">Content MS</p>
                    </div>
                )}
                <Menu
                    defaultSelectedKeys={[route().current()!]}
                    onClickMenuItem={(v) => {
                        router.visit(route(v));
                    }}
                    style={{ width: "100%" }}
                >
                    <Menu.Item key="dashboard">
                        <IconHome />
                        Dashboard
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header className="px-4 py-2 flex justify-between items-center bg-white">
                    <div>
                        <Input.Search
                            allowClear
                            style={{ width: 500 }}
                            placeholder="Enter keyword to search"
                        />
                    </div>
                    <Space size="medium">
                        <Popover
                            trigger="click"
                            position="br"
                            title="Notification"
                            content={
                                <span>
                                    <p>Here is the text content</p>
                                </span>
                            }
                        >
                            <Badge count={9} dot>
                                <Button
                                    className="p-0"
                                    type="text"
                                    shape="circle"
                                    icon={<IconNotification />}
                                    style={{ fontSize: "20px" }}
                                />
                            </Badge>
                        </Popover>
                        <Dropdown
                            trigger="click"
                            position="br"
                            droplist={
                                <Menu
                                    onClickMenuItem={(v) =>
                                        v === "logout"
                                            ? router.post(route(v))
                                            : router.visit(route(v))
                                    }
                                >
                                    <Menu.Item key="profile.edit">
                                        <IconUser /> Profile
                                    </Menu.Item>
                                    <Divider className="!my-1" />
                                    <Menu.Item key="logout">
                                        <IconPoweroff /> Logout
                                    </Menu.Item>
                                </Menu>
                            }
                        >
                            <Avatar
                                style={{
                                    backgroundColor: "#168CFF",
                                    cursor: "pointer",
                                }}
                                triggerType="button"
                            >
                                {user.name[0].toUpperCase()}
                            </Avatar>
                        </Dropdown>
                    </Space>
                </Layout.Header>
                <Layout style={{ padding: "16px 24px" }}>
                    <Layout.Content>{children}</Layout.Content>
                </Layout>
                <Layout.Footer className="flex items-center justify-center py-4 bg-white">
                    Content Management System
                </Layout.Footer>
            </Layout>
        </Layout>
    );
}
