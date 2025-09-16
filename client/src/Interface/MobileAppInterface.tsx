export const PACKAGE_DATA = [
  { hours: 5, price: 200, popular: false },
  { hours: 10, price: 350, popular: true },
  { hours: 20, price: 600, popular: false },
  { hours: 25, price: 900, popular: false, badge: "Best Value!" },
];

export const PAYMENT_OPTIONS = [
  "QR Code (GCash/PayMaya) - Instant",
  "Cash Payment - Manual confirmation",
  "Auto-reload - Set up automatic top-ups",
];

export const NAVIGATION_ITEMS = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "buyHours", icon: "💳", label: "Buy Hours" },
  { id: "history", icon: "📊", label: "History" },
  { id: "settings", icon: "⚙️", label: "Settings" },
];

export const EFFICIENCY_FEATURES = [
  "Auto-reload when balance < 2 hours",
  "One-tap payment with saved methods",
  "Smart balance predictions",
];
