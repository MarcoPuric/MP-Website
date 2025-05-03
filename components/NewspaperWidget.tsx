'use client';
import { Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Floating “TecTrends” widget that appears on the hero screen and links to /trends.
 */
export default function NewspaperWidget() {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        href="/trends"
        className="flex items-center gap-2 rounded-2xl bg-background/90 backdrop-blur px-4 py-2 shadow-xl ring-1 ring-border hover:shadow-2xl transition"
      >
        <Newspaper className="h-5 w-5" />
        <span className="font-medium">Tech Trends</span>
      </Link>
    </motion.div>
  );
}