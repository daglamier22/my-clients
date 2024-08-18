import { Button } from "@/components/ui/button";
import salonImg from "@/assets/salon.png";
import calendarImg from "@/assets/calendar.png";
import cellphoneImg from "@/assets/cellphone.png";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto">
      <section
        id="salon"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-accent-foreground">
            We know you care about your{" "}
            <span className="text-primary">Clients</span> as much as we do.
          </h2>
          <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-muted-foreground">
            That&apos;s why we&apos;re here to help you spend less time managing
            you&apos;re business and more time doing what you love.
          </p>
        </article>
        <img src={salonImg} alt="Salon" className="w-1/2" />
      </section>
      <hr className="mx-auto bg-border w-1/2" />
      <section
        id="calendar"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <img src={calendarImg} alt="Cellphone" className="w-1/2" />
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-accent-foreground">
            Schedule you&apos;re <span className="text-primary">Clients</span>{" "}
            from you&apos;re phone.
          </h2>
          <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-muted-foreground">
            No more relying on a paper calendar or client book.
          </p>
          <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-muted-foreground">
            View you&apos;re availability anywhere, anytime.
          </p>
        </article>
      </section>
      <hr className="mx-auto bg-border w-1/2" />
      <section
        id="cellphone"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <img src={cellphoneImg} alt="Cellphone" className="w-1/2" />
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-accent-foreground">
            Keep in touch with you&apos;re{" "}
            <span className="text-primary">Clients</span>.
          </h2>
          <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-muted-foreground">
            Keep track of phone numbers, e-mail addresses, and other notes for
            each client.
          </p>
          <p className="max-w-md text-2xl-mt-4 text-center sm:text-left text-muted-foreground">
            Automatically send reminders of upcoming appointments.
          </p>
        </article>
      </section>
      <hr className="mx-auto bg-border w-1/2" />
      <section
        id="contact"
        className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-foreground">
          Contact Us
        </h2>
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject"
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-foreground dark:border-none"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-foreground dark:border-none"
          ></textarea>
          <Button variant={"default"} className="p-3 w-48">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
