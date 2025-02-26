// Improvements to make ContactForm.tsx more mobile-friendly
// Update the existing component with these changes

'use client';

import { useState } from 'react';
import { FiSend, FiCheck, FiAlertTriangle } from 'react-icons/fi';

interface FormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    projectType?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        projectType: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const projectTypes = [
        { value: '', label: 'Select a project type' },
        { value: 'website', label: 'Website Development' },
        { value: 'modernization', label: 'Website Modernization' },
        { value: 'seo', label: 'SEO & Digital Marketing' },
        { value: 'hosting', label: 'Hosting & Maintenance' },
        { value: 'automation', label: 'Business Automation' },
        { value: 'ai', label: 'AI Integration' },
    ];

    const validateField = (
        name: keyof FormData,
        value: string
    ): string | undefined => {
        switch (name) {
            case 'name':
                return value.trim() === '' ? 'Name is required' : undefined;
            case 'email':
                return value.trim() === ''
                    ? 'Email is required'
                    : !/^\S+@\S+\.\S+$/.test(value)
                      ? 'Please enter a valid email'
                      : undefined;
            case 'projectType':
                return value === ''
                    ? 'Please select a project type'
                    : undefined;
            case 'message':
                return value.trim() === ''
                    ? 'Message is required'
                    : value.trim().length < 10
                      ? 'Message is too short'
                      : undefined;
            default:
                return undefined;
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate field on change if it's been touched
        if (touched[name]) {
            const error = validateField(name as keyof FormData, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (
        e: React.FocusEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        // Validate on blur
        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        const allTouched = Object.keys(formData).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
        );
        setTouched(allTouched);

        // Validate before submission
        if (!validateForm()) {
            return;
        }

        setSubmitStatus('submitting');

        try {
            // Replace with your actual form submission logic
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

            // Simulate API call with timeout
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Reset form on success
            setFormData({
                name: '',
                email: '',
                projectType: '',
                message: '',
            });
            setTouched({});
            setSubmitStatus('success');

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');

            // Reset error status after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        }
    };

    return (
        <div className="relative">
            {/* Background particles/stars (decorative) - reduced for mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 7}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Form Container */}
            <form
                onSubmit={handleSubmit}
                className="relative z-10 max-w-xl mx-auto rounded-xl overflow-hidden transition-all duration-500"
                style={{
                    background:
                        'linear-gradient(45deg, rgba(30, 58, 138, 0.3), rgba(107, 33, 168, 0.3))',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                {/* Form Header */}
                <div className="p-4 sm:p-6 border-b border-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Get in Touch
                    </h3>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                        Let us help bring your vision to life. Fill out the form
                        below and well get back to you shortly.
                    </p>
                </div>

                {/* Form Body */}
                <div className="p-4 sm:p-6 space-y-4">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-200 mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your name"
                            className={`w-full bg-white/10 border ${
                                errors.name && touched.name
                                    ? 'border-red-400'
                                    : touched.name
                                      ? 'border-green-400'
                                      : 'border-white/20'
                            } rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            aria-invalid={
                                errors.name && touched.name ? 'true' : 'false'
                            }
                            aria-describedby={
                                errors.name && touched.name
                                    ? 'name-error'
                                    : undefined
                            }
                        />
                        {errors.name && touched.name && (
                            <p
                                id="name-error"
                                className="mt-1 text-sm text-red-400 flex items-center"
                            >
                                <FiAlertTriangle
                                    className="mr-1"
                                    aria-hidden="true"
                                />
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-200 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="your.email@example.com"
                            className={`w-full bg-white/10 border ${
                                errors.email && touched.email
                                    ? 'border-red-400'
                                    : touched.email
                                      ? 'border-green-400'
                                      : 'border-white/20'
                            } rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            aria-invalid={
                                errors.email && touched.email ? 'true' : 'false'
                            }
                            aria-describedby={
                                errors.email && touched.email
                                    ? 'email-error'
                                    : undefined
                            }
                        />
                        {errors.email && touched.email && (
                            <p
                                id="email-error"
                                className="mt-1 text-sm text-red-400 flex items-center"
                            >
                                <FiAlertTriangle
                                    className="mr-1"
                                    aria-hidden="true"
                                />
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Project Type Dropdown */}
                    <div>
                        <label
                            htmlFor="projectType"
                            className="block text-sm font-medium text-gray-200 mb-1"
                        >
                            Project Type
                        </label>
                        <div className="relative">
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-white/10 border appearance-none ${
                                    errors.projectType && touched.projectType
                                        ? 'border-red-400'
                                        : touched.projectType &&
                                            formData.projectType
                                          ? 'border-green-400'
                                          : 'border-white/20'
                                } rounded-lg p-3 h-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                                aria-invalid={
                                    errors.projectType && touched.projectType
                                        ? 'true'
                                        : 'false'
                                }
                                aria-describedby={
                                    errors.projectType && touched.projectType
                                        ? 'projectType-error'
                                        : undefined
                                }
                            >
                                {projectTypes.map((type) => (
                                    <option
                                        key={type.value}
                                        value={type.value}
                                        className={
                                            type.value === ''
                                                ? 'text-gray-400'
                                                : 'text-white'
                                        }
                                        style={{ backgroundColor: '#1e1e2f' }}
                                    >
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                            {/* Custom arrow for better mobile touch */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        {errors.projectType && touched.projectType && (
                            <p
                                id="projectType-error"
                                className="mt-1 text-sm text-red-400 flex items-center"
                            >
                                <FiAlertTriangle
                                    className="mr-1"
                                    aria-hidden="true"
                                />
                                {errors.projectType}
                            </p>
                        )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-200 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={4}
                            placeholder="Tell us about your project..."
                            className={`w-full bg-white/10 border ${
                                errors.message && touched.message
                                    ? 'border-red-400'
                                    : touched.message
                                      ? 'border-green-400'
                                      : 'border-white/20'
                            } rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                            aria-invalid={
                                errors.message && touched.message
                                    ? 'true'
                                    : 'false'
                            }
                            aria-describedby={
                                errors.message && touched.message
                                    ? 'message-error'
                                    : undefined
                            }
                        />
                        {errors.message && touched.message && (
                            <p
                                id="message-error"
                                className="mt-1 text-sm text-red-400 flex items-center"
                            >
                                <FiAlertTriangle
                                    className="mr-1"
                                    aria-hidden="true"
                                />
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button - Increased size for better touch targets */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={submitStatus === 'submitting'}
                            className={`w-full py-4 px-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                submitStatus === 'submitting'
                                    ? 'bg-blue-700 cursor-wait'
                                    : submitStatus === 'success'
                                      ? 'bg-green-600'
                                      : submitStatus === 'error'
                                        ? 'bg-red-600'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                            } text-base font-medium`}
                            aria-live="polite"
                        >
                            {submitStatus === 'submitting' ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <FiCheck className="mr-2" /> Message Sent!
                                </>
                            ) : submitStatus === 'error' ? (
                                <>
                                    <FiAlertTriangle className="mr-2" /> Error
                                    Sending
                                </>
                            ) : (
                                <>
                                    <FiSend className="mr-2" /> Send Message
                                </>
                            )}
                        </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div
                            className="bg-green-500/20 border border-green-500/30 text-green-200 rounded-lg p-3 mt-4"
                            role="alert"
                        >
                            Thank you for contacting us! We&apos;ll get back to
                            you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div
                            className="bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg p-3 mt-4"
                            role="alert"
                        >
                            There was an error sending your message. Please try
                            again or contact us directly.
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
