# Travel-Itinerary-Generator

## Project Description
This project is a web-based travel itinerary generation system that uses automation and AI to create personalized travel plans.  
Users submit their travel preferences through a frontend website, which triggers an automated workflow in n8n. The workflow processes the data, generates a travel itinerary using an AI model, stores the information in Google Sheets, and sends the final itinerary to the user via email.

## Architecture Overview
The system follows an event-driven architecture where the frontend acts as the trigger and n8n handles backend automation and integrations.

**Main Components:**
- Frontend (HTML, CSS, JavaScript)
- n8n (Automation and workflow orchestration)
- Google Sheets (Data storage)
- OpenAI API (AI-based itinerary generation)
- Gmail API (Email delivery)

## Frontend to n8n Data Flow Explanation
1. The user enters travel details (destination, dates, budget, preferences) on the frontend website.
2. On form submission, the frontend sends an HTTP POST request to an n8n webhook URL.
3. The n8n webhook receives the request and starts the workflow execution.
4. The received data is validated and formatted within n8n.
5. User input data is stored in Google Sheets for record-keeping and tracking.
6. The processed data is forwarded to the AI module for itinerary generation.

## AI Usage Explanation
The OpenAI API is used to generate a personalized travel itinerary based on the user’s input.  
The AI model processes details such as destination, trip duration, interests, and budget to produce a structured and user-friendly itinerary.  
The generated response is then passed back to the workflow and included in the email sent to the user.

AI is used only for content generation, while the overall logic and control flow are managed by n8n.

## Known Limitations and Assumptions

### Limitations
- The accuracy of the itinerary depends on the quality of user input.
- API rate limits of OpenAI and Gmail may affect high-volume usage.
- The system does not currently support real-time pricing and booking. 

### Assumptions
- Users provide valid and complete travel information.
- API credentials are correctly configured in n8n.
- Google Sheets is used as a simple data store and not as a full database.

## Author
Rudrendra Bahadur Singh 
(Frontend Developer | Automation & Integration Enthusiast)

