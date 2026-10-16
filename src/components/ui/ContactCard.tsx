import React from "react";

/**
 * A contact-method card that is a link for every method except the phone one.
 *
 * The contact sections render a list of methods — call, email, WhatsApp,
 * schedule — and wrapped each card in a single <a href={method.action}>. That
 * works until the card has to show two phone numbers: the wrapper dials only
 * the first, and a per-number link cannot go inside it, because an <a> nested
 * in an <a> is invalid HTML and the parser silently restructures the DOM
 * around it.
 *
 * So a `tel:` card renders as a plain element and lets <PhoneLinks /> inside
 * supply one link per number; every other card behaves exactly as before.
 * The visible result is unchanged apart from the phone card no longer being
 * clickable edge-to-edge — the numbers inside it are the links now.
 */
export type ContactCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
    href,
    target,
    rel,
    children,
    ...rest
}) => {
    if (href?.startsWith("tel:")) {
        return (
            <div {...(rest as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>
        );
    }
    return (
        <a href={href} target={target} rel={rel} {...rest}>
            {children}
        </a>
    );
};

export default ContactCard;
