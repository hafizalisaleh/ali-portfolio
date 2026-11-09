import { useState } from "react";
import { Mail, Send, Copy, Check, Loader2 } from "lucide-react";
import { profile, socials, contactConfig } from "@/data/portfolio";
import { sendContactMessage } from "@/lib/api";
import SocialIcon from "./SocialIcon";
import { cn } from "@/lib/utils";

const empty = { name: "", email: "", message: "" };

// Validation adapted from Profile-Generator's Contact form
const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name";
  if (!email.trim()) errors.email = "Please enter your email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email";
  if (!message.trim()) errors.message = "Please enter a message";
  else if (message.trim().length < 10) errors.message = "Message should be at least 10 characters";
  return errors;
};

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-medium">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
  </label>
);

const inputCls = (err) =>
  cn(
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:ring-2",
    err ? "border-red-500 focus:ring-red-500/20" : "border-input focus:border-primary focus:ring-primary/20"
  );

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    const res = await sendContactMessage(form);
    if (res.success) {
      setStatus("sent");
      setForm(empty);
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container grid gap-12 md:grid-cols-2">
        <div className="reveal">
          <p className="section-kicker">05. Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="mt-4 text-muted-foreground">
            Have a project, an opportunity, or just want to talk about ML or web development? My inbox is open.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <a href={`mailto:${profile.email}`} className="flex-1 truncate text-sm font-medium hover:text-primary">
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Copy email address"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target={s.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="reveal space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Field label="Name" error={errors.name}>
            <input name="name" value={form.name} onChange={onChange} className={inputCls(errors.name)} placeholder="Your name" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={inputCls(errors.email)}
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className={cn(inputCls(errors.message), "resize-none")}
              placeholder="Tell me about your project…"
            />
          </Field>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-center text-sm text-accent animate-in fade-in">
              {contactConfig.googleForm
                ? "Thanks! Your message was sent — I'll get back to you soon."
                : "Your email app should open with the message ready to send."}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-500">Something went wrong. Please email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
