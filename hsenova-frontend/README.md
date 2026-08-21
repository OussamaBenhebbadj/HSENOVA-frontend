# HSENOVA Frontend

Frontend application for the HSENOVA Safety Management Platform.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Docker
- Docker Compose

## Requirements

- Git
- Docker Desktop

## Installation

Clone the repository:

git clone <repository-url>

cd HSENOVA-frontend

Create the environment file:

cp .env.example .env.local

Start the application:

docker compose up --build

The application will be available at:

http://localhost:3000

## Development

The project uses Next.js App Router.

Source code is located in:

src/

## Project Structure

src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── types/
└── constants/

## Backend

The frontend communicates with the HSENOVA backend API.

Backend:

http://localhost:5000

API:

http://localhost:5000/api

## Docker

Start:

docker compose up

Build and start:

docker compose up --build

Stop:

docker compose down

View logs:

docker compose logs -f