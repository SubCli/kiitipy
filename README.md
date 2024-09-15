# [Tipy](http://kiitip.subcli.top/)

## Introduction

Tipy is a decentralized Web 3.0 platform built on the KII Chain, designed to enable creators to receive cryptocurrency donations. By leveraging blockchain technology, we provide a secure, transparent, and engaging way for creators to connect with their fans and receive support.

## Instructions

1. **Join Us:**
   - Sign up using your Metamask wallet.
   
2. **Create Donation Links:**
   - Generate a donation link (supports QR code generation) and share it with your supporters to receive donations.

3. **Track Donations:**
   - View detailed statistics of donations received through each link, including UTM source tracking for each link.

## Installation

> If your computer does not have pnpm, install it as follows:
> `npm i -g pnpm`

**Clone the Repository:**
	    ```bash 
	    git clone https://github.com/SubCli/kiitipy.git
	    ```
### Frontend

To set up the frontend project, follow these steps:

1. **Access Frontend Folder**

	```bash
	cd frontend
	```
	  
2. **Install Dependencies:**

    ```bash
    pnpm install
    ```

3. **Run the Next.js Application:**

    ```bash
    pnpm run dev
    ```

4. Access the application at `http://localhost:8081`.

### Backend

> You need to have mysql server installed on your computer to launch the backend project

To set up the backend project, follow these steps:

1. **Access the backend folder:**

    ```bash
    cd backend
    ```

2. **Install Dependencies:**

    ```bash
    pnpm install
    ```

3. **Set Up Environment Variables:**

    Create a `.env` file and update the necessary environment variables:

    ```code
    DATABASE_HOST=<database_hostname>
    DATABASE_PORT=<database_port>
    DATABASE_NAME=<database_name>
    DATABASE_USER=<database_user>
    DATABASE_PASSWORD=<database_password>
    ```

4. **Run the Nest.js Application:**

    ```bash
    npm run start
    ```

5. Access the API at `http://localhost:3000`.

We hope you enjoy your experience with Tipy!