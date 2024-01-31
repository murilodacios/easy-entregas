const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {

      const { query } = req;

      const session = await stripe.checkout.sessions.create({
        // customer_email: query.email,
        // client_reference_id: query.customerPaymentId,
        line_items: [
          {
            price: 'price_1OdyWpEnK2MclYYddHEUzMzT',
            quantity: parseInt(query.quantity),
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/carteira?success=true`,
        cancel_url: `${req.headers.origin}/carteira?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}