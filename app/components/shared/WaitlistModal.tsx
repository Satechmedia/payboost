'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Loader2 } from 'lucide-react'

export default function WaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Reset state when modal closes to ensure it's fresh for next open
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
        setIsLoading(false)
      }, 300) // Matches exit animation duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Submission error:', err)
      alert('Network error. Please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#01202F] border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10 text-center">
              {!isSubmitted ? (
                <>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    A Beta Version Is On The Way. <br />
                    <span className="text-white/90 font-medium">
                      Be the First to Know.
                    </span>
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4 text-left"
                  >
                    <div>
                      <label className="text-xs font-medium text-white/70 ml-1">
                        Full Name
                      </label>
                      <div className="relative mt-1">
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                          size={18}
                        />
                        <input
                          required
                          name="full_name"
                          type="text"
                          placeholder="Enter Full Name"
                          className="w-full bg-[#082930] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all autofill-custom"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-white/70 ml-1">
                        Email Address
                      </label>
                      <div className="relative mt-1">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                          size={18}
                        />
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className="w-full bg-[#082930] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all autofill-custom"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-60 flex mx-auto justify-center items-center mt-6 bg-[#00C820] hover:bg-[#00E625] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-full transition-all active:scale-95 cursor-pointer shadow-lg shadow-green-900/20"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Processing...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12"
                >
                  <div className="w-16 h-16 bg-[#00C820]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-[#00C820] rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Thank You
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    We&apos;ll notify you as soon as we launch.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 text-white/40 hover:text-white text-sm transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Back to site
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
