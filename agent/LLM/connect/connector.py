from LLM.model import model

def connect_to_llm():
    try:
        response = model.invoke("Say exactly: Connected to LLM")
        text = response.content.strip()

        if "Connected to LLM" in text:
            print("Connected to Gemini LLM")
        else:
            print("LLM responded, but unexpected output:", text)

    except Exception as e:
        print("Gemini LLM connection failed:", str(e))