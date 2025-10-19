import React from 'react';
import { Code, Sparkles } from 'lucide-react';

function Header() {
    return (
        <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                            <Code className="h-5 w-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-white">
                            AI Powered Website Builder
                        </h1>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium">
                            <Sparkles className="h-4 w-4" />
                            <span>AI Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;