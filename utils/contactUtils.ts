export const contactUtils = {
    openEmail: (email: string) => {
        window.open(`mailto:${email}`, '_blank');
    },

    openPhone: (phone: string) => {
        window.open(`tel:${phone}`, '_blank');
    },

    openWhatsApp: (phone: string) => {
        const message = 'Hello Magic Knotes, I need support with...';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    },

    handleContactClick: (type: 'phone' | 'email' | 'whatsapp', contact: string) => {
        switch (type) {
            case 'phone':
                contactUtils.openPhone(contact);
                break;
            case 'email':
                contactUtils.openEmail(contact);
                break;
            case 'whatsapp':
                contactUtils.openWhatsApp(contact);
                break;
        }
    }
};
