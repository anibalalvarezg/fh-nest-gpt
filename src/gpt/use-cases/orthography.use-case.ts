import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyCheckUseCase = async (
  openAi: OpenAI,
  options: Options,
) => {
  const { prompt } = options;
  const completion = await openAi.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
          Te serán proveídos textos en español con posibles errores ortográficos y gramaticales.
          Las palabras usadas deben existir en el diccionario de la Real Academia Española.
          debes responder en formato JSON, tu tarea es corregirlos y retornar información soluciones,
          también debes dar un porcentaje de acierto por el usuario.
          Si no hay errores debes retornar un mensaje de felicitciones
          
          Ejemplo de salida:
          {
            userScore: number,
            errores: string[], //['error -> solución'],
            message: string, // Usa emojis y texto para felicitar al usuario 
          }`,
      },
      { role: 'assistant', content: prompt },
    ],
    model: 'gpt-4o',
    temperature: 0.3,
    max_tokens: 150,
    response_format: {
      type: 'json_object',
    },
  });
  console.log(completion);
  const jsonResponse = JSON.parse(completion.choices[0].message.content);
  return jsonResponse;
};
