from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Set your Groq API key
api_key = "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"

client = Groq(api_key=api_key)

# Message history to maintain context
messages = [
    {"role": "system", "content": "Chat with the user according to the messages they provide."}
]

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message", "").strip()
    
    if not user_input:
        return jsonify({"error": "Message cannot be empty"}), 400

    try:
        # Add the user message to the conversation
        messages.append({"role": "user", "content": user_input})

        # Generate a response from Groq
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
        
        # Append assistant's reply to the conversation
        messages.append({"role": "assistant", "content": bot_reply})
        
        return jsonify({"reply": bot_reply})

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
