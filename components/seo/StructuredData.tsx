export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "aiCloudHub",
        url: "",//"https://www.aicloudhub.com",
        logo: "",//"https://www.aicloudhub.com/logo.png", // Ensure this path is correct or update it
        sameAs: [
           "",// "https://linkedin.com",
        ],
        /*
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-678-935-7600",
            contactType: "customer service",
            email: "info@aicloudhub.com",
            areaServed: ["US", "IN"],
            availableLanguage: "en",
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "108 Colony Park Dr, STE:600",
            addressLocality: "Cumming",
            addressRegion: "GA",
            postalCode: "30041",
            addressCountry: "US",
        },
        */
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
