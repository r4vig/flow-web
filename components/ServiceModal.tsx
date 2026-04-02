"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Service } from "@/data/services";

type Props = {
  open: boolean;
  onClose: () => void;
  service: Service | null;
};

export default function ServiceModal({ open, onClose, service }: Props) {
  if (!open || !service) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-brand-navy hover:text-brand-orange transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2
            id="service-modal-title"
            className="text-brand-orange font-bold text-xl md:text-2xl"
          >
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-brand-navy text-sm leading-relaxed mt-3 mb-6">
            {service.description}
          </p>

          {/* Subservices */}
          {service.subservices && service.subservices.length > 0 ? (
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {service.subservices.map((sub) => (
                <div
                  key={sub.id}
                  className="p-3 rounded-xl bg-brand-navy/5 hover:bg-brand-orange/10 transition"
                >
                  {/* Sub-title */}
                  <p className="font-bold text-brand-navy">{sub.title}</p>

                  {/* Sub-description */}
                  <p className="text-xs text-brand-navy/80 mt-1">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-brand-navy/60 italic">
              More information about this service will be available soon.
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
