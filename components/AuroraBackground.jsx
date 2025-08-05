import AuroraLight from "./AuroraLight";

const AuroraBackground = () => {
    // Configuration for the aurora lights
    const auroraConfig = [
        { id: 21, top: '2%', left: '10%', duration: 28, color: 'rgb(253,12,12)' },
        { id: 22, top: '5%', left: '30%', duration: 22, color: 'rgb(157,44,62)' },

        // Row 1
        { id: 1, top: '10%', left: '10%', duration: 28, color: 'rgb(253,12,12)' },
        { id: 2, top: '10%', left: '30%', duration: 22, color: 'rgb(157,44,62)' },
        { id: 3, top: '10%', left: '50%', duration: 30, color: 'rgb(250, 173, 173)' },
        { id: 4, top: '10%', left: '70%', duration: 25, color: 'rgb(227, 198, 198)' },
        { id: 5, top: '10%', left: '90%', duration: 35, color: 'rgb(255, 100, 100)' },

        // Row 2
        { id: 6, top: '30%', left: '10%', duration: 26, color: 'rgb(200, 100, 255)' },
        { id: 7, top: '30%', left: '30%', duration: 32, color: 'rgb(100, 200, 255)' },
        { id: 8, top: '30%', left: '50%', duration: 24, color: 'rgb(253,12,12)' },
        { id: 9, top: '30%', left: '70%', duration: 29, color: 'rgb(157,44,62)' },
        { id: 10, top: '30%', left: '90%', duration: 27, color: 'rgb(250, 173, 173)' },

        // Row 2.5
        { id: 6, top: '45%', left: '10%', duration: 26, color: 'rgb(200, 100, 255)' },
        { id: 7, top: '45%', left: '30%', duration: 32, color: 'rgb(100, 200, 255)' },
        { id: 8, top: '45%', left: '50%', duration: 24, color: 'rgb(253,12,12)' },
        { id: 9, top: '45%', left: '70%', duration: 29, color: 'rgb(157,44,62)' },
        { id: 10, top: '45%', left: '90%', duration: 27, color: 'rgb(250, 173, 173)' },

        // Row 3
        { id: 11, top: '60%', left: '10%', duration: 31, color: 'rgb(227, 198, 198)' },
        { id: 12, top: '60%', left: '30%', duration: 23, color: 'rgb(255, 100, 100)' },
        { id: 13, top: '60%', left: '50%', duration: 28, color: 'rgb(200, 100, 255)' },
        { id: 14, top: '60%', left: '70%', duration: 26, color: 'rgb(100, 200, 255)' },
        { id: 15, top: '60%', left: '90%', duration: 33, color: 'rgb(253,12,12)' },

        // Row 4
        { id: 16, top: '80%', left: '10%', duration: 29, color: 'rgb(157,44,62)' },
        { id: 17, top: '80%', left: '30%', duration: 25, color: 'rgb(250, 173, 173)' },
        { id: 18, top: '80%', left: '50%', duration: 30, color: 'rgb(227, 198, 198)' },
        { id: 19, top: '80%', left: '70%', duration: 22, color: 'rgb(255, 100, 100)' },
        { id: 20, top: '80%', left: '90%', duration: 28, color: 'rgb(200, 100, 255)' },
    ];

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"> {/* <-- Change to absolute, h-full */}
            <div className="relative w-full h-full">
                {auroraConfig.map(config => (
                    <AuroraLight key={config.id} {...config} />
                ))}
            </div>
        </div>
    );
};

export default AuroraBackground;