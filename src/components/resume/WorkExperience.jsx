const WorkExperience = [
    {
        id: 1,
        title: "Founding AI & Full Stack Engineer",
        company: "EcoForge",
        location: "Boston, Massachusetts",
        yearsActive: "December 2024 - Present",
        information: [
            "Architected full-stack AI-powered cement production platform serving enterprise manufacturing clients, securing ¥2M seed funding and trials with China's largest cement manufacturer",
            "Built a high-performance full-stack application using Next.js (TypeScript) and FastAPI (Python), implementing a responsive UI library and WebSocket-based RESTful APIs to support 24/7 operations and real-time streaming of hundreds of daily metrics.",
            "Designed core data infrastructure and orchestration systems using MySQL, ensuring sub-millisecond query performance and reliable continuous ingestion between frontend clients, ML models, and third-party services via heartbeat monitoring.",
            "Established robust CI/CD pipelines with specialized automated testing for stochastic model outputs and complex API integrations, ensuring reliable model versioning, rollback capabilities, and system availability.",
        ],
    },
    {
        id: 2,
        title: "Research Assistant",
        company: "LUNAR Lab, Brown University",
        location: "Providence, Rhode Island",
        yearsActive: "December 2024 - May 2025",
        information: [
            "Researched emergent properties of Video Large Language Models (Video LLMs) to improve ML pipeline explainability and performance optimization under Professor Ellie Pavlick",
            "Developed and executed control experiments on EgoSchema to benchmark Image LLMs vs Video LLMs performance on long-form video question-answering tasks",
            "Implemented AnyRes technique in multi-image scenarios, enabling LLaVA-NeXT-Image to process videos with fewer tokens using visual Chain-of-Thought for automated text infills",
            {
                text: "Co-authored research paper ",
                link: {
                    text: "'Video Finetuning Improves Reasoning Between Frames'",
                    url: "https://arxiv.org/abs/2511.12868"
                },
                suffix: " accepted to NeurIPS 2025 CogInterp"
            }
        ],
    },
    {
        id: 3,
        title: "Oracle Sponsored Open-Source Developer",
        location: "Remote",
        company: "Oracle Central Bank Digital Currency Project",
        yearsActive: "January 2023 - January 2024",
        information: [
            "Forked MIT and Boston Federal Reserve's OpenCBDC platform and researched 2-Phase Commit architecture for localized data storage and transaction flow",
            "Developed and executed technical plan in coordination with Oracle's VP of Blockchain Technologies to port OpenCBDC's local storage to manually sharded Oracle Autonomous Database",
            "Engineered React-based frontend interface to visualize UTXO transaction flows and developed administrative dashboard for benchmarking system throughput performance",
            {
                text: "Published Oracle Blog Post: ",
                link: {
                    text: "'Extending CBDC Scalability and Resilience with Oracle Database Blockchain Tables'",
                    url: "https://blogs.oracle.com/blockchain/extending-cbdc-scalability-and-resilience-with-oracle-database-blockchain-tables"
                }
            },
        ],
    },
];

export default WorkExperience;