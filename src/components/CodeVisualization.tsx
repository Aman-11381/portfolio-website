import { motion } from 'framer-motion';

function CodeVisualization() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
      {/* Floating 3D Laptop/Monitor */}
      <motion.div
        className="relative"
        initial={{ y: 0, rotateX: 20, rotateY: -15 }}
        animate={{
          y: [-10, 10, -10],
          rotateY: [-15, -10, -15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Monitor/Screen */}
        <motion.div
          className="relative w-80 h-56 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border-8 border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Screen glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl" />
          
          {/* Code editor window */}
          <div className="relative h-full p-4 overflow-hidden">
            {/* Window controls */}
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Code lines with typing animation */}
            <div className="font-mono text-xs space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-purple-400"
              >
                {'import React from "react";'}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-blue-400"
              >
                {'function Portfolio() {'}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-green-400 pl-4"
              >
                {'return <Amazing />;'}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="text-blue-400"
              >
                {'}'}
              </motion.div>
              
              {/* Blinking cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-purple-500 ml-1"
              />
            </div>
          </div>

          {/* Screen reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none" />
        </motion.div>

        {/* Monitor stand */}
        <div className="mx-auto w-16 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
        <div className="mx-auto w-32 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full" />
      </motion.div>

      {/* Floating UI elements around the monitor */}
      <motion.div
        className="absolute top-20 -left-10 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          x: { duration: 0.5, delay: 1 },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            ✓
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-900">Build Success</div>
            <div className="text-xs text-gray-500">0 errors</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 -right-16 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          x: { duration: 0.5, delay: 1.2 },
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
      >
        <div className="text-2xl">🚀</div>
        <div className="text-xs font-semibold text-gray-900 mt-1">Deploy</div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 -left-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-xl p-3 text-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.4 },
          scale: { duration: 0.5, delay: 1.4 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
        }}
      >
        <div className="text-xs font-mono font-bold">{'<Code />'}</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 -right-12 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 12, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.6 },
          scale: { duration: 0.5, delay: 1.6 },
          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
        }}
      >
        <div className="flex gap-1">
          <div className="w-2 h-6 bg-purple-600 rounded" />
          <div className="w-2 h-8 bg-purple-500 rounded" />
          <div className="w-2 h-5 bg-purple-400 rounded" />
          <div className="w-2 h-7 bg-purple-600 rounded" />
        </div>
      </motion.div>

      {/* Background gradient glow */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export default CodeVisualization;
