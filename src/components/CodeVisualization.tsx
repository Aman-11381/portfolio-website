import { motion } from 'framer-motion';

function CodeVisualization() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center" style={{ perspective: '1200px' }}>
      {/* Floating 3D Laptop/Monitor */}
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
          rotateX: [18, 22, 18],
          rotateY: [-12, -8, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Monitor/Screen */}
        <motion.div
          className="relative w-80 h-56 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-8 border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(147, 51, 234, 0.2)',
          }}
        >
          {/* Screen outer glow */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-2xl blur opacity-40"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Screen inner content */}
          <div className="relative h-full rounded-2xl overflow-hidden">
            {/* Screen glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-600/30 rounded-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Code editor window */}
            <div className="relative h-full p-4 overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm">
              {/* Window controls */}
              <div className="flex gap-2 mb-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                  animate={{ boxShadow: ['0 0 0 0 rgba(239, 68, 68, 0.7)', '0 0 0 4px rgba(239, 68, 68, 0)', '0 0 0 0 rgba(239, 68, 68, 0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Code lines with typing animation */}
              <div className="font-mono text-xs space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-purple-400 flex items-center gap-2"
                >
                  <span className="text-gray-600">1</span>
                  {'import React from "react";'}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-400 flex items-center gap-2"
                >
                  <span className="text-gray-600">2</span>
                  <span className="text-yellow-400">function</span> <span className="text-blue-300">Portfolio</span>() {'{'}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-green-400 pl-4 flex items-center gap-2"
                >
                  <span className="text-gray-600">3</span>
                  <span className="text-pink-400">return</span> {'<'}
                  <span className="text-cyan-400">Amazing</span> {'/>;'}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-blue-400 flex items-center gap-2"
                >
                  <span className="text-gray-600">4</span>
                  {'}'}
                </motion.div>
                
                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-purple-500 ml-1"
                  style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }}
                />
              </div>

              {/* Terminal-style prompt at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 left-4 right-4 text-xs font-mono"
              >
                <div className="flex items-center gap-2 text-green-400">
                  <span>{'>'}</span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    npm run dev
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Monitor stand with shadow */}
        <div className="relative mt-2">
          <div className="mx-auto w-16 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg" />
          <div className="mx-auto w-32 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full shadow-2xl" />
          {/* Shadow under monitor */}
          <motion.div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 bg-purple-900/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Floating UI elements around the monitor */}
      <motion.div
        className="absolute top-20 -left-10 bg-white rounded-xl shadow-2xl p-3 border border-gray-200"
        initial={{ opacity: 0, x: -50, y: 50, rotateZ: -10 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
          rotateZ: [-5, 0, -5],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          x: { duration: 0.5, delay: 1 },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          rotateZ: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
        style={{
          boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)',
        }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
            animate={{
              boxShadow: ['0 0 0 0 rgba(147, 51, 234, 0.7)', '0 0 0 8px rgba(147, 51, 234, 0)', '0 0 0 0 rgba(147, 51, 234, 0)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ✓
          </motion.div>
          <div>
            <div className="text-xs font-semibold text-gray-900">Build Success</div>
            <div className="text-xs text-gray-500">0 errors • 2.1s</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 -right-16 bg-white rounded-xl shadow-2xl p-3 border border-gray-200"
        initial={{ opacity: 0, x: 50, y: -50, rotateZ: 10 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 10, 0],
          rotateZ: [5, 0, 5],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          x: { duration: 0.5, delay: 1.2 },
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
          rotateZ: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
        style={{
          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
        }}
      >
        <motion.div 
          className="text-3xl"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🚀
        </motion.div>
        <div className="text-xs font-semibold text-gray-900 mt-1 text-center">Deploy</div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 -left-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-xl shadow-2xl p-3 text-white border border-purple-400/30"
        initial={{ opacity: 0, scale: 0, rotateZ: -15 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -15, 0],
          rotateZ: [-10, -5, -10],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.4 },
          scale: { duration: 0.5, delay: 1.4 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
          rotateZ: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
        }}
        style={{
          boxShadow: '0 10px 40px rgba(147, 51, 234, 0.5)',
        }}
      >
        <div className="text-sm font-mono font-bold">{'<Code />'}</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 -right-12 bg-white rounded-xl shadow-2xl p-3 border border-gray-200"
        initial={{ opacity: 0, scale: 0, rotateZ: 15 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 12, 0],
          rotateZ: [8, 3, 8],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.6 },
          scale: { duration: 0.5, delay: 1.6 },
          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
          rotateZ: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
        }}
        style={{
          boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
        }}
      >
        <div className="text-xs text-gray-600 mb-1 font-semibold">Performance</div>
        <div className="flex gap-1">
          <motion.div 
            className="w-2 h-6 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full"
            animate={{ height: [24, 28, 24] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-2 h-8 bg-gradient-to-t from-purple-500 to-purple-300 rounded-full"
            animate={{ height: [32, 36, 32] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-2 h-5 bg-gradient-to-t from-purple-400 to-purple-200 rounded-full"
            animate={{ height: [20, 24, 20] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.div 
            className="w-2 h-7 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full"
            animate={{ height: [28, 32, 28] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Code brackets floating */}
      <motion.div
        className="absolute top-12 left-24 text-6xl font-bold text-purple-600/20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotateZ: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-20 text-5xl font-bold text-purple-600/20"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotateZ: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'{}'}
      </motion.div>

      {/* Background gradient glows */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export default CodeVisualization;
