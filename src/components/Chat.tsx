'use client';

import { config } from '@/lib/config';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import React, { useEffect, useRef } from 'react';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

const CHAT_STORAGE_KEY = 'chatMessages';

const Chat: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: '/api/chat' }),
        messages: [
            {
                id: 'initial',
                role: 'assistant' as const,
                parts: [
                    {
                        type: 'text',
                        text: `Hi! I'm ${config.name}'s AI assistant. Ask me anything about their portfolio.`,
                    },
                ],
            },
        ],
    });
    const [input, setInput] = React.useState('');
    const chatBodyRef = useRef<HTMLDivElement>(null);

    // Persist & scroll
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || status !== 'ready') return;
        sendMessage({ text: input });
        setInput('');
    };

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className='fixed bottom-6 right-6 z-50'>
            {/* Chat Bubble */}
            <div
                className={`transition-all duration-300 ${isOpen
                        ? 'opacity-0 scale-90 invisible'
                        : 'opacity-100 scale-100 visible'
                    }`}
            >
                <button
                    onClick={toggleChat}
                    className='bg-cyan-500 text-slate-900 rounded-full p-4 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-cyan-400 hover:scale-110 transition-all'
                >
                    <ChatIcon className='h-8 w-8' />
                </button>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-[calc(100%-3rem)] sm:w-96 h-[70vh] sm:h-96 flex flex-col bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-cyan-500/20 transition-all duration-300 origin-bottom-right ${isOpen
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-90 invisible'
                    }`}
            >
                {/* Header */}
                <div className='flex justify-between items-center p-4 border-b border-cyan-500/10 bg-cyan-500/5'>
                    <h3 className='text-sm font-black uppercase tracking-widest text-cyan-400'>
                        AI Terminal
                    </h3>
                    <button
                        onClick={toggleChat}
                        className='text-slate-400 hover:text-cyan-400 transition-colors'
                    >
                        <CloseIcon className='h-6 w-6' />
                    </button>
                </div>

                {/* Body */}
                <div
                    ref={chatBodyRef}
                    className='flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20'
                >
                    {messages.map((msg: any, i) => (
                        <div
                            key={msg.id || i}
                            className={`flex ${msg.role === 'user'
                                    ? 'justify-end'
                                    : 'justify-start'
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-md px-3 py-2 text-sm font-medium ${msg.role === 'user'
                                        ? 'bg-cyan-600 text-white'
                                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                                    }`}
                            >
                                {msg.parts.map(
                                    (
                                        part: { type: string; text: string },
                                        idx: number
                                    ) =>
                                        part.type === 'text' ? (
                                            <span key={idx}>{part.text}</span>
                                        ) : null
                                )}
                            </div>
                        </div>
                    ))}
                    {status === 'streaming' && (
                        <div className='flex justify-start'>
                            <div className='bg-slate-800 text-cyan-400 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-widest animate-pulse'>
                                Process...
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className='p-4 border-t border-cyan-500/10'>
                    <form
                        onSubmit={handleSendMessage}
                        className='flex items-center space-x-2'
                    >
                        <input
                            type='text'
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder='Enter query...'
                            className='flex-1 bg-slate-800/50 border border-cyan-500/10 rounded-md px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all'
                            disabled={status === 'streaming'}
                        />
                        <button
                            type='submit'
                            className='bg-cyan-500 text-slate-900 rounded-md p-2 disabled:opacity-50 hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                            disabled={status === 'streaming' || !input.trim()}
                        >
                            <SendIcon className='h-5 w-5' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
