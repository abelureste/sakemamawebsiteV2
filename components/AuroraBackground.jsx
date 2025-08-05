import AuroraLight from "./AuroraLight";

const AuroraBackground = () => {
    // Configuration for the aurora lights
    const auroraConfig = [
        { id: 1, top: '5%', left: '10%', duration: 25, color: 'rgb(253,12,12)' },
        { id: 2, top: '20%', left: '70%', duration: 28, color: 'rgb(157,44,62)' }, 
        { id: 3, top: '60%', left: '5%', duration: 32, color: 'rgb(250, 173, 173)' },
        { id: 4, top: '70%', left: '60%', duration: 22, color: 'rgb(250, 173, 173)' },
        { id: 5, top: '40%', left: '40%', duration: 35, color: 'rgb(227, 198, 198)' },
    ];

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                {auroraConfig.map(config => (
                    <AuroraLight key={config.id} {...config} />
                ))}
            </div>
        </div>
    );
};

export default AuroraBackground