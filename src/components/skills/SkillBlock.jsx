function SkillBlock({ title, skills }) {
    return (
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-200 hover:bg-purple-500/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillBlock
