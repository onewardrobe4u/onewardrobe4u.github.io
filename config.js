/* =====================================================================
   OW4U CUSTOMER HUB: SETTINGS
   This is the only file you need to edit to change links.

   RULES
   - Paste full links that start with https://
   - Leave a link as "" (empty quotes) to hide that button or section.
   - Keep the quote marks and the comma at the end of each line.
   - Save/commit, and the live page updates in about a minute.
     The web address (and the QR code) never changes.
   ===================================================================== */

window.OW4U = {

  /* ---------- YOUR SHOPS ---------- */
  vinted: {
    // Your Vinted profile, e.g. https://www.vinted.co.uk/member/123456789-yourname
    store: "",
    // Where the "Review on Vinted" button goes. Vinted has no direct review
    // link: feedback is left inside the order conversation, so this opens Vinted.
    review: "https://www.vinted.co.uk/",
  },

  depop: {
    // Your Depop shop, e.g. https://www.depop.com/yourname/
    store: "",
    // Depop reviews are left from the buyer's purchase receipt, so this opens Depop.
    review: "https://www.depop.com/",
  },

  ebay: {
    // Your eBay shop or profile, e.g. https://www.ebay.co.uk/usr/yourname
    store: "",
    // eBay's own Leave Feedback page (lists every purchase the buyer can rate).
    review: "https://www.ebay.co.uk/fdbk/leave_feedback",
  },

  /* ---------- SOCIALS & EXTRAS (hidden until filled in) ---------- */
  instagram: "",   // e.g. https://www.instagram.com/yourname/
  tiktok: "",      // e.g. https://www.tiktok.com/@yourname
  website: "",     // your own online shop, when you have one
  email: "",       // general (non-order) enquiries, e.g. hello@yourdomain.co.uk

  /* ---------- ANNOUNCEMENT STRIP (optional) ----------
     A thin black strip at the top of the page. Leave text "" to hide.
     e.g. text: "New trainer drop every Friday", link: your Vinted link */
  announcement: { text: "", link: "" },

  /* ---------- MOVING HOUSE ----------
     If the hub ever moves to a new address, put the new address here.
     Everyone who scans an old QR code is sent straight there. */
  redirect: "",

  /* ---------- VISIT COUNTER (optional, free, no cookies) ----------
     Your GoatCounter code, e.g. "ow4u" for ow4u.goatcounter.com. */
  goatcounter: "",
};
