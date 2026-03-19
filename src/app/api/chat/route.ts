import { config } from '@/lib/config';
import { google } from '@ai-sdk/google';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';

export const maxDuration = 30;

const generatePortfolioContext = () => {
    const portfolioContext = `Portfolio of ${config.name}:
Role: ${config.role}
About: ${config.about}
Bio: ${config.bio}
Contact: Email - ${config.contact.email}, Phone - ${config.contact.phone}
GitHub: ${config.contact.github}
LinkedIn: ${config.contact.linkedin}
Twitter: ${config.contact.twitter}

Skills: ${config.skills.join(', ')}

Experience:
${config.experience
    .map(
        e => `${e.role} at ${e.company} (${e.duration})
${e.description.map(d => `  • ${d}`).join('\n')}`
    )
    .join('\n\n')}

Projects:
${config.projects
    .map(
        p => `${p.name}: ${p.description}
Technologies: ${p.technologies.join(', ')}
GitHub: ${p.github}${p.link ? `\nLink: ${p.link}` : ''}`
    )
    .join('\n\n')}`;

    return portfolioContext;
};

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const modelMessages = convertToModelMessages(messages);

    const systemPrompt = `You are a friendly and professional AI assistant representing ${
        config.name
    }'s portfolio.
You have access to detailed information about their work, skills, and projects.
Answer questions about their experience, skills, projects, and background.
Be concise, professional, and helpful. 
Do not make up information not present in the provided context.
Always be positive about the portfolio owner's work.
And give Answer other then give context or out of context. and always give in text format
${generatePortfolioContext()}`;

    const result = streamText({
        model: google('gemini-2.5-flash'),
        system: systemPrompt,
        messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
}
