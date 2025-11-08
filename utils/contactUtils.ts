export const contactUtils = {
    openEmail: (email: string) => {
        window.open(`mailto:${email}`, '_blank');
    },

    openEmailWithBody: (email: string, subject: string, body: string) => {
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        window.open(`mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
    },

    openPhone: (phone: string) => {
        window.open(`tel:${phone}`, '_blank');
    },

    openWhatsApp: (phone: string) => {
        const message = 'Hello Magic Knotes, I need support with...';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    },

    openWhatsAppWithMessage: (phone: string, message: string) => {
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
