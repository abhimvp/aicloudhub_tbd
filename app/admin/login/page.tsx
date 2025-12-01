import { redirect } from "next/navigation";
import { isAdminRequest, setAdminSession } from "@/lib/adminGuard";

export default async function AdminLoginPage() {
  if (await isAdminRequest()) {
    redirect("/admin/blogs");
  }

  async function handleLogin(formData: FormData) {
    "use server";

    const password = formData.get("password")?.toString() || "";
    const expected = process.env.ADMIN_ACCESS_PASSWORD;

    if (!expected || password !== expected) {
      return;
    }

    await setAdminSession();
    redirect("/admin/blogs");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 text-neutral-900 dark:bg-slate-950 dark:text-neutral-100 px-4">
      <form
        action={handleLogin}
        className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-sm border border-neutral-200 dark:bg-slate-900 dark:border-slate-700"
      >
        <h1 className="text-lg font-semibold">Admin access</h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Enter the shared admin password to manage blogs and careers.
        </p>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm bg-white text-neutral-900 dark:bg-slate-800 dark:border-slate-600 dark:text-neutral-100"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-black"
        >
          Continue
        </button>
      </form>
    </div>
  );
}



