export default function TermConditionsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-6 text-white/50">
      <h1 className="text-4xl font-bold mb-4 text-white">Terms & Conditions</h1>

      <p>
        Welcome to our DJ Event Booking Platform. By booking any event through
        our website, you agree to the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-white">Booking Policy</h2>
      <p>
        All bookings must be confirmed at least 7 days prior to the event date.
        A non-refundable advance payment is required to reserve your date.
      </p>

      <h2 className="text-2xl font-semibold text-white">Cancellation Policy</h2>
      <p>
        Cancellations made within 48 hours of the event will result in a 50%
        cancellation fee. No-shows will be charged the full booking amount.
      </p>

      <h2 className="text-2xl font-semibold text-white">Event Guidelines</h2>
      <p>
        Clients are responsible for providing a safe environment for our DJ
        team. We reserve the right to stop services in case of unsafe conditions
        or inappropriate behavior.
      </p>

      <h2 className="text-2xl font-semibold text-white">Liability</h2>
      <p>
        We are not liable for any technical failures or delays caused by
        unforeseen circumstances beyond our control, including power outages or
        weather conditions.
      </p>

      <p className="font-medium">
        By booking our services, you accept these terms. For any queries,
        contact us at bookings@youreventsite.com
      </p>
    </main>
  );
}
