import React, { useState, useEffect } from "react";
import { OctagonAlert, ThumbsUp, ThumbsDown, Maximize2, Minimize2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AlertCard({ alerts }) {
    const [selectedAlert, setSelectedAlert] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();

    // Set first alert when alerts are loaded
    useEffect(() => {
        if (alerts && alerts.length > 0 && !selectedAlert) {
            setSelectedAlert(alerts[0]);
        }
    }, [alerts, selectedAlert]);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    // Don't render if no alerts
    if (!alerts || alerts.length === 0) {
        return null;
    }

    return (
        <div className={`flex flex-col h-full transition-all duration-300 bg-white rounded-2xl shadow-lg overflow-hidden ${isExpanded ? 'absolute inset-0 z-50 m-4' : ''}`}>
            {/* Header - stretched across top */}
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                <h2 className="text-base font-semibold text-gray-900">
                    Recent Alerts
                </h2>
                <button
                    onClick={toggleExpand}
                    className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                    title={isExpanded ? "Collapse" : "Expand"}
                >
                    {isExpanded ? (
                        <Minimize2 className="text-gray-600" size={18} strokeWidth={2} />
                    ) : (
                        <Maximize2 className="text-gray-600" size={18} strokeWidth={2} />
                    )}
                </button>
            </div>

            {/* Content area - alerts list and detail side by side */}
            <div className="flex flex-row flex-1 overflow-hidden">
                {/* Alerts List */}
                <div className="flex flex-col w-[240px]  border-gray-200">
                    <div className="overflow-y-auto flex-1 p-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {alerts.map((alert) => (
                            <div
                                key={alert.id}
                                onClick={() => setSelectedAlert(alert)}
                                className={`p-4 cursor-pointer border rounded-xl mb-2 shadow-lg border-gray-200 transition-colors ${
                                    selectedAlert?.id === alert.id
                                        ? 'bg-gray-200'
                                        : 'bg-white hover:bg-gray-100'
                                }`}
                            >
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                    {alert.title}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                    {alert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alert Detail Content */}
                <div className="flex-1 flex flex-col bg-white border m-3 rounded-xl shadow-lg">
                    {selectedAlert && (
                        <div className="flex flex-col items-center justify-center text-center h-full px-8">
                            <OctagonAlert
                                size={56}
                                className="text-red-500 mb-4"
                                strokeWidth={2}
                            />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {selectedAlert.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-6 max-w-md text-gray-700">
                                {selectedAlert.details}
                            </p>

                            <div className="flex space-x-6 mt-2">
                                <button
                                    className="p-2 rounded hover:bg-gray-100 transition-colors"
                                    title="Acknowledge"
                                >
                                    <ThumbsUp size={22} className="text-gray-700" strokeWidth={2} />
                                </button>
                                <button
                                    className="p-2 rounded hover:bg-gray-100 transition-colors"
                                    title="Dismiss"
                                >
                                    <ThumbsDown size={22} className="text-gray-700" strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}