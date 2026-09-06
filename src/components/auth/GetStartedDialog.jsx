import {
    FaGoogle,
    FaApple,
    FaMicrosoft,
} from "react-icons/fa6";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog.jsx";

import { Button } from "@/src/components/ui/button.jsx";


function GetStartedDialog({ open, onOpenChange }) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent
                showCloseButton={true}
                className="
        w-[calc(100%-2rem)]
        max-w-sm

        max-h-[90vh]
        overflow-y-auto

        gap-0
        p-0

        border
        border-(--Section-line)

        rounded-2xl

        bg-(--Background)
    "
            >
                {/* Header */}
                <DialogHeader
                    className="
            flex
            flex-col
            items-center

            px-6
            pt-6
            pb-4

            text-center
        "
                >
                    <div
                        className="
                flex
                justify-center
                items-center

                w-10
                h-10

                mb-3

                rounded-xl

                bg-(--Primary)

                text-white
                font-bold
                text-lg

                shadow-[0_0_20px_var(--Glow)]
            "
                    >
                        T
                    </div>

                    <DialogTitle
                        className="
                text-xl
                font-semibold

                text-(--Text)
            "
                    >
                        Welcome to TechNova
                    </DialogTitle>

                    <DialogDescription
                        className="
                mt-1.5

                max-w-xs

                text-xs
                leading-relaxed
                text-(--Text-Muted)
            "
                    >
                        Choose an option below to continue
                        to your TechNova account.
                    </DialogDescription>
                </DialogHeader>


                {/* Authentication Options */}

                <div
                    className="
            flex
            flex-col

            gap-2.5

            px-6
            pb-5
        "
                >

                    {/* Google */}

                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="
                w-full

                justify-center

                gap-3

                border-(--Section-line)

                bg-transparent

                cursor-pointer

                text-(--Text)

                hover:border-(--Primary)
                hover:bg-(--Primary)
                hover:text-white
            "
                    >
                        <FaGoogle className="w-4 h-4" />

                        Continue with Google
                    </Button>


                    {/* Apple */}

                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="
                w-full

                justify-center

                gap-3

                border-(--Section-line)

                
                bg-transparent

                cursor-pointer

                text-(--Text)

                hover:border-(--Primary)
                hover:bg-(--Primary)
                hover:text-white
            "
                    >
                        <FaApple className="w-4 h-4" />

                        Continue with Apple
                    </Button>


                    {/* Microsoft */}

                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="
                w-full

                justify-center

                gap-3

                border-(--Section-line)

                bg-transparent

                text-(--Text)

                cursor-pointer

                hover:border-(--Primary)
                hover:bg-(--Primary)
                hover:text-white
            "
                    >
                        <FaMicrosoft className="w-4 h-4" />

                        Continue with Microsoft
                    </Button>


                    {/* Divider */}

                    <div
                        className="
                flex
                items-center

                gap-3

                my-1
            "
                    >
                        <span
                            className="
                    flex-1
                    h-px

                    bg-(--Section-line)
                "
                        />

                        <span
                            className="
                    text-[0.7rem]
                    text-(--Text-Muted)
                "
                        >
                            OR
                        </span>

                        <span
                            className="
                    flex-1
                    h-px

                    bg-(--Section-line)
                "
                        />
                    </div>


                    {/* Email */}

                    <Button
                        type="button"
                        variant="default"
                        size="lg"
                        className="
                w-full

                justify-center

                gap-3

                cursor-pointer
            "
                    >
                        Continue with Email
                    </Button>

                </div>


                {/* Terms */}

                <div
                    className="
            px-6
            pb-5

            text-center
        "
                >
                    <p
                        className="
                text-[0.7rem]
                leading-relaxed
                text-(--Text-Muted)
            "
                    >
                        By continuing, you agree to our Terms
                        of Service and Privacy Policy.
                    </p>
                </div>

            </DialogContent>
        </Dialog>
    );
}

export default GetStartedDialog;