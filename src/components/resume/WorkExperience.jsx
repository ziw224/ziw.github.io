const WorkExperience = [
    {
        id: 1,
        title: "Founding AI & Full Stack Engineer",
        company: "EcoForge",
        location: "Boston, Massachusetts",
        yearsActive: "December 2024 - Present",
        information: [
            "Architected full-stack AI-powered cement production platform serving enterprise manufacturing clients, securing ¥2M seed funding and trials with China's largest cement manufacturer",
            "Built production-grade AI agent using LangChain and GPT-4o, orchestrating multi-tool workflows for RAG-based Q&A system and intelligent parameter recommendations with <2s query latency",
            "Engineered high-performance backend with FastAPI, Redis, and WebSockets for real-time data streaming; developed responsive Next.js/TypeScript frontend visualizing 100+ daily production KPIs",
            "Established robust CI/CD pipelines with automated testing for stochastic agentic tool-calling; containerized application with Docker and orchestrated deployments across three environments (test, production, and on-site factory servers), ensuring 24/7 system availability and reliable model versioning",
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