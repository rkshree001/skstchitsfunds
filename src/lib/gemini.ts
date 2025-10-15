export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendChatMessage(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from server');
    }

    const data = await response.json();
    return data.response || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Chat error:", error);
    throw new Error(`Failed to get chat response: ${error}`);
  }
}
