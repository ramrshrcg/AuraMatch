# AuraMatch Backend

The core backend service for the **AuraMatch** mobile ecosystem. Built with Node.js, this server handles data ingestion, user management, and orchestrates the automated tasks required to power the AuraMatch personalized recommender system.

Live Deployment: [auramatch.onrender.com](https://auramatch.onrender.com/)

## 🚀 Features

* **Data-Driven Recommender Engine**: Collects and processes user data to deliver tailored matching suggestions.
* **Automated Cron Engine**: Leverages `node-cron` to manage background synchronization, periodic dataset updates, and routine recommendation model recalculations.
* **Modular Structure**: Structured using a clean, decoupled MVC-style pattern for strict separation of concerns, high maintainability, and clean routing.
* **Production-Ready Deployments**: Pre-configured for seamless deployment on platforms like Render and Vercel.

---

## 🛠️ Tech Stack

* **Runtime Environment**: Node.js
* **Framework**: Express.js
* **Task Automation**: `node-cron`
* **Language**: JavaScript (100%)

---

## 📂 Project Structure

Based on the repository architecture:

```text
AuraMatch/
├── connectToDb/    # Database connection configuration and setup
├── controller/     # Request handling, logic orchestration, and login controllers
├── middleware/     # Custom Express middlewares (authentication, validation, etc.)
├── model/          # Database schemas and data access layers (e.g., login, profiles)
├── router/         # Express route definitions mapping endpoints to controllers
├── services/       # Core business logic, recommender system engines, and cron setups
├── storage/        # Persistent file storage or static media assets
├── .gitignore      # Ignored files for version control
├── app.js          # Main application entry point initialization with node-cron
├── package.json    # Project dependencies and npm scripts
└── vercel.json     # Vercel deployment configuration
