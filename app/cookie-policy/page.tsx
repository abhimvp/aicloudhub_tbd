import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | AI Cloud Hub",
  description:
    "Learn how AI Cloud Hub uses cookies to improve your experience and analyze website traffic.",
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  <strong className="text-slate-900 dark:text-white">Necessary Cookies:</strong> These are essential for our website to function properly. They enable core functionality such as page navigation and access to secure areas.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Preference Cookies:</strong> These allow our website to remember choices you make (such as your preferred theme or language) to provide a more personalized experience.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Analytics Cookies:</strong> We use these to understand how visitors interact with our website, helping us improve our content and user experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                4. Changes to This Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                5. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have any questions about our use of cookies or other technologies, please email us at{" "}
                <a href="mailto:info@aicloudhub.com" className="text-orange-500 hover:text-orange-600 font-medium">
                  info@aicloudhub.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

