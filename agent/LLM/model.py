# Import LLM API KEY
from dotenv import load_dotenv
load_dotenv()

# Import Class to setup model
from langchain_google_genai import ChatGoogleGenerativeAI

model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash-lite",
    temperature=0.7,
)