## Travel-Itinerary-Generator

## Overview
Travel Itinerary Generator is a web-based automation system that collects user travel preferences through a frontend interface and generates a personalized travel itinerary using automation and AI.

The system integrates a frontend application with "n8n workflows", enabling seamless data processing, itinerary generation, and email delivery.

## Features
- User-friendly frontend to collect travel details
- Webhook-based integration between frontend and n8n
- Automated data storage in Google Sheets
- AI-generated travel itinerary using OpenAI API
- Automated email delivery using Gmail API

## Tech Stack
### Frontend
- HTML
- CSS
- JavaScript

### Automation & Backend
- n8n
- Google Sheets API
- OpenAI API
- Gmail API

## System Architecture
Frontend (HTML/CSS/JS)  
→ n8n Webhook  
→ Data Processing & Storage (Google Sheets)  
→ AI Itinerary Generation (OpenAI API)  
→ Email Delivery (Gmail API)

## How It Works
1. User submits travel details through the website
2. Frontend sends data to n8n via webhook
3. n8n stores the data in Google Sheets
4. OpenAI API generates a personalized itinerary
5. The itinerary is emailed to the user via Gmail API

## Author
Rudrendra Bahadur Singh 
(Frontend Developer | Automation & Integration Enthusiast)
