import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Sparkles, Shield, Zap, X, Minus, Plus, MapPin, CreditCard, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Item {
  name: string;
  price: string;
  description: string;
}

interface OrderState {
  item: Item | null;
  open: boolean;
}

export function Modify() {
  const [order, setOrder] = useState<OrderState>({ item: null, open: false });
  const [qty, setQty] = useState(1);
  const [step, setStep] = useState<'detail' | 'address' | 'payment' | 'confirm'>('detail');
  const [address, setAddress] = useState({ name: '', phone: '', pincode: '', city: '', state: '', full: '' });
  const [payment, setPayment] = useState<'cod' | 'upi' | 'card' | 'emi'>('cod');
  const [placed, setPlaced] = useState(false);

  const openOrder = (item: Item) => {
    setOrder({ item, open: true });
    setQty(1);
    setStep('detail');
    setPlaced(false);
  };
  const closeOrder = () => setOrder({ item: null, open: false });

  const priceNum = (p: string) => parseInt(p.replace(/[^0-9]/g, ''));
  const totalPrice = order.item ? (priceNum(order.item.price) * qty).toLocaleString('en-IN') : '0';

  const placeOrder = () => {
    setPlaced(true);
    setStep('confirm');
  };

  const categories = [
    {
      name: 'Performance', icon: '⚡', items: [
        { name: 'Cold Air Intake', price: '₹8,999', description: 'Boost engine performance and efficiency' },
        { name: 'Exhaust System', price: '₹25,999', description: 'Premium stainless steel performance exhaust' },
        { name: 'Turbo Kit', price: '₹85,000', description: 'Complete turbocharger kit with installation' },
        { name: 'ECU Remap', price: '₹15,000', description: 'Professional ECU tuning for more power' },
      ]
    },
    {
      name: 'Exterior', icon: '✨', items: [
        { name: 'Body Kit', price: '₹35,000', description: 'Complete aerodynamic body kit' },
        { name: 'Alloy Wheels', price: '₹45,000', description: 'Premium 17" forged alloy wheels set' },
        { name: 'LED Headlights', price: '₹18,000', description: 'High-intensity LED headlight upgrade' },
        { name: 'Roof Spoiler', price: '₹8,500', description: 'Carbon fiber rear spoiler' },
      ]
    },
    {
      name: 'Interior', icon: '🪑', items: [
        { name: 'Racing Seats', price: '₹42,000', description: 'Premium bucket seats with lumbar support' },
        { name: 'Steering Wheel', price: '₹12,000', description: 'Leather-wrapped sport steering wheel' },
        { name: 'Audio System', price: '₹35,000', description: 'Premium sound system with subwoofer' },
        { name: 'Floor Mats', price: '₹3,500', description: 'Custom-fit premium floor mats' },
      ]
    },
    {
      name: 'Safety', icon: '🛡️', items: [
        { name: 'Dash Cam', price: '₹8,999', description: 'Dual camera with night vision' },
        { name: 'Reverse Camera', price: '₹6,500', description: 'HD parking camera with guidelines' },
        { name: 'Parking Sensors', price: '₹4,999', description: 'Front & rear parking sensors' },
        { name: 'Blind Spot Mirror', price: '₹1,999', description: 'Wide-angle blind spot mirrors' },
      ]
    },
  ];

  return (
    <div className="pt-[68px] min-h-screen bg-[#f4f6f9]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d0f12] via-[#1a1a2e] to-[#14060a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(230,57,70,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="container max-w-[1320px] mx-auto px-10 relative z-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#e63946]" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#e63946]">Customize Your Ride</span>
            </div>
            <h1 className="font-serif text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1px] mb-6">
              Car <em className="text-[#e63946] italic">Modifications</em> & Accessories
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.75)] leading-relaxed">
              Transform your vehicle with premium modifications. Order directly — delivered & installed at your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container max-w-[1320px] mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { Icon: Wrench, title: 'Expert Installation', desc: 'Professional installation by certified technicians' },
              { Icon: Shield, title: 'Genuine Parts', desc: '100% authentic parts with warranty coverage' },
              { Icon: Sparkles, title: 'Quality Assured', desc: 'Premium quality products from trusted brands' },
              { Icon: Zap, title: 'Quick Service', desc: 'Fast turnaround time for all modifications' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4"><Icon className="w-8 h-8 text-[#e63946]" /></div>
                <h3 className="text-lg font-semibold text-[#0d0f12] mb-2">{title}</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container max-w-[1320px] mx-auto px-10">
          {categories.map((cat, idx) => (
            <div key={cat.name} className={idx > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{cat.icon}</div>
                <div>
                  <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] text-[#0d0f12]">{cat.name}</h2>
                  <div className="w-20 h-[2px] bg-[#e63946] mt-2" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map(item => (
                  <div key={item.name} className="bg-white rounded-lg border border-[#dde1e7] p-6 hover:border-[#e63946] hover:shadow-[0_8px_40px_rgba(230,57,70,0.09)] transition-all">
                    <h3 className="font-semibold text-lg text-[#0d0f12] mb-2">{item.name}</h3>
                    <p className="text-sm text-[#6b7280] mb-4 min-h-[40px]">{item.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#dde1e7]">
                      <div className="text-[#e63946] font-semibold text-lg">{item.price}</div>
                      <button
                        onClick={() => openOrder(item)}
                        className="px-4 py-2 bg-[#e63946] text-white rounded-[2px] text-xs font-semibold uppercase hover:bg-[#ff4d5a] transition-all shadow-sm"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d0f12] to-[#1a1a2e] text-white">
        <div className="container max-w-[1320px] mx-auto px-10 text-center">
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-1px] mb-6">Ready to Upgrade Your Car?</h2>
          <p className="text-[rgba(255,255,255,0.75)] max-w-[560px] mx-auto mb-10">Book a consultation with our modification experts and get a custom quote for your project.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-[#e63946] text-white hover:bg-[#ff4d5a] transition-all">Book Consultation</Link>
            <Link to="/mechanics" className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[2px] text-[14px] font-semibold tracking-wide uppercase bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#0d0f12] transition-all">Find Specialists</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ORDER MODAL — Amazon/Flipkart style
         ═══════════════════════════════════════ */}
      {order.open && order.item && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto p-4 pt-10">
          <div className="bg-white rounded-2xl w-full max-w-[700px] shadow-2xl relative">

            {/* Close */}
            <button onClick={closeOrder} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 hover:text-[#e63946] transition-colors z-10">
              <X className="w-4 h-4" />
            </button>

            {/* Steps breadcrumb */}
            {!placed && (
              <div className="flex items-center gap-0 border-b border-gray-100 px-6 pt-5 pb-4">
                {[['detail', 'Item Details'], ['address', 'Delivery'], ['payment', 'Payment']].map(([s, label], i) => (
                  <div key={s} className="flex items-center">
                    <div className={`flex items-center gap-1.5 text-[12px] font-semibold tracking-wide uppercase ${step === s ? 'text-[#e63946]' : 'text-gray-400'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === s ? 'bg-[#e63946] text-white' : 'bg-gray-200 text-gray-400'}`}>{i + 1}</div>
                      {label}
                    </div>
                    {i < 2 && <ChevronRight className="w-4 h-4 text-gray-300 mx-2" />}
                  </div>
                ))}
              </div>
            )}

            <div className="p-6">
              {/* ── STEP 1: Item Detail ── */}
              {step === 'detail' && (
                <div>
                  <h2 className="text-xl font-bold text-[#0d0f12] mb-6">Order Details</h2>
                  <div className="flex gap-4 bg-[#f4f6f9] rounded-xl p-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#e63946] to-[#ff6b6b] rounded-lg flex items-center justify-center text-4xl flex-shrink-0">🔧</div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#0d0f12] text-lg">{order.item.name}</div>
                      <div className="text-sm text-[#6b7280] mt-1 mb-3">{order.item.description}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">In Stock</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">✔ Genuine Part</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">Free Installation</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold text-[#e63946]">{order.item.price}</div>
                      <div className="text-xs text-[#6b7280] mt-0.5">per unit</div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-semibold text-[#0d0f12]">Quantity</span>
                    <div className="flex items-center gap-3 border border-[#dde1e7] rounded-lg overflow-hidden">
                      <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 flex items-center justify-center hover:bg-red-50 hover:text-[#e63946] transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-[#0d0f12]">{qty}</span>
                      <button onClick={() => setQty(q => Math.min(10, q + 1))} className="w-9 h-9 flex items-center justify-center hover:bg-red-50 hover:text-[#e63946] transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price summary */}
                  <div className="bg-[#f4f6f9] rounded-xl p-4 space-y-2 mb-6">
                    <div className="flex justify-between text-sm text-[#6b7280]"><span>Item price × {qty}</span><span>₹{totalPrice}</span></div>
                    <div className="flex justify-between text-sm text-green-600"><span>Installation charges</span><span>FREE</span></div>
                    <div className="flex justify-between text-sm text-green-600"><span>Delivery charges</span><span>FREE</span></div>
                    <div className="border-t border-[#dde1e7] pt-2 flex justify-between font-bold text-[#0d0f12] text-lg"><span>Total</span><span className="text-[#e63946]">₹{totalPrice}</span></div>
                  </div>

                  <button onClick={() => setStep('address')} className="w-full py-3.5 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#ff4d5a] transition-all text-sm tracking-wide uppercase">
                    Proceed to Delivery →
                  </button>
                </div>
              )}

              {/* ── STEP 2: Address ── */}
              {step === 'address' && (
                <div>
                  <h2 className="text-xl font-bold text-[#0d0f12] mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#e63946]" /> Delivery Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input value={address.name} onChange={e => setAddress(a => ({ ...a, name: e.target.value }))}
                        className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors"
                        placeholder="Pratik Vala" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">Phone *</label>
                      <input value={address.phone} onChange={e => setAddress(a => ({ ...a, phone: e.target.value }))}
                        className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors"
                        placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">Full Address *</label>
                    <textarea value={address.full} onChange={e => setAddress(a => ({ ...a, full: e.target.value }))}
                      className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors resize-none"
                      rows={3} placeholder="House No., Street, Area, Landmark" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">Pincode *</label>
                      <input value={address.pincode} onChange={e => setAddress(a => ({ ...a, pincode: e.target.value }))}
                        className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors"
                        placeholder="380015" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">City *</label>
                      <input value={address.city} onChange={e => setAddress(a => ({ ...a, city: e.target.value }))}
                        className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors"
                        placeholder="Ahmedabad" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">State *</label>
                      <input value={address.state} onChange={e => setAddress(a => ({ ...a, state: e.target.value }))}
                        className="w-full border border-[#dde1e7] rounded-lg px-3.5 py-2.5 text-sm text-[#0d0f12] focus:outline-none focus:border-[#e63946] transition-colors"
                        placeholder="Gujarat" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3 mb-6">
                    <Truck className="w-4 h-4 flex-shrink-0" />
                    <span>Free delivery + installation at your address within 3-5 business days.</span>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep('detail')} className="flex-1 py-3 border border-[#dde1e7] text-[#6b7280] font-semibold rounded-lg hover:border-[#0d0f12] hover:text-[#0d0f12] transition-all text-sm">← Back</button>
                    <button onClick={() => setStep('payment')} className="flex-[2] py-3 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#ff4d5a] transition-all text-sm tracking-wide uppercase">
                      Proceed to Payment →
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Payment ── */}
              {step === 'payment' && (
                <div>
                  <h2 className="text-xl font-bold text-[#0d0f12] mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#e63946]" /> Payment Method
                  </h2>

                  <div className="space-y-3 mb-6">
                    {([
                      { id: 'cod', label: 'Cash on Delivery', sub: 'Pay when item is delivered', icon: '💵' },
                      { id: 'upi', label: 'UPI', sub: 'PhonePe, GPay, Paytm, BHIM', icon: '📱' },
                      { id: 'card', label: 'Credit / Debit Card', sub: 'All major cards accepted', icon: '💳' },
                      { id: 'emi', label: 'EMI (No Cost)', sub: 'Available on orders above ₹10,000', icon: '📅' },
                    ] as const).map(opt => (
                      <div key={opt.id}
                        onClick={() => setPayment(opt.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${payment === opt.id ? 'border-[#e63946] bg-red-50' : 'border-[#dde1e7] hover:border-[#0d0f12]'}`}
                      >
                        <div className="text-2xl">{opt.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#0d0f12] text-sm">{opt.label}</div>
                          <div className="text-xs text-[#6b7280]">{opt.sub}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${payment === opt.id ? 'border-[#e63946]' : 'border-gray-300'}`}>
                          {payment === opt.id && <div className="w-2 h-2 rounded-full bg-[#e63946]" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order summary */}
                  <div className="bg-[#f4f6f9] rounded-xl p-4 mb-6">
                    <div className="font-semibold text-[#0d0f12] mb-3 text-sm">Order Summary</div>
                    <div className="flex justify-between text-sm text-[#6b7280] mb-1"><span>{order.item?.name} × {qty}</span><span>₹{totalPrice}</span></div>
                    <div className="flex justify-between text-sm text-green-600 mb-1"><span>Installation</span><span>FREE</span></div>
                    <div className="border-t border-[#dde1e7] pt-2 mt-2 flex justify-between font-bold text-[#0d0f12]">
                      <span>Total Payable</span><span className="text-[#e63946]">₹{totalPrice}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep('address')} className="flex-1 py-3 border border-[#dde1e7] text-[#6b7280] font-semibold rounded-lg hover:border-[#0d0f12] hover:text-[#0d0f12] transition-all text-sm">← Back</button>
                    <button onClick={placeOrder} className="flex-[2] py-3 bg-[#e63946] text-white font-bold rounded-lg hover:bg-[#ff4d5a] transition-all text-sm tracking-wide uppercase shadow-[0_4px_16px_rgba(230,57,70,0.35)]">
                      Place Order ₹{totalPrice} →
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Confirmation ── */}
              {step === 'confirm' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0d0f12] mb-2">Order Placed Successfully! 🎉</h2>
                  <p className="text-[#6b7280] mb-6">Your order for <strong className="text-[#0d0f12]">{order.item?.name}</strong> has been confirmed.</p>

                  <div className="bg-[#f4f6f9] rounded-xl p-5 text-left mb-6 max-w-[360px] mx-auto">
                    <div className="text-xs font-bold text-[#6b7280] uppercase tracking-wider mb-3">Order Details</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-[#6b7280]">Order ID</span><span className="font-semibold text-[#0d0f12]">#CS{Date.now().toString().slice(-8)}</span></div>
                      <div className="flex justify-between"><span className="text-[#6b7280]">Item</span><span className="font-semibold text-[#0d0f12]">{order.item?.name}</span></div>
                      <div className="flex justify-between"><span className="text-[#6b7280]">Quantity</span><span className="font-semibold text-[#0d0f12]">{qty}</span></div>
                      <div className="flex justify-between"><span className="text-[#6b7280]">Total Paid</span><span className="font-semibold text-[#e63946]">₹{totalPrice}</span></div>
                      <div className="flex justify-between"><span className="text-[#6b7280]">Delivery</span><span className="font-semibold text-green-600">3–5 Business Days</span></div>
                      <div className="flex justify-between"><span className="text-[#6b7280]">Payment</span><span className="font-semibold text-[#0d0f12] capitalize">{payment === 'cod' ? 'Cash on Delivery' : payment.toUpperCase()}</span></div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button onClick={closeOrder} className="px-8 py-3 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#ff4d5a] transition-all text-sm">
                      Continue Shopping
                    </button>
                    <Link to="/dashboard" onClick={closeOrder} className="px-8 py-3 border border-[#dde1e7] text-[#0d0f12] font-semibold rounded-lg hover:border-[#0d0f12] transition-all text-sm">
                      Track Order
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
