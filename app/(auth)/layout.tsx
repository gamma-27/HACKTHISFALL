import { ModalProvider } from "@/providers/modal-provider"

export default function AuthLayout({
    children
}:{
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full">
            <ModalProvider/>
            {children}
        </div>
    )
}