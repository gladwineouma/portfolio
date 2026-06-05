// ContactRow.jsx
export default function ContactRowWithIcon({ icon: Icon, text, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-purple-400 group transition-all duration-300 whitespace-nowrap"
        >
            {/* Perfectly sized circular border outline without background fill */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/40 group-hover:border-purple-400 transition-all duration-300">
                <Icon className="h-4 w-4 text-purple-400" />
            </div>
            {/* Clean, standard text sizing */}
            <span className="text-[15px] font-normal tracking-wide">{text}</span>
        </a>
    );
}