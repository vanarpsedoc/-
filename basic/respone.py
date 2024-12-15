from groq import Groq
api_key = ""

# Initialize the client with the API key
client = Groq(api_key=api_key)
messages = [
    {"role": "system", "content": "Chat with the user according to the messages he/she provides."}
]

print("ChatBot: Hi! Start typing your messages below (type 'exit' to stop).")

while True:
    user_input = input("You: ").strip()

    # Exit if the user types 'exit'
    if user_input.lower() == "exit":
        print("ChatBot: Goodbye!")
        break

    
    messages.append({"role": "user", "content": user_input})

    try:
        
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=messages,
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
        )

        
        bot_reply = completion.choices[0].message.content
        print(f"ChatBot: {bot_reply}")

       
        messages.append({"role": "assistant", "content": bot_reply})

    except Exception as e:
        print("ChatBot: An error occurred:", e)
