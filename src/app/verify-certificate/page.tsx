"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FileCheck, Download, AlertTriangle, Loader2, FileText, ArrowLeft, ShieldCheck, CheckCircle2, X, Send, User, Mail, Building2, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

function CertificateContent() {
    const searchParams = useSearchParams();
    const certId = searchParams.get("id");
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [showDownloadForm, setShowDownloadForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formError, setFormError] = useState("");
    const [mounted, setMounted] = useState(false);
    const [dynPdfUrl, setDynPdfUrl] = useState<string>("");
    const [issueDate, setIssueDate] = useState<string>("");
    const [recipientName, setRecipientName] = useState<string>("");
    const [recipientOrg, setRecipientOrg] = useState<string>("");

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            setIsMobile(mobile);
        };
        checkMobile();
    }, []);

    useEffect(() => {
        if (!certId) {
            setIsValid(false);
            setLoading(false);
            return;
        }

        const checkCertificate = async () => {
            try {
                const query = `*[_type == "certificate" && certificateId == $certId][0]{
                    "pdfUrl": pdfFile.asset->url,
                    name,
                    organization,
                    issueDate
                }`;
                const certData = await client.fetch(query, { certId });
                
                if (certData && certData.pdfUrl) {
                    setIsValid(true);
                    // Keep the raw URL for the iframe preview
                    setDynPdfUrl(certData.pdfUrl);
                    if (certData.name) setRecipientName(certData.name);
                    if (certData.organization) setRecipientOrg(certData.organization);
                    if (certData.issueDate) {
                        const dateObj = new Date(certData.issueDate);
                        setIssueDate(dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
                    }
                } else {
                    setIsValid(false);
                }
            } catch (_error) {
                setIsValid(false);
            } finally {
                setLoading(false);
            }
        };

        checkCertificate();
    }, [certId]);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            organization: formData.get("organization"),
            purpose: formData.get("purpose"),
            certId: certId
        };

        try {
            const response = await fetch("/api/certificate-download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitSuccess(true);
                // Trigger download after a short delay
                setTimeout(() => {
                    const link = document.createElement('a');
                    // Appending ?dl= forces the browser to download instead of opening a preview
                    link.href = `${dynPdfUrl}?dl=${certId}.pdf`;
                    link.download = `${certId}.pdf`;
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                }, 1000);
            } else {
                setFormError("Something went wrong. Please try again.");
            }
        } catch (_error) {
            setFormError("Failed to connect. Please check your internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const pdfUrl = dynPdfUrl;

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="relative">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                </div>
                <p className="mt-6 text-gray-600 font-medium animate-pulse text-lg">Authenticating Certificate...</p>
            </div>
        );
    }
    if (!certId || !isValid) {
        return (
            <div className="max-w-2xl mx-auto my-12 md:my-20 px-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-red-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <AlertTriangle className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Certificate ID</h1>
                    <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                        The certificate ID <span className="font-mono bg-gray-100 px-2 py-1 rounded text-red-600 font-bold">&quot;{certId || "empty"}&quot;</span> could not be verified in our official registry.
                        Please check the URL or contact Testriq support if you believe this is an error.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg"
                        >
                            <ArrowLeft size={20} />
                            Return Home
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
                {/* Modern Header Section - DARK AUTHORITATIVE THEME */}
                <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-8 md:p-12 text-white relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-10 -right-10 opacity-5">
                        <ShieldCheck size={400} />
                    </div>
                    {/* Subtle grid pattern for authority */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                {/* GREEN VERIFIED BADGE */}
                                <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full shadow-lg border-2 border-white/40 animate-pulse-slow">
                                    <CheckCircle2 size={18} className="text-white" />
                                    <span className="text-[11px] font-black tracking-widest uppercase text-white">Official Verification</span>
                                </div>
                                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                                    ID: <span className="text-white font-black">{certId}</span>
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white drop-shadow-sm">
                                Assurance Certificate
                            </h1>
                            <p className="text-blue-50 text-lg max-w-2xl font-medium leading-relaxed opacity-95">
                                Official validation of successful completion of Quality Assurance and testing protocols conducted by the Testriq Engineering Team.
                            </p>
                            {recipientName && (
                                <div className="mt-8 p-5 bg-white/10 rounded-2xl border border-white/20 inline-block backdrop-blur-sm animate-in fade-in duration-700">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold block mb-1.5">Issued To</span>
                                    <span className="text-xl md:text-2xl font-bold text-white flex items-center flex-wrap gap-2">
                                        <User size={20} className="text-blue-300" />
                                        {recipientName} 
                                        {recipientOrg && (
                                            <>
                                                <span className="text-white/30 hidden md:inline">|</span>
                                                <Building2 size={18} className="text-blue-300 ml-1 md:ml-0" />
                                                <span className="text-white/80 font-medium text-lg">{recipientOrg}</span>
                                            </>
                                        )}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap shrink-0 gap-4 lg:mb-1">
                            <button
                                onClick={() => setShowDownloadForm(true)}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-all duration-500 shadow-xl cursor-pointer"
                            >
                                <Download size={22} className="group-hover:bounce-y" />
                                DOWNLOAD
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50/50 px-8 py-4 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-sm text-blue-800 font-medium">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        For any questions, comments, or communication related to this certificate, please email us at contact@testriq.com
                    </div>
                    <div className="hidden lg:block h-8 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Verified On</span>
                        <span className="text-xs font-bold text-gray-700">
                            {mounted ? (issueDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })) : "--"}
                        </span>
                    </div>
                </div>

                {/* PDF Showcase Section - Edge-to-Edge */}
                <div className="p-0 bg-white">
                    <div className="relative w-full aspect-[1/1.414] min-h-[600px] md:min-h-[1000px] bg-white flex items-center justify-center">

                        {isMobile ? (
                            <div className="flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                                    <FileCheck className="w-12 h-12 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Your Certificate is Ready</h3>
                                <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
                                    Mobile browsers offer the best viewing experience when opened directly.
                                </p>
                                <a
                                    href={`${pdfUrl}?dl=${certId}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 transform"
                                >
                                    <Download size={20} />
                                    VIEW CERTIFICATE
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH&scrollbar=0&pagemode=none`}
                                className="absolute inset-0 w-full h-full border-0"
                                title={`Certificate ${certId}`}
                                style={{ backgroundColor: 'white' }}
                            />
                        )}
                    </div>

                    <div className="px-6 py-8 flex flex-col items-center gap-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                            <FileCheck size={16} className="text-blue-600" />
                            <span className="text-[10px] md:text-xs font-bold text-blue-800 uppercase tracking-widest leading-none">Identity Fully Verified & Secured</span>
                        </div>
                    </div>

                    {/* Trust Footer - VERTICAL ALIGNMENT */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-gray-100 text-gray-500">
                        <div className="flex flex-col items-center text-center group">
                            <FileText size={32} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-gray-900 font-bold text-base mb-1">Secure Format</h4>
                            <p className="text-sm font-medium text-gray-400">Original PDF Document</p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <FileCheck size={32} className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-gray-900 font-bold text-base mb-1">Official Seal</h4>
                            <p className="text-sm font-medium text-gray-400">Identity Verified & Signed</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <CheckCircle2 size={32} className="text-blue-600 mb-3" />
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight mb-4">Authenticity Guaranteed</p>
                            <div className="relative w-32 h-10">
                                <Image
                                    src="/images/testriq_logo.webp"
                                    alt="Testriq Logo"
                                    fill
                                    className="object-contain opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Request Modal */}
            {showDownloadForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/80 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative">
                            <button
                                onClick={() => setShowDownloadForm(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                                <Download size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-2">Request Certificate</h3>
                            <p className="text-blue-100 text-sm font-medium">Please provide your details to receive the original document.</p>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8">
                            {submitSuccess ? (
                                <div className="text-center py-12 animate-in slide-in-from-bottom-4 duration-500">
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} className="text-green-500" />
                                    </div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2">Thank you!</h4>
                                    <p className="text-gray-500 mb-6">Your request has been received. Your download should start automatically.</p>
                                    <div className="flex flex-col gap-3 items-center">
                                        <a
                                            href={`${pdfUrl}?dl=${certId}.pdf`}
                                            download={`${certId}.pdf`}
                                            className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2"
                                        >
                                            <Download size={16} />
                                            If it doesn&apos;t, click here to download
                                        </a>
                                        <button
                                            onClick={() => setShowDownloadForm(false)}
                                            className="mt-4 px-6 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all cursor-pointer"
                                        >
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    {formError && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-bold flex items-center gap-2">
                                            <AlertTriangle size={14} />
                                            {formError}
                                        </div>
                                    )}

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <div className="relative">
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                                            />
                                            <User className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                                        <div className="relative">
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="Enter your business email address"
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                                            />
                                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Organization</label>
                                            <div className="relative">
                                                <input
                                                    required
                                                    name="organization"
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                                                />
                                                <Building2 className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Purpose</label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    name="purpose"
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium appearance-none"
                                                >
                                                    <option value="">Select Purpose</option>
                                                    <option value="verification">Employment Verification</option>
                                                    <option value="compliance">Compliance Audit</option>
                                                    <option value="personal">Personal Records</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                SUBMIT REQUEST
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function VerifyCertificatePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] pt-8 md:pt-12 pb-12">
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                </div>
            }>
                <CertificateContent />
            </Suspense>
        </div>
    );
}
