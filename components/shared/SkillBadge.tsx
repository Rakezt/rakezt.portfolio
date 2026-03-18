'use client';

import { skillIcons } from '@/data/skillIcon';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  const Icon = skillIcons[label];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className='
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      border border-border
      bg-card
      text-sm
      font-medium
      shadow-sm
      hover:shadow-xl
      hover:border-[hsl(var(--accent))]
      hover:bg-gradient-to-r
      hover:from-[hsl(var(--accent)/0.15)]
      hover:to-transparent
      transition-all
      cursor-default
      '
    >
      {Icon && <Icon size={16} />}
      {label}
    </motion.div>
  );
}
