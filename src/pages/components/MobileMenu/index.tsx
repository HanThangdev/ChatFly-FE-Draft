"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
//------------------------------------------------------------------------------------------------------

export default function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

    const trigger = useRef<HTMLButtonElement>(null);
    const mobileNav = useRef<HTMLDivElement>(null);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (
                !mobileNavOpen ||
                mobileNav.current.contains(target as Node) ||
                trigger.current.contains(target as Node)
            )
                return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    const menuItems = [
        {
            name: 'How its works',
            href: "#hiw",
        },
        {
            name: 'Features',
            href: "#features",
        },
        {
            name: 'Intergration',
            href: "#intergration",
        },
        {
            name: `Pricing`,
            href: `#pricing`,
        },
        {
            name: `Contact`,
            href: `#contact`,
        },
        {
            name: `FAQs`,
            href: `#faqs`,
        },
        {
            name: `Document`,
            href: `${process.env.REACT_APP_DOC_PAGE}/documentation/introduction`,
        },
        {
            name: `Blog`,
            href: `${process.env.REACT_APP_BLOG_PAGE}`,
        },
    ];

    return (
        <div className="flex lg:hidden">
            {/* Hamburger button */}
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && "active"}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg
                    className="w-6 h-6 fill-current text-[#FCFCFC]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="4" width="24" height="2" />
                    <rect y="11" width="24" height="2" />
                    <rect y="18" width="24" height="2" />
                </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
                <Transition
                    show={mobileNavOpen}
                    as="nav"
                    id="mobile-nav"
                    className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <ul className="px-5 py-2 list-none">
                        {menuItems.slice(0, 6).map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        {menuItems.slice(6, 8).map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    target="blank"
                                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Transition>
            </div>
        </div>
    );
}
