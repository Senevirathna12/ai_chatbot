"use client";
import { useState, useEffect, useRef, use } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import LandingSections from "@/components/LandingSections";

import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LandingSections />
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
            onClick={toggleChat}
          >
            <Button ref={chatIconRef} size="icon" className="rounded-full size-14 p-2 shadow-lg" onClick={toggleChat}>
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon className="size-12" />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale:0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-50 w-[95%]md:w-[500px]"
          >
           <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-lg font-bold">Chat with NoteWorthy AI</CardTitle>
              <Button variant="ghost" size="sm" onClick={toggleChat} className="py-0 px-2">
                <X className="size-4" />
                <span className="sr-only">Close chat</span>
              </Button>
            </CardHeader>
            <CardContent >
              <ScrollArea className="h-[300px] pr-4">
               <div className="w-full mt-32 text-gray-500 text-center justify-center flex gap-3">
                No messages yet. Start the conversation!
               </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex items-center gap-2 p-2">
              <Input placeholder="Type your message..." />
              <Button type="submit" size="icon">
                <Send className="size-4" />
              </Button>
            </CardFooter>

           </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
