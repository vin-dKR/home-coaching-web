export { }

declare global {
    interface Service {
        title: string;
        description: string;
        icon: string;
    }

    interface Testimonial {
        name: string;
        role: string;
        content: string;
        avatar: string;
    }

    interface NavItem {
        label: string;
        href: string;
    }
}
