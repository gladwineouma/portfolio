import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-aurora px-6 py-16">
            <div className="max-w-2xl mx-auto glass-panel rounded-3xl p-10">

                <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

                <p className="text-foreground/70 mb-10">
                    Let’s build something meaningful together.
                </p>

                <div className="space-y-5">

                    <a href="mailto:youremail@gmail.com" className="flex items-center gap-3 hover:text-primary">
                        <Mail /> Email
                    </a>

                    <a href="tel:+254742838976" className="flex items-center gap-3 hover:text-primary">
                        <Phone /> Phone
                    </a>

                    <a href="https://github.com/yourname" target="_blank" className="flex items-center gap-3 hover:text-primary">
                        <Github /> GitHub
                    </a>

                    <a href="https://linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-3 hover:text-primary">
                        <Linkedin /> LinkedIn
                    </a>

                    <a href="https://wa.me/254742838976" target="_blank" className="flex items-center gap-3 hover:text-primary">
                        <MessageCircle /> WhatsApp
                    </a>

                </div>
            </div>
        </main>
    );
}