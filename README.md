# Web Scan 🔍

A modern website scanning application that allows users to enter a URL, initiate a scan, and retrieve metadata such as hosting details, technologies used, and server response.

## Features

- Scan websites for metadata: IP addresses, web server type, HTTP status, technologies
- Uses **HTTPX** by ProjectDiscovery for deep scanning
- **React + Vite** frontend with an intuitive UI

## Tech Stack

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Description</th>
  </tr>
  <tr>
    <td rowspan="2"><strong>Backend</strong></td>
    <td>Python + Django</td>
    <td>API and server logic</td>
  </tr>
  <tr>
    <td>HTTPX (ProjectDiscovery)</td>
    <td>CLI-based web scanner</td>
  </tr>
  <tr>
    <td rowspan="4"><strong>Frontend</strong></td>
    <td>Vite + React (TS)</td>
    <td>Frontend framework</td>
  </tr>
  <tr>
    <td>TailwindCSS + ShadCN UI</td>
    <td>Styling and UI components</td>
  </tr>
  <tr>
    <td>React Context API</td>
    <td>State management</td>
  </tr>
  <tr>
    <td>Axios</td>
    <td>API requests</td>
  </tr>
</table>

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)

### Clone the Repository

```sh
git clone https://github.com/kislevlevy/web-scan
cd web-scan
```

### Setup Environment Variables

Follow the `.env.md` file instructions to configure `backend/.env` and `frontend/.env`.

## Running the Application

### Backend

1. Ensure you have:

   - [pip](https://pip.pypa.io/en/stable/installation/)
   - [venv](https://virtualenv.pypa.io/en/latest/installation/)

2. Run the following commands:

   ```sh
   cd backend
   python --version  # Verify Python installation

   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py runserver
   ```

> Backend runs on: `http://localhost:8000`

### Frontend

```sh
cd frontend
npm -v  # Verify NPM installation

npm install
npm run dev
```

> Frontend runs on: `http://localhost:5173`

## How to Use

1. Open the web application
2. Enter a valid website URL
3. Press **Enter** or click **Search**
4. Wait for the scan to complete
5. Only found metadata will be displayed
   > Example: If no CNAME records exist, that section won't appear
