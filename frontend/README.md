# SenseGrid

## Overview
SenseGrid is an innovative IoT solution platform that provides real-time environmental and industrial data visualization using sensor networks. Additionally, its web platform features articles on emerging technologies and other tech-related topics, keeping users informed about the latest advancements.

## Features about Sensgrid
- **IoT Data Monitoring**: Collects and displays sensor data in real time for industrial and environmental applications.
- **Interactive Dashboard**: Provides an intuitive interface for analyzing and visualizing IoT data.
- **Alerts & Notifications**: Sends alerts when predefined thresholds are exceeded.
- **Historical Data Analysis**: Stores and analyzes past data trends for better decision-making.
- **Tech Articles & Insights**: Offers in-depth articles and news on the latest technology trends and innovations.
- **Multi-Device Accessibility**: Ensures seamless functionality across desktop and mobile devices.

## Technology Stack
- **Frontend**: Next.js, React.js, Tailwind CSS
- **IoT Integration**: MQTT Protocol, Raspberry Pi, ESP32

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- Git
- Docker

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/osa623/Sensgrid-Web.git
   ```
2. Navigate to the project directory:
   ```sh
   cd sensegrid
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend application:
   ```sh
   npm run dev
   ```
5. Access the application at `http://localhost:3000`

## Running with Docker
### Prerequisites
Ensure you have Docker installed on your machine.

### Steps to Run with Docker
1. Build the Docker image:
   ```sh
   docker build -t sensegrid .
   ```
2. Run the Docker container:
   ```sh
   docker run -p 3000:3000 sensegrid
   ```
3. Access the application at `http://localhost:3000`


## License
This project is licensed under the MIT License.

## Contact
For support or inquiries, contact:
- **GitHub**: [SenseGrid Repository](https://github.com/osa623/Sensgrid-Web.git)
- **Website**: [www.sensegrid.com](https://sensgrid-web.vercel.app/)